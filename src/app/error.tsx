'use client';
import { Alert, Button } from '@mui/material';
export default function ErroAplicacao({ reset: tentarNovamente }: { error: Error; reset: () => void }) { return <Alert severity="error" action={<Button color="inherit" onClick={tentarNovamente}>Tentar novamente</Button>}>Não foi possível carregar esta página.</Alert>; }
