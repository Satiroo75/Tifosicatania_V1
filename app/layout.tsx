import '@/styles/globals.css';

export const metadata = {
  title: 'TifosiCatania.it — V2 Logo centrale',
  description: 'Sviluppo logo centrale'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it"><body>{children}</body></html>;
}
