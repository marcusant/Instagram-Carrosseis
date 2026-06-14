/**
 * 🖼️ OTIMIZAÇÃO DE IMAGEM NO UPLOAD (Fase A)
 *
 * Fotos de celular chegam com 5–15MB; guardar isso cru no IndexedDB e no PNG
 * exportado pesa à toa. Antes de usar, a imagem é redimensionada para um lado
 * máximo seguro e re-encodada como JPEG — qualidade visual igual no slide
 * (que exporta a ~1680px), arquivo muito menor.
 */

/** Lado máximo da imagem guardada (sobra folga p/ o export em escala 3). */
const LADO_MAXIMO = 2048;
const QUALIDADE_JPEG = 0.85;
/** Abaixo deste tamanho (e do lado máximo) o arquivo passa sem re-encodar. */
const BYTES_SEM_OTIMIZAR = 500_000;

function lerComoDataUrl(arquivo: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(arquivo);
  });
}

function carregarImagem(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Arquivo de imagem inválido."));
    img.src = src;
  });
}

/**
 * Converte o arquivo enviado em dataURL otimizado: redimensiona se passar de
 * LADO_MAXIMO e re-encoda como JPEG se for pesado. Arquivos já pequenos
 * passam intactos (preserva PNG/transparência quando não há ganho).
 */
export async function arquivoParaDataUrlOtimizado(arquivo: File): Promise<string> {
  const original = await lerComoDataUrl(arquivo);
  const img = await carregarImagem(original);
  const maiorLado = Math.max(img.naturalWidth, img.naturalHeight);

  if (maiorLado <= LADO_MAXIMO && arquivo.size <= BYTES_SEM_OTIMIZAR) {
    return original;
  }

  const escala = Math.min(1, LADO_MAXIMO / maiorLado);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.naturalWidth * escala);
  canvas.height = Math.round(img.naturalHeight * escala);
  const ctx = canvas.getContext("2d");
  if (!ctx) return original;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", QUALIDADE_JPEG);
}
