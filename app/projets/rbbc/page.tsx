import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { MonitorIcon, SmartphoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "RBBC Website - Site Vitrine Club de Basket",
  description:
    "Site vitrine moderne et responsive pour le club de basketball RBBC (Blaregnies) avec design Apple-style et animations fluides.",
};

export default function RBBCPage() {
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
                Projet Dev Classique - Site Vitrine
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              RBBC Website
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Site vitrine moderne et responsive avec design Apple-style et
              animations fluides pour le club de basketball RBBC (Blaregnies).
            </p>
            
            {/* Screenshots Responsive : PC + Mobile */}
            <div className="relative w-full mb-12">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
                {/* Screenshot Desktop */}
                <div className="relative w-full lg:w-2/3 h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-border bg-muted/30 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <Image
                    src="/projects/rbbc.jpg"
                    alt="Screenshot desktop du site RBBC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-lg text-sm font-medium text-foreground border border-border shadow-lg flex items-center gap-2">
                    <MonitorIcon className="h-4 w-4" />
                    <span>Version Desktop</span>
                  </div>
                </div>
                
                {/* Screenshot Mobile */}
                <div className="relative w-48 lg:w-64 h-[600px] lg:h-[700px] rounded-2xl overflow-hidden border border-border bg-muted/30 group flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <Image
                    src="/projects/rbbc-mobile.jpg"
                    alt="Screenshot mobile du site RBBC"
                    fill
                    className="object-cover"
                    sizes="192px"
                    onError={(e) => {
                      // Fallback vers le screenshot principal si mobile n'existe pas
                      const target = e.target as HTMLImageElement;
                      if (target.src !== "/projects/rbbc.jpg") {
                        target.src = "/projects/rbbc.jpg";
                      }
                    }}
                  />
                  <div className="absolute top-3 right-2 px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs font-medium text-foreground border border-border shadow-lg flex items-center gap-1.5">
                    <SmartphoneIcon className="h-3.5 w-3.5" />
                    <span>Mobile</span>
                  </div>
                </div>
              </div>
              
              {/* Badge Responsive */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary backdrop-blur-md shadow-lg">
                ✨ Design Responsive - Optimisé pour tous les appareils
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-12">
            <section>
              <h2>Le Projet</h2>
              <p>
                Site vitrine élégant pour le club de basketball RBBC de
                Blaregnies. Design moderne inspiré d'Apple avec une attention
                particulière aux détails et aux animations fluides pour une
                expérience utilisateur exceptionnelle.
              </p>
            </section>

            <section>
              <h2>Caractéristiques</h2>
              <ul>
                <li>
                  <strong>Design Minimaliste</strong> : Interface épurée avec
                  focus sur le contenu
                </li>
                <li>
                  <strong>Animations Fluides</strong> : Transitions et effets
                  visuels soignés
                </li>
                <li>
                  <strong>Responsive</strong> : Optimisé pour tous les
                  appareils
                </li>
                <li>
                  <strong>Performance</strong> : Chargement rapide et
                  optimisation des ressources
                </li>
              </ul>
            </section>

            <section>
              <h2>Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript"].map((tech) => (
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
              Besoin d'un site vitrine moderne ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Créons ensemble un site web qui représente parfaitement votre
              entreprise ou association.
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

