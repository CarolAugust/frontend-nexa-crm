import type { Lead } from './lead';
import type { EtapaOportunidade } from './oportunidade';
export interface ResumoIndicadores {
  totalClientes: number; leadsAtivos: number; oportunidadesAbertas: number; valorTotalCentavos: number; somenteLeitura: boolean;
  oportunidadesPorEtapa: { etapa: EtapaOportunidade; quantidade: number; valorCentavos: number }[];
  ultimosLeads: Lead[];
}
