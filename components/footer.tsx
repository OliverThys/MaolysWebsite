"use client";

import Link from "next/link";
import { Sparkles, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Développement IA", href: "/services/ia-conversationnelle" },
    { label: "Applications web", href: "/services/applications" },
    { label: "Consulting", href: "/services/consulting" },
    { label: "Formation", href: "/services/formation" },
  ],
  entreprise: [
    { label: "À propos", href: "/about" },
    { label: "Projets", href: "/projets" },
    { label: "Expertise", href: "/expertise" },
    { label: "Contact", href: "/contact" },
  ],
  ressources: [
    { label: "Documentation", href: "/docs" },
    { label: "GitHub", href: "https://github.com/maolys" },
    { label: "Case Studies", href: "/projets" },
    { label: "Blog", href: "/blog" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 via-primary/50 to-primary/30 rounded-lg blur-md opacity-60" />
                <div className="absolute inset-0 bg-white/25 backdrop-blur-sm rounded-lg border-2 border-primary/30" />
                <img 
                  src="/logo.png" 
                  alt="Logo Maolys" 
                  className="h-8 w-auto select-none relative z-10" 
                  style={{ 
                    filter: 'brightness(2) contrast(1.4) drop-shadow(0 0 10px rgba(14, 165, 233, 0.5))'
                  }}
                  draggable={false} 
                  loading="eager"
                />
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transformez vos processus métier avec l'intelligence artificielle.
              De l'idée à la production en quelques semaines.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/maolys"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/maolys"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@maolys.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise Column */}
          <div>
            <h3 className="font-bold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources Column */}
          <div>
            <h3 className="font-bold mb-4">Ressources</h3>
            <ul className="space-y-2">
              {footerLinks.ressources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-md">
            <h3 className="font-bold mb-2">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recevez nos insights sur l'IA et le développement
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Maolys. Tous droits réservés.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Confidentialité
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Conditions
            </Link>
            <span>Mons, Wallonie, Belgique</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

