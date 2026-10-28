'use client';
import { useState } from 'react';
import { Box, Drawer, Typography } from '@mui/material';
import { BarraLateral } from './BarraLateral';
import { BarraSuperior } from './BarraSuperior';
export function EstruturaPrincipal({ children }: { children: React.ReactNode }) {
  const [menuAberto, definirMenuAberto] = useState(false);
  return <Box sx={{ minHeight: '100vh', display: 'flex' }}><Box sx={{ display: { xs: 'none', md: 'block' }, position: 'fixed', inset: '0 auto 0 0' }}><BarraLateral /></Box><Drawer open={menuAberto} onClose={() => definirMenuAberto(false)}><BarraLateral aoNavegar={() => definirMenuAberto(false)} /></Drawer><Box sx={{ ml: { md: '244px' }, width: { xs: '100%', md: 'calc(100% - 244px)' }, minWidth: 0 }}><BarraSuperior abrirMenu={() => definirMenuAberto(true)} /><Box component="main" sx={{ p: { xs: 2, sm: 3, lg: 4 }, maxWidth: 1600, mx: 'auto' }}>{children}<Box component="footer" sx={{ mt: 5, pt: 2, borderTop: '1px solid #E5EAF0', display: 'flex', justifyContent: 'space-between', gap: 2 }}><Typography sx={{ fontSize: 10, color: 'text.secondary' }}>Nexa CRM · Feito por Caroline Augusto</Typography><Typography sx={{ fontSize: 10, color: 'text.secondary' }}>Dados exclusivamente fictícios</Typography></Box></Box></Box></Box>;
}
