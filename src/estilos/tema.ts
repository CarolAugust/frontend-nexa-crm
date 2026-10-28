import { createTheme } from '@mui/material/styles';
export const tema = createTheme({
  palette: { primary: { main: '#2563EB' }, background: { default: '#F7F8FA', paper: '#FFFFFF' }, text: { primary: '#111827', secondary: '#687386' }, success: { main: '#168366' } },
  typography: { fontFamily: 'Arial, Helvetica, sans-serif', button: { textTransform: 'none', fontWeight: 600 }, h4: { fontSize: '1.9rem', fontWeight: 750, letterSpacing: '-1px' }, h6: { fontWeight: 700, fontSize: '1.05rem' } },
  shape: { borderRadius: 12 },
  components: { MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { borderRadius: 8, padding: '10px 18px' } } }, MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } }, MuiTableCell: { styleOverrides: { head: { color: '#687386', background: '#FBFCFD', fontSize: 12, fontWeight: 600 }, root: { borderColor: '#EDF0F4', padding: '18px 20px' } } }, MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 8 } } } },
});
