
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Parti du Futur Progressif",
  description: "Site officiel du Parti du Futur Progressif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Navbar /> {/* Use the Navbar component here */}
        <main className="container mx-auto py-8 px-12">{children}</main>
        <footer className="border-t bg-muted/50 px-8">
          <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">© 2024 Parti du Futur Progressif. Tous droits réservés.</p>
            <nav className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Conditions de Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contactez-nous
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
