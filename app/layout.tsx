import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Parti du Futur Progressif",
  description: "Site officiel du Parti du Futur Progressif",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 px-8 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="https://i.imgur.com/TCTOvkr.png" alt="Logo du Parti" height={40} width={40} className="rounded-full" />
              <Link href="/" className="text-xl font-bold">
                TDD
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link href="/jobs" className="text-sm font-medium hover:text-primary transition-colors">
                Offres d'emploi
              </Link>
              <Link href="/news" className="text-sm font-medium hover:text-primary transition-colors">
                Actualités Mondiales
              </Link>
              <Link href="/phone" className="text-sm font-medium hover:text-primary transition-colors">
                Bien-être Numérique
              </Link>
              <Link href="/robots" className="text-sm font-medium hover:text-primary transition-colors">
                Technologie dans les Soins de Santé
              </Link>
              <Button variant="default">Rejoignez-nous</Button>
            </nav>
            <Button variant="destructive" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Basculer le menu</span>
            </Button>
          </div>
        </header>

        <main className="container mx-auto py-8 px-12">{children}</main>

        <footer className="border-t bg-muted/50">
          <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 Parti du Futur Progressif. Tous droits réservés.
            </p>
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
  )
}
