'use client';
import { Box, Chip, IconButton, Typography } from '@mui/material';
import { Menu, ChevronRight, CircleHelp } from 'lucide-react';
import { usePathname } from 'next/navigation';
export function BarraSuperior({ abrirMenu }: { abrirMenu: () => void }) {
  const caminho = usePathname();
  const titulo = ({ '/painel': 'Visão geral', '/clientes': 'Clientes', '/leads': 'Leads', '/oportunidades': 'Oportunidades' } as Record<string, string>)[caminho] ?? 'Nexa CRM';
  return <Box component="header" sx={{ height: 76, px: { xs: 2, md: 4 }, bgcolor: 'white', borderBottom: '1px solid #E9EDF2', display: 'flex', alignItems: 'center', gap: 1.5 }}><IconButton onClick={abrirMenu} aria-label="Abrir navegação" sx={{ display: { md: 'none' } }}><Menu size={22} /></IconButton><Typography sx={{ color: 'text.secondary', fontSize: 12, display: { xs: 'none', sm: 'block' } }}>Espaço de trabalho</Typography><ChevronRight size={14} color="#A5ADBA" /><Typography sx={{ fontSize: 12, fontWeight: 600 }}>{titulo}</Typography><Box sx={{ ml: 'auto', display: 'flex', gap: 2, alignItems: 'center' }}><Chip label="Ambiente de demonstração" size="small" variant="outlined" sx={{ borderColor: '#DCE7FC', color: '#3462BD', fontSize: 10, bgcolor: '#F7FAFF', display: { xs: 'none', sm: 'flex' } }} /><IconButton component="a" href="https://github.com/CarolAugust" target="_blank" rel="noreferrer" aria-label="Conhecer a autora"><CircleHelp size={19} /></IconButton><Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: '#EFF4FF', color: '#2563EB', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 }}>CA</Box></Box></Box>;
}
