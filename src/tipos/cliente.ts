export interface Cliente {
  id: string; nome: string; empresa: string; email: string; telefone: string; cidade: string; status: 'ATIVO' | 'INATIVO'; criadoEm: string; atualizadoEm: string;
}
export type DadosCliente = Omit<Cliente, 'id' | 'criadoEm' | 'atualizadoEm'>;
