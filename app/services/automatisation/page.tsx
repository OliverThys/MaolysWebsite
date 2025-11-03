import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation des Processus - RPA & Workflows",
  description:
    "Robotisation de vos tâches répétitives avec des workflows intelligents qui s'adaptent et optimisent vos processus métier.",
};

export default function AutomatisationPage() {
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
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Automatisation des Processus
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Robotisation de vos tâches répétitives avec des workflows
            intelligents qui s'adaptent et optimisent vos processus métier.
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2>Nos Solutions</h2>
              <ul>
                <li>
                  <strong>RPA (Robotic Process Automation)</strong> :
                  Automatisation de tâches répétitives sur vos systèmes
                  existants
                </li>
                <li>
                  <strong>Workflows Intelligents</strong> : Automatisation avec
                  prise de décision basée sur l'IA
                </li>
                <li>
                  <strong>Intégration Systèmes</strong> : Connexion de vos
                  différentes applications (ERP, CRM, etc.)
                </li>
                <li>
                  <strong>Monitoring & Analytics</strong> : Tableaux de bord
                  pour suivre les performances de vos automations
                </li>
              </ul>
            </section>

            <section>
              <h2>Bénéfices</h2>
              <ul>
                <li>Réduction de 70-90% du temps alloué aux tâches répétitives</li>
                <li>Diminution des erreurs humaines</li>
                <li>Amélioration de la productivité globale</li>
                <li>ROI mesurable en quelques mois</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à automatiser vos processus ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Identifions ensemble les tâches répétitives qui peuvent être
              automatisées dans votre entreprise.
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

