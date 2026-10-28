import { api } from './api';
import type { ResumoIndicadores } from '@/tipos/indicadores';
export async function buscarIndicadores() { return (await api.get<ResumoIndicadores>('/indicadores/resumo')).data; }
