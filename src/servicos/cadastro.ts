import { api } from './api';
export function criarServicoCadastro<T>(recurso: string) {
  return {
    async listar(pesquisa = '', status = '') { return (await api.get<T[]>(`/${recurso}`, { params: { pesquisa: pesquisa || undefined, status: status || undefined } })).data; },
    async cadastrar(dados: Record<string, string | number>) { return (await api.post<T>(`/${recurso}`, dados)).data; },
    async atualizar(id: string, dados: Record<string, string | number>) { return (await api.patch<T>(`/${recurso}/${id}`, dados)).data; },
    async excluir(id: string) { await api.delete(`/${recurso}/${id}`); },
  };
}
