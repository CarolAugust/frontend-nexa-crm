import { Box } from '@mui/material';
export const rotulos: Record<string, string> = { ATIVO: 'Ativo', INATIVO: 'Inativo', NOVO: 'Novo', EM_CONTATO: 'Em contato', QUALIFICADO: 'Qualificado', CONVERTIDO: 'Convertido', PROSPECCAO: 'Prospecção', NEGOCIACAO: 'Negociação', PROPOSTA_ENVIADA: 'Proposta enviada', GANHA: 'Ganha', PERDIDA: 'Perdida' };
export const coresStatus: Record<string, string> = { ATIVO: '#13876B', INATIVO: '#6B7280', NOVO: '#2563EB', EM_CONTATO: '#B87C13', QUALIFICADO: '#8656CA', CONVERTIDO: '#13876B', PROSPECCAO: '#6195F3', NEGOCIACAO: '#A385EB', PROPOSTA_ENVIADA: '#E5AE4B', GANHA: '#33AD91', PERDIDA: '#DF7C8B' };
export function TextoStatus({ valor }: { valor: string }) {
  const cor = coresStatus[valor] ?? '#64748B';
  return <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', gap: .7, bgcolor: `${cor}12`, color: cor, borderRadius: 1.2, px: 1, py: .5, fontSize: 11, fontWeight: 600 }}><Box component="span" sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: cor }} />{rotulos[valor] ?? valor}</Box>;
}
export function formatarMoeda(centavos: number) { return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }).format(centavos / 100); }
