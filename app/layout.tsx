import './globals.css';

export const metadata = {
  title: 'TifosiCatania.it — Step 2 Cielo',
  description: 'Header e cielo reali sopra Bild 1'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it"><body>{children}</body></html>;
}
