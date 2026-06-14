/** Erros da camada de IA, mapeados para respostas HTTP amigáveis na rota. */

/** Falta de configuração (chave/provider) — vira HTTP 503 com instrução. */
export class ErroConfiguracaoIA extends Error {}

/** O provider respondeu, mas com erro ou JSON fora do esperado — vira HTTP 502. */
export class ErroRespostaIA extends Error {}
