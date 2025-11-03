import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "HelloLuna - Système de Gestion de Rendez-vous avec IA",
  description:
    "Découvrez HelloLuna, un système intelligent de prise de rendez-vous avec optimisation automatique des créneaux via IA conversationnelle multi-canal.",
};

export default function HelloLunaPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projets"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux projets
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Side Project - Rendez-vous IA
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium">
                Side Project
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              HelloLuna
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Système intelligent de prise de rendez-vous avec optimisation
              automatique des créneaux via IA conversationnelle multi-canal
              (WhatsApp, SMS, appels).
            </p>
            
            {/* Screenshot principal */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-border mb-12">
              <Image
                src="/projects/helloluna-main.jpg"
                alt="Screenshot principal de HelloLuna"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-12">
            <section>
              <h2>Le Concept</h2>
              <p>
                HelloLuna révolutionne la prise de rendez-vous en permettant aux
                clients de réserver via WhatsApp, SMS ou appel téléphonique. L'IA
                optimise automatiquement les créneaux disponibles et confirme
                les rendez-vous de manière intelligente.
              </p>
            </section>

            <section>
              <h2>Fonctionnalités Clés</h2>
              <ul>
                <li>
                  <strong>Multi-Canal</strong> : WhatsApp, SMS et appels
                  téléphoniques pour une accessibilité maximale
                </li>
                <li>
                  <strong>Optimisation Intelligente</strong> : L'IA suggère les
                  meilleurs créneaux selon les préférences
                </li>
                <li>
                  <strong>Confirmation Automatique</strong> : Envoi de rappels
                  et confirmations via le canal préféré
                </li>
                <li>
                  <strong>Gestion Centralisée</strong> : Tableau de bord unifié
                  pour tous les canaux
                </li>
              </ul>
            </section>

            <section>
              <h2>Stack Technique</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js 14", "Express", "GPT-4", "Twilio"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-muted text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'un système de rendez-vous intelligent ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Automatisez votre prise de rendez-vous avec une solution IA
              multi-canal adaptée à votre activité.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Planifier un appel gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

