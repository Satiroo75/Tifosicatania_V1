import Link from 'next/link';

export default function Page() {
  return (
    <main style={{minHeight:'100vh',padding:'80px 24px',background:'#03050b',color:'#fff'}}>
      <section style={{maxWidth:'960px',margin:'0 auto',background:'rgba(5,9,20,.88)',border:'1px solid rgba(255,255,255,.16)',borderRadius:'24px',padding:'32px'}}>
        <h1 style={{fontFamily:'Impact, Arial Black, sans-serif',textTransform:'uppercase',fontSize:'54px',margin:'0 0 20px'}}>Registrati</h1>
        <p style={{fontSize:'19px',lineHeight:1.65,color:'#e3e8f2'}}>Registrazione in preparazione.</p>
        <Link href="/" style={{display:'inline-block',marginTop:'24px'}}>Torna alla Home</Link>
      </section>
    </main>
  );
}
