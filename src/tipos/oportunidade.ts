import type { Cliente } from './cliente';
export type EtapaOportunidade = 'PROSPECCAO' | 'NEGOCIACAO' | 'PROPOSTA_ENVIADA' | 'GANHA' | 'PERDIDA';
export interface Oportunidade {
  id: string; titulo: string; clienteId: string; cliente: Cliente; valorCentavos: number; etapa: EtapaOportunidade; criadoEm: string; atualizadoEm: string;
}
export type DadosOportunidade = Pick<Oportunidade, 'titulo' | 'clienteId' | 'valorCentavos' | 'etapa'>;
