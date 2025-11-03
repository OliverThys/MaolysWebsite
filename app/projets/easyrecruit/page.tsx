import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EasyRecruit - Agent IA de Recrutement via WhatsApp",
  description:
    "Découvrez EasyRecruit, un système de recrutement automatisé via WhatsApp avec IA conversationnelle et parsing intelligent de CV.",
};

export default function EasyRecruitPage() {
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
                Side Project - Recrutement IA
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium">
                Side Project
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              EasyRecruit
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Agent IA de recrutement via WhatsApp avec parsing automatique de
              CV et gestion multi-organisation avec isolation des données.
            </p>
            
            {/* Screenshot principal */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-border mb-12">
              <Image
                src="/projects/easyrecruit-main.jpg"
                alt="Screenshot principal de EasyRecruit"
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
                EasyRecruit automatise le processus de recrutement en permettant
                aux candidats de postuler directement via WhatsApp. L'IA
                conversationnelle engage les candidats, parse leurs CV et
                pré-qualifie automatiquement les profils.
              </p>
            </section>

            <section>
              <h2>Fonctionnalités Clés</h2>
              <ul>
                <li>
                  <strong>IA Conversationnelle GPT-4</strong> : Dialogue naturel
                  avec les candidats via WhatsApp
                </li>
                <li>
                  <strong>Parsing Automatique de CV</strong> : Extraction
                  intelligente des informations clés des CV
                </li>
                <li>
                  <strong>Multi-Organisation</strong> : Gestion de plusieurs
                  entreprises avec isolation complète des données
                </li>
                <li>
                  <strong>Pré-qualification Automatique</strong> : Évaluation
                  initiale des candidatures par l'IA
                </li>
              </ul>
            </section>

            <section>
              <h2>Stack Technique</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js 14", "Node.js", "PostgreSQL", "Twilio", "GPT-4"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-muted text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </section>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-4">
              Un projet de recrutement automatisé ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discutons de comment nous pouvons automatiser votre processus de
              recrutement avec l'IA.
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

