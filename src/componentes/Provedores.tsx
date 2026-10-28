'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { tema } from '@/estilos/tema';
export function Provedores({ children }: { children: React.ReactNode }) {
  return <AppRouterCacheProvider options={{ key: 'nexa' }}><ThemeProvider theme={tema}><CssBaseline />{children}</ThemeProvider></AppRouterCacheProvider>;
}
