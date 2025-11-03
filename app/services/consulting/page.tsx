import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Consulting & Formation - Accompagnement Stratégique IA",
  description:
    "Accompagnement stratégique pour l'adoption de l'IA et formation de vos équipes aux meilleures pratiques du développement moderne.",
};

export default function ConsultingPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux services
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Consulting & Formation
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Accompagnement stratégique pour l'adoption de l'IA et formation de
            vos équipes aux meilleures pratiques.
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2>Nos Services</h2>
              <ul>
                <li>
                  <strong>Audit de Maturité IA</strong> : Évaluation de votre
                  niveau actuel et identification des opportunités
                </li>
                <li>
                  <strong>Stratégie d'Implémentation</strong> : Roadmap
                  personnalisée pour l'adoption progressive de l'IA
                </li>
                <li>
                  <strong>Formation Développeurs</strong> : Sessions pratiques
                  sur React, TypeScript, IA, etc.
                </li>
                <li>
                  <strong>Support Continu</strong> : Accompagnement tout au
                  long de votre transformation digitale
                </li>
              </ul>
            </section>

            <section>
              <h2>Formations Disponibles</h2>
              <ul>
                <li>Intégration GPT-4 dans vos applications</li>
                <li>Développement Full-Stack moderne</li>
                <li>Architecture cloud et DevOps</li>
                <li>Bonnes pratiques TypeScript & React</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à former vos équipes ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discutons de vos besoins en formation et consulting pour
              accélérer votre transformation digitale.
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

