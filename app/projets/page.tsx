import { Metadata } from "next";
import { ProjectsList } from "@/components/projects-list";

export const metadata: Metadata = {
  title: "Projets - Nos Réalisations",
  description:
    "Découvrez nos projets phares : HelloJADE, EasyRecruit, HelloLuna et autres réalisations en développement IA et applications sur mesure.",
};

export default function ProjetsPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Des projets qui transforment la façon dont nos clients travaillent,
            avec des résultats mesurables et un ROI concret.
          </p>
        </div>
        <ProjectsList />
      </div>
    </div>
  );
}

