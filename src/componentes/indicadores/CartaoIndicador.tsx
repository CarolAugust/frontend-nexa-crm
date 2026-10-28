import { Box, Paper, Typography } from '@mui/material';
import type { LucideIcon } from 'lucide-react';
export function CartaoIndicador({ titulo, valor, detalhe, icone: Icone, cor }: { titulo: string; valor: string | number; detalhe: string; icone: LucideIcon; cor: string }) {
  return <Paper variant="outlined" sx={{ p: 2.5, borderColor: '#E7EBF1', borderRadius: 2.5 }}><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}><Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{titulo}</Typography><Box sx={{ p: 1, bgcolor: `${cor}10`, borderRadius: 2, display: 'flex', color: cor }}><Icone size={18} /></Box></Box><Typography sx={{ fontSize: { xs: 25, lg: 29 }, letterSpacing: '-1px', fontWeight: 750, mt: 1 }}>{valor}</Typography><Typography sx={{ fontSize: 10.5, color: 'text.secondary', mt: .8 }}>{detalhe}</Typography></Paper>;
}
