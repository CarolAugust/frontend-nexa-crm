export function converterReaisEmCentavos(texto: string): number {
  const valor = Number(texto);
  if (!texto.trim() || !Number.isFinite(valor) || valor < 0 || valor > 21474836.47) throw new Error('Informe um valor válido entre R$ 0,00 e R$ 21.474.836,47.');
  return Math.round(valor * 100);
}
