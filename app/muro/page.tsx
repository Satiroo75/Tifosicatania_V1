import Link from 'next/link';
export default function Page() {
 return <main className="page"><section className="panel"><h1>Muro dei tifosi</h1><p>Forum iniziale. Dopo l’approvazione della Home online, collegheremo qui le funzioni complete con database.</p><div className="form"><input className="input" placeholder="Titolo del messaggio" /><textarea className="textarea" placeholder="Scrivi il tuo messaggio... 🔴🔵⚽" /><button className="button">Pubblica</button></div><Link className="back" href="/">Torna alla Home</Link></section></main>;
}
