import { criarServicoCadastro } from './cadastro';
import type { Cliente } from '@/tipos/cliente';
export const servicoClientes = criarServicoCadastro<Cliente>('clientes');
