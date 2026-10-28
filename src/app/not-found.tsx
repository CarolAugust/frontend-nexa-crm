import Link from 'next/link';
export default function PaginaNaoEncontrada() { return <section><h1>Página não encontrada</h1><p>O endereço solicitado não existe.</p><Link href="/painel">Voltar ao painel</Link></section>; }
