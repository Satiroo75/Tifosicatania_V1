import './globals.css';

export const metadata = {
  title: 'TifosiCatania.it — Header Step',
  description: 'Header reale sopra Bild 1'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it"><body>{children}</body></html>;
}
