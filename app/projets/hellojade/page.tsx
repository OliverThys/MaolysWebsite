import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { BASE_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HelloJADE - Système de Gestion Post-Hospitalisation avec IA",
  description:
    "Découvrez comment nous avons développé HelloJADE, une application desktop innovante avec appels automatisés par IA, réduisant de 70% le temps de suivi post-hospitalisation.",
};

export default function HelloJadePage() {
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
                Projet Phare - Système Post-Hospitalisation
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                Projet Phare
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              HelloJADE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Application desktop innovante pour le suivi post-hospitalisation
              avec appels téléphoniques automatisés via IA, transcription et
              analyse en temps réel des conversations.
            </p>
            
            {/* Screenshot principal */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-border mb-12">
              <Image
                src={`${BASE_PATH}/projects/hellojade-main.jpg`}
                alt="Screenshot principal de HelloJADE"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-12">
            <section>
              <h2>Le Défi</h2>
              <p>
                Les hôpitaux doivent assurer un suivi post-hospitalisation
                efficace pour leurs patients, ce qui nécessite de nombreuses
                heures de personnel soignant pour effectuer des appels de
                vérification. Ce processus était chronophage et ne permettait
                pas de scaler avec le nombre croissant de patients.
              </p>
            </section>

            <section>
              <h2>La Solution</h2>
              <p>
                HelloJADE automatise les appels de suivi grâce à une IA
                conversationnelle qui peut mener des entretiens naturels avec
                les patients. Le système transcrit et analyse les conversations
                en temps réel pour identifier les cas nécessitant une attention
                médicale urgente.
              </p>
            </section>

            <section>
              <h2>Résultats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Appels/jour
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Satisfaction
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">
                    70%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Gain de temps
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">
                    3 mois
                  </div>
                  <div className="text-sm text-muted-foreground">ROI</div>
                </div>
              </div>
            </section>

            <section>
              <h2>Stack Technique</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Tauri 2.0",
                  "React 18",
                  "TypeScript",
                  "FastAPI",
                  "PostgreSQL",
                  "Docker",
                  "Whisper",
                  "Llama 3.1",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-muted text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2>Conformité RGPD</h2>
              <p>
                Toutes les données sont traitées en conformité avec le RGPD,
                avec chiffrement end-to-end et audit trail complet de toutes
                les interactions.
              </p>
            </section>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-4">
              Un projet similaire en tête ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discutons de comment nous pouvons automatiser vos processus
              métier avec l'IA.
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

