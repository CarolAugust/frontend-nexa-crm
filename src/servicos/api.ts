import axios from 'axios';
export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api', timeout: 10000 });
export function descreverErro(erro: unknown): string {
  if (axios.isAxiosError(erro)) {
    const mensagem = erro.response?.data?.message;
    if (mensagem) return Array.isArray(mensagem) ? mensagem.join(' ') : mensagem;
    if (!erro.response) return 'Não foi possível conectar à API. Confira se o backend está em execução e tente novamente.';
  }
  return 'Não foi possível concluir a operação. Tente novamente.';
}
