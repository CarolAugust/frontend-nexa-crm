export interface Lead {
  id: string; nome: string; empresa: string; email: string; telefone: string; origem: string; status: 'NOVO' | 'EM_CONTATO' | 'QUALIFICADO' | 'CONVERTIDO'; criadoEm: string; atualizadoEm: string;
}
export type DadosLead = Omit<Lead, 'id' | 'criadoEm' | 'atualizadoEm'>;
