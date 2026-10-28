'use client';
import { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputAdornment, MenuItem, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Tooltip, Typography } from '@mui/material';
import { Pencil, Plus, Search, Trash2, Users, ContactRound, Handshake, RefreshCw } from 'lucide-react';
import { servicoClientes } from '@/servicos/clientes';
import { servicoLeads } from '@/servicos/leads';
import { servicoOportunidades } from '@/servicos/oportunidades';
import { buscarIndicadores } from '@/servicos/indicadores';
import { descreverErro } from '@/servicos/api';
import type { Cliente } from '@/tipos/cliente';
import type { Lead } from '@/tipos/lead';
import type { Oportunidade } from '@/tipos/oportunidade';
import { FormularioCliente } from './formularios/FormularioCliente';
import { FormularioLead } from './formularios/FormularioLead';
import { FormularioOportunidade } from './formularios/FormularioOportunidade';
import type { CampoFormulario } from './formularios/FormularioCadastro';
import { formatarMoeda, rotulos, TextoStatus } from './TextoStatus';
import { converterReaisEmCentavos } from '@/utilitarios/valores';

type Categoria = 'clientes' | 'leads' | 'oportunidades';
type Registro = Cliente | Lead | Oportunidade;
const configuracoes = {
  clientes: { titulo: 'Clientes', singular: 'cliente', descricao: 'Bons relacionamentos são a base de grandes negócios.', icone: Users, colunas: ['Nome / E-mail', 'Empresa', 'Telefone', 'Cidade', 'Status'], servico: servicoClientes, formulario: FormularioCliente },
  leads: { titulo: 'Leads', singular: 'lead', descricao: 'Transforme novas conexões em relacionamentos duradouros.', icone: ContactRound, colunas: ['Nome / E-mail', 'Empresa', 'Telefone', 'Origem', 'Status'], servico: servicoLeads, formulario: FormularioLead },
  oportunidades: { titulo: 'Oportunidades', singular: 'oportunidade', descricao: 'Acompanhe seus negócios, da primeira conversa à conquista.', icone: Handshake, colunas: ['Oportunidade', 'Cliente', 'Empresa', 'Valor', 'Etapa'], servico: servicoOportunidades, formulario: FormularioOportunidade },
};
function criarOpcoes(valores: string[]) { return valores.map(valor => ({ valor, rotulo: rotulos[valor] })); }
function valoresDoRegistro(registro: Registro | null, categoria: Categoria): Record<string, string> {
  if (registro && 'titulo' in registro) return { titulo: registro.titulo, clienteId: registro.clienteId, valor: (registro.valorCentavos / 100).toFixed(2), etapa: registro.etapa };
  if (registro && 'nome' in registro) return { nome: registro.nome, empresa: registro.empresa, email: registro.email, telefone: registro.telefone, ...('cidade' in registro ? { cidade: registro.cidade } : { origem: registro.origem }), status: registro.status };
  return categoria === 'oportunidades' ? { titulo: '', clienteId: '', valor: '', etapa: 'PROSPECCAO' } : { nome: '', empresa: '', email: '', telefone: '', [categoria === 'clientes' ? 'cidade' : 'origem']: '', status: categoria === 'clientes' ? 'ATIVO' : 'NOVO' };
}
function celulasDoRegistro(registro: Registro) {
  if ('titulo' in registro) return [<Typography key="titulo" sx={{ fontSize: 12, fontWeight: 600 }}>{registro.titulo}</Typography>, registro.cliente.nome, registro.cliente.empresa, <Typography key="valor" sx={{ fontSize: 12, fontWeight: 700 }}>{formatarMoeda(registro.valorCentavos)}</Typography>, <TextoStatus key="etapa" valor={registro.etapa} />];
  return [<Box key="nome" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}><Avatar sx={{ width: 33, height: 33, bgcolor: '#EDF2FF', color: '#5774B0', fontSize: 11 }}>{registro.nome.split(' ').map(parte => parte[0]).slice(0, 2).join('')}</Avatar><Box><Typography sx={{ fontWeight: 600, fontSize: 12 }}>{registro.nome}</Typography><Typography sx={{ fontSize: 10, color: 'text.secondary', mt: .4 }}>{registro.email}</Typography></Box></Box>, registro.empresa, registro.telefone, 'cidade' in registro ? registro.cidade : registro.origem, <TextoStatus key="status" valor={registro.status} />];
}

