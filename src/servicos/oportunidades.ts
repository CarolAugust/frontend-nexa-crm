import { criarServicoCadastro } from './cadastro';
import type { Oportunidade } from '@/tipos/oportunidade';
export const servicoOportunidades = criarServicoCadastro<Oportunidade>('oportunidades');
