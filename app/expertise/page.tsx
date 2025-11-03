import { Metadata } from "next";
import { ExpertiseGrid } from "@/components/expertise-grid";

export const metadata: Metadata = {
  title: "Expertise - Technologies & Compétences",
  description:
    "Découvrez notre expertise en Intelligence Artificielle, développement full-stack, architecture cloud et conformité RGPD.",
};

export default function ExpertisePage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Notre Expertise
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Une combinaison unique de compétences techniques et de vision
            stratégique pour transformer vos idées en solutions concrètes.
          </p>
        </div>
        <ExpertiseGrid />
      </div>
    </div>
  );
}

