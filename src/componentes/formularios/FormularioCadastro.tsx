'use client';
import { useState } from 'react';
import { Alert, Box, Button, CircularProgress, DialogActions, DialogContent, MenuItem, TextField } from '@mui/material';
import { descreverErro } from '@/servicos/api';

export interface CampoFormulario { nome: string; rotulo: string; tipo?: 'email' | 'tel' | 'number'; opcoes?: { valor: string; rotulo: string }[]; maximo?: number; minimo?: number; }
export interface PropriedadesFormulario {
  campos: CampoFormulario[];
  valoresIniciais: Record<string, string>;
  aoSalvar: (valores: Record<string, string>) => Promise<void>;
  aoCancelar: () => void;
}
export function FormularioCadastro({ campos, valoresIniciais, aoSalvar, aoCancelar }: PropriedadesFormulario) {
  const [valores, definirValores] = useState(valoresIniciais);
  const [salvando, definirSalvando] = useState(false);
  const [erro, definirErro] = useState('');
  async function enviar(evento: React.FormEvent) {
    evento.preventDefault(); definirSalvando(true); definirErro('');
    try { await aoSalvar(valores); } catch (falha) { definirErro(descreverErro(falha)); } finally { definirSalvando(false); }
  }
  return <Box component="form" onSubmit={enviar}><DialogContent><Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, pt: 1 }}>{campos.map((campo, indice) => <TextField key={campo.nome} autoFocus={indice === 0} label={campo.rotulo} value={valores[campo.nome] ?? ''} onChange={evento => definirValores({ ...valores, [campo.nome]: evento.target.value })} type={campo.tipo ?? 'text'} select={Boolean(campo.opcoes)} required fullWidth disabled={salvando} slotProps={{ htmlInput: { maxLength: campo.maximo ?? 160, minLength: campo.tipo ? undefined : 2, min: campo.tipo === 'number' ? 0 : undefined, max: campo.tipo === 'number' ? 21474836.47 : undefined, step: campo.tipo === 'number' ? '.01' : undefined } }}>{campo.opcoes?.map(opcao => <MenuItem key={opcao.valor} value={opcao.valor}>{opcao.rotulo}</MenuItem>)}</TextField>)}</Box>{erro && <Alert severity="error" sx={{ mt: 3 }}>{erro}</Alert>}</DialogContent><DialogActions sx={{ p: 3, pt: 1 }}><Button onClick={aoCancelar} disabled={salvando} color="inherit">Cancelar</Button><Button type="submit" variant="contained" disabled={salvando} startIcon={salvando ? <CircularProgress size={16} color="inherit" /> : undefined}>{salvando ? 'Salvando...' : 'Salvar registro'}</Button></DialogActions></Box>;
}
