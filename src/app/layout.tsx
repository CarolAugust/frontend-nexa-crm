import type { Metadata } from 'next';
import { Provedores } from '@/componentes/Provedores';
import { EstruturaPrincipal } from '@/componentes/estrutura/EstruturaPrincipal';
import '@/estilos/globais.css';
export const metadata: Metadata = { title: 'Nexa CRM | Relacionamentos que geram resultados', description: 'CRM de demonstração desenvolvido por Caroline Augusto. Clientes, leads e oportunidades em um só lugar.' };
export default function LayoutRaiz({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Provedores><EstruturaPrincipal>{children}</EstruturaPrincipal></Provedores></body></html>;
}
