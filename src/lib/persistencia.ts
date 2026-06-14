/**
 * 💾 PERSISTÊNCIA LOCAL (Fase A)
 *
 * Guarda o trabalho do usuário no próprio navegador para nada se perder
 * num F5 ou ao trocar de pilar/variação/tamanho:
 *
 * - `localStorage` → estados pequenos (edições de texto, ajustes, fontes,
 *   cores, carrosséis gerados por IA…), serializados em JSON.
 * - `IndexedDB`    → imagens de fundo (dataURLs grandes; o localStorage tem
 *   cota de ~5MB e estouraria com poucas fotos).
 *
 * Tudo roda só no navegador; no servidor as funções são no-op seguras.
 */

const PREFIXO = "carrosseis:";

/** Lê um valor do localStorage; devolve `padrao` se não existir ou falhar. */
export function carregarLocal<T>(chave: string, padrao: T): T {
  if (typeof window === "undefined") return padrao;
  try {
    const bruto = window.localStorage.getItem(PREFIXO + chave);
    return bruto ? (JSON.parse(bruto) as T) : padrao;
  } catch (erro) {
    console.warn(`Falha ao carregar "${chave}" do localStorage`, erro);
    return padrao;
  }
}

/** Salva um valor no localStorage (silencioso em caso de cota cheia). */
export function salvarLocal<T>(chave: string, valor: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFIXO + chave, JSON.stringify(valor));
  } catch (erro) {
    console.warn(`Falha ao salvar "${chave}" no localStorage`, erro);
  }
}

// ===== IndexedDB (imagens de fundo) =====

const DB_NOME = "carrosseis";
const DB_VERSAO = 1;
const STORE_IMAGENS = "imagens";

function abrirDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = window.indexedDB.open(DB_NOME, DB_VERSAO);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE_IMAGENS)) {
        req.result.createObjectStore(STORE_IMAGENS);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/** Executa uma operação na store de imagens e fecha a conexão. */
async function comStore<T>(
  modo: IDBTransactionMode,
  acao: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  const db = await abrirDB();
  try {
    return await new Promise<T>((resolve, reject) => {
      const req = acao(db.transaction(STORE_IMAGENS, modo).objectStore(STORE_IMAGENS));
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  } finally {
    db.close();
  }
}

/** Salva a imagem (dataURL) de um slide. Chave = `pilar-tamanho-variação-slide`. */
export async function salvarImagemDB(chave: string, dataUrl: string): Promise<void> {
  try {
    await comStore("readwrite", (s) => s.put(dataUrl, chave));
  } catch (erro) {
    console.warn(`Falha ao salvar imagem "${chave}" no IndexedDB`, erro);
  }
}

/** Remove a imagem de um slide. */
export async function removerImagemDB(chave: string): Promise<void> {
  try {
    await comStore("readwrite", (s) => s.delete(chave));
  } catch (erro) {
    console.warn(`Falha ao remover imagem "${chave}" do IndexedDB`, erro);
  }
}

/** Carrega todas as imagens salvas como `{ chave: dataURL }`. */
export async function carregarImagensDB(): Promise<Record<string, string>> {
  if (typeof window === "undefined") return {};
  try {
    const db = await abrirDB();
    try {
      return await new Promise((resolve, reject) => {
        const store = db
          .transaction(STORE_IMAGENS, "readonly")
          .objectStore(STORE_IMAGENS);
        const reqChaves = store.getAllKeys();
        const reqValores = store.getAll();
        store.transaction.oncomplete = () => {
          const mapa: Record<string, string> = {};
          (reqChaves.result as string[]).forEach((chave, i) => {
            mapa[chave] = reqValores.result[i] as string;
          });
          resolve(mapa);
        };
        store.transaction.onerror = () => reject(store.transaction.error);
      });
    } finally {
      db.close();
    }
  } catch (erro) {
    console.warn("Falha ao carregar imagens do IndexedDB", erro);
    return {};
  }
}
