import { criarServicoCadastro } from './cadastro';
import type { Lead } from '@/tipos/lead';
export const servicoLeads = criarServicoCadastro<Lead>('leads');