export function CadastroRegistros({ categoria }: { categoria: Categoria }) {
  const configuracao = configuracoes[categoria];
  const Formulario = configuracao.formulario;
  const Icone = configuracao.icone;
  const [registros, definirRegistros] = useState<Registro[]>([]);
  const [clientes, definirClientes] = useState<Cliente[]>([]);
  const [pesquisa, definirPesquisa] = useState('');
  const [status, definirStatus] = useState('');
  const [carregando, definirCarregando] = useState(true);
  const [erro, definirErro] = useState('');
  const [somenteLeitura, definirSomenteLeitura] = useState(true);
  const [versao, definirVersao] = useState(0);
  const [pagina, definirPagina] = useState(0);
  const [modalAberto, definirModalAberto] = useState(false);
  const [edicao, definirEdicao] = useState<Registro | null>(null);
  const [exclusao, definirExclusao] = useState<Registro | null>(null);
  const [excluindo, definirExcluindo] = useState(false);
  const [erroExclusao, definirErroExclusao] = useState('');
  const [notificacao, definirNotificacao] = useState('');
  useEffect(() => {
    let ativo = true;
    const temporizador = setTimeout(async () => {
      definirCarregando(true); definirErro('');
      try {
        const [lista, resumo, listaClientes] = await Promise.all([configuracao.servico.listar(pesquisa, categoria === 'leads' ? status : ''), buscarIndicadores(), categoria === 'oportunidades' ? servicoClientes.listar() : Promise.resolve([])]);
        if (ativo) { definirRegistros(lista); definirSomenteLeitura(resumo.somenteLeitura); definirClientes(listaClientes); definirPagina(0); }
      } catch (falha) { if (ativo) definirErro(descreverErro(falha)); } finally { if (ativo) definirCarregando(false); }
    }, 250);
    return () => { ativo = false; clearTimeout(temporizador); };
  }, [categoria, configuracao.servico, pesquisa, status, versao]);
  const campos: CampoFormulario[] = categoria === 'oportunidades' ? [
    { nome: 'titulo', rotulo: 'Título', maximo: 160 }, { nome: 'clienteId', rotulo: 'Cliente', opcoes: clientes.map(cliente => ({ valor: cliente.id, rotulo: `${cliente.nome} · ${cliente.empresa}` })) }, { nome: 'valor', rotulo: 'Valor (R$)', tipo: 'number' }, { nome: 'etapa', rotulo: 'Etapa', opcoes: criarOpcoes(['PROSPECCAO', 'NEGOCIACAO', 'PROPOSTA_ENVIADA', 'GANHA', 'PERDIDA']) },
  ] : [
    { nome: 'nome', rotulo: 'Nome', maximo: 120 }, { nome: 'empresa', rotulo: 'Empresa', maximo: 120 }, { nome: 'email', rotulo: 'E-mail', tipo: 'email', maximo: 160 }, { nome: 'telefone', rotulo: 'Telefone', tipo: 'tel', maximo: 30 },
    categoria === 'clientes' ? { nome: 'cidade', rotulo: 'Cidade', maximo: 100 } : { nome: 'origem', rotulo: 'Origem', maximo: 80 },
    { nome: 'status', rotulo: 'Status', opcoes: criarOpcoes(categoria === 'clientes' ? ['ATIVO', 'INATIVO'] : ['NOVO', 'EM_CONTATO', 'QUALIFICADO', 'CONVERTIDO']) },
  ];
  async function salvar(valores: Record<string, string>) {
    let dados: Record<string, string | number> = valores;
    if (categoria === 'oportunidades') {
      dados = { titulo: valores.titulo, clienteId: valores.clienteId, etapa: valores.etapa, valorCentavos: converterReaisEmCentavos(valores.valor) };
    }
    if (edicao) await configuracao.servico.atualizar(edicao.id, dados); else await configuracao.servico.cadastrar(dados);
    definirModalAberto(false); definirNotificacao('Registro salvo com sucesso.'); definirVersao(versao + 1);
  }
  async function excluir() {
    if (!exclusao) return;
    definirExcluindo(true); definirErroExclusao('');
    try { await configuracao.servico.excluir(exclusao.id); definirExclusao(null); definirNotificacao('Registro excluído com sucesso.'); definirVersao(versao + 1); }
    catch (falha) { definirErroExclusao(descreverErro(falha)); } finally { definirExcluindo(false); }
  }
  return <><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 3.5 }}><Box><Typography sx={{ color: 'primary.main', fontSize: 10, letterSpacing: 1.7, fontWeight: 700, mb: 1 }}>GESTÃO DE RELACIONAMENTOS</Typography><Typography variant="h4">{configuracao.titulo}</Typography><Typography sx={{ fontSize: 13, color: 'text.secondary', mt: 1 }}>{configuracao.descricao}</Typography></Box><Button variant="contained" startIcon={<Plus size={18} />} disabled={somenteLeitura || carregando || Boolean(erro) || (categoria === 'oportunidades' && !clientes.length)} onClick={() => { definirEdicao(null); definirModalAberto(true); }}>Cadastrar {configuracao.singular}</Button></Box>
    {!carregando && somenteLeitura && !erro && <Alert severity="info" sx={{ mb: 2 }}>Modo de demonstração somente leitura. Alterações estão desativadas.</Alert>}
    {categoria === 'oportunidades' && !carregando && !clientes.length && !erro && <Alert severity="info" sx={{ mb: 2 }}>Cadastre um cliente antes de criar uma oportunidade.</Alert>}
    {erro && <Alert severity="error" sx={{ mb: 2 }} action={<Button color="inherit" onClick={() => definirVersao(versao + 1)}>Tentar novamente</Button>}>{erro}</Alert>}
    <Paper variant="outlined" sx={{ borderColor: '#E7EBF1', overflow: 'hidden' }}><Box sx={{ p: 2.5, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}><Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 'auto' }}><Icone size={18} color="#79869A" /><Typography variant="h6">Todos os registros</Typography><Box sx={{ bgcolor: '#F0F3F8', px: 1, py: .3, borderRadius: 1, fontSize: 11, color: 'text.secondary' }}>{carregando ? '…' : registros.length}</Box></Box><TextField size="small" label={`Pesquisar ${categoria}`} value={pesquisa} onChange={evento => definirPesquisa(evento.target.value)} slotProps={{ input: { startAdornment: <InputAdornment position="start"><Search size={17} /></InputAdornment> }, htmlInput: { maxLength: 200 } }} sx={{ width: { xs: '100%', sm: 260 } }} />{categoria === 'leads' && <TextField select label="Status" size="small" value={status} onChange={evento => definirStatus(evento.target.value)} sx={{ minWidth: 160 }}><MenuItem value="">Todos os status</MenuItem>{criarOpcoes(['NOVO', 'EM_CONTATO', 'QUALIFICADO', 'CONVERTIDO']).map(opcao => <MenuItem key={opcao.valor} value={opcao.valor}>{opcao.rotulo}</MenuItem>)}</TextField>}<Tooltip title="Atualizar listagem"><IconButton onClick={() => definirVersao(versao + 1)} aria-label="Atualizar listagem"><RefreshCw size={17} /></IconButton></Tooltip></Box>
      <TableContainer><Table aria-label={`Listagem de ${categoria}`}><TableHead><TableRow>{configuracao.colunas.map(coluna => <TableCell key={coluna}>{coluna}</TableCell>)}<TableCell align="right">Ações</TableCell></TableRow></TableHead><TableBody>{carregando ? <TableRow><TableCell colSpan={6} align="center" sx={{ py: 8 }}><CircularProgress size={28} aria-label="Carregando registros" /></TableCell></TableRow> : erro ? <TableRow><TableCell colSpan={6} align="center" sx={{ py: 8 }}>Não foi possível carregar os registros.</TableCell></TableRow> : !registros.length ? <TableRow><TableCell colSpan={6} align="center" sx={{ py: 8 }}><Icone size={32} color="#9CA7BA" /><Typography sx={{ mt: 1.5, fontWeight: 600 }}>Nenhum registro encontrado</Typography><Typography sx={{ fontSize: 12, color: 'text.secondary', mt: .7 }}>{pesquisa || status ? 'Altere os filtros para encontrar outros resultados.' : `Comece cadastrando um novo ${configuracao.singular}.`}</Typography></TableCell></TableRow> : registros.slice(pagina * 8, pagina * 8 + 8).map(registro => <TableRow key={registro.id} hover>{celulasDoRegistro(registro).map((conteudo, indice) => <TableCell key={indice} sx={{ fontSize: 12, whiteSpace: 'nowrap' }}>{conteudo}</TableCell>)}<TableCell align="right" sx={{ whiteSpace: 'nowrap' }}><Tooltip title="Editar registro"><span><IconButton aria-label={`Editar ${'nome' in registro ? registro.nome : registro.titulo}`} size="small" disabled={somenteLeitura} onClick={() => { definirEdicao(registro); definirModalAberto(true); }}><Pencil size={15} /></IconButton></span></Tooltip><Tooltip title="Excluir registro"><span><IconButton aria-label={`Excluir ${'nome' in registro ? registro.nome : registro.titulo}`} size="small" disabled={somenteLeitura} onClick={() => { definirExclusao(registro); definirErroExclusao(''); }} sx={{ ml: 1, color: '#BD5965' }}><Trash2 size={15} /></IconButton></span></Tooltip></TableCell></TableRow>)}</TableBody></Table></TableContainer>
      <TablePagination component="div" count={erro ? 0 : registros.length} page={pagina} onPageChange={(_, novaPagina) => definirPagina(novaPagina)} rowsPerPage={8} rowsPerPageOptions={[8]} labelRowsPerPage="Por página:" labelDisplayedRows={({ from, to, count }) => `${from}–${to} de ${count}`} getItemAriaLabel={tipo => ({ first: 'Primeira página', last: 'Última página', next: 'Próxima página', previous: 'Página anterior' })[tipo]} />
    </Paper>
    <Dialog open={modalAberto} onClose={(_, motivo) => { if (motivo === 'escapeKeyDown' || motivo === 'backdropClick') return; }} maxWidth="sm" fullWidth aria-labelledby="titulo-formulario"><DialogTitle id="titulo-formulario" sx={{ fontWeight: 700, pb: 0 }}>{edicao ? 'Editar' : 'Cadastrar'} {configuracao.singular}</DialogTitle>{modalAberto && <Formulario campos={campos} valoresIniciais={valoresDoRegistro(edicao, categoria)} aoSalvar={salvar} aoCancelar={() => definirModalAberto(false)} />}</Dialog>
    <Dialog open={Boolean(exclusao)} onClose={() => { if (!excluindo) definirExclusao(null); }} maxWidth="xs" fullWidth aria-labelledby="titulo-exclusao"><DialogTitle id="titulo-exclusao">Excluir {configuracao.singular}?</DialogTitle><DialogContent><DialogContentText>O registro “{exclusao && ('nome' in exclusao ? exclusao.nome : exclusao.titulo)}” será excluído permanentemente.</DialogContentText>{erroExclusao && <Alert severity="error" sx={{ mt: 2 }}>{erroExclusao}</Alert>}</DialogContent><DialogActions sx={{ p: 2.5 }}><Button color="inherit" disabled={excluindo} onClick={() => definirExclusao(null)}>Cancelar</Button><Button variant="contained" color="error" disabled={excluindo} onClick={excluir}>{excluindo ? 'Excluindo...' : 'Excluir registro'}</Button></DialogActions></Dialog>
    <Snackbar open={Boolean(notificacao)} autoHideDuration={4500} onClose={() => definirNotificacao('')} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}><Alert severity="success" variant="filled" onClose={() => definirNotificacao('')}>{notificacao}</Alert></Snackbar>
  </>;
}
