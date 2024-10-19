"use client"; // Make sure this is a client component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 px-8 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://i.imgur.com/TCTOvkr.png"
            alt="Logo du Parti"
            height={40}
            width={40}
            className="rounded-full"
          />
          <Link href="/" className="text-xl font-bold">
            TDD
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="inline-block">
            <Button variant="outline" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </Button>
          </Link>
          <Link href="/jobs" className="inline-block">
            <Button variant="outline" className="text-sm font-medium hover:text-primary transition-colors">
              Offres d'emploi
            </Button>
          </Link>
          <Link href="/news" className="inline-block">
            <Button variant="outline" className="text-sm font-medium hover:text-primary transition-colors">
              Actualités Mondiales
            </Button>
          </Link>
          <Link href="/phone" className="inline-block">
            <Button variant="outline" className="text-sm font-medium hover:text-primary transition-colors">
              Bien-être Numérique
            </Button>
          </Link>
          <Link href="/robots" className="inline-block">
            <Button variant="outline" className="text-sm font-medium hover:text-primary transition-colors">
              Technologie dans les Soins de Santé
            </Button>
          </Link>
          <Link href="/join" className="inline-block">
            <Button variant="destructive">Rejoignez-nous</Button>
          </Link>
        </nav>
        <Button variant="destructive" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Basculer le menu</span>
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-start space-y-2 px-4 py-2 bg-background/95">
            <Link href="/" className="inline-block w-full">
              <Button variant="outline" className="w-full text-sm font-medium hover:text-primary transition-colors">
                Accueil
              </Button>
            </Link>
            <Link href="/jobs" className="inline-block w-full">
              <Button variant="outline" className="w-full text-sm font-medium hover:text-primary transition-colors">
                Offres d'emploi
              </Button>
            </Link>
            <Link href="/news" className="inline-block w-full">
              <Button variant="outline" className="w-full text-sm font-medium hover:text-primary transition-colors">
                Actualités Mondiales
              </Button>
            </Link>
            <Link href="/phone" className="inline-block w-full">
              <Button variant="outline" className="w-full text-sm font-medium hover:text-primary transition-colors">
                Bien-être Numérique
              </Button>
            </Link>
            <Link href="/robots" className="inline-block w-full">
              <Button variant="outline" className="w-full text-sm font-medium hover:text-primary transition-colors">
                Technologie dans les Soins de Santé
              </Button>
            </Link>
            <Link href="/join" className="inline-block w-full">
              <Button variant="destructive" className="w-full">Rejoignez-nous</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
