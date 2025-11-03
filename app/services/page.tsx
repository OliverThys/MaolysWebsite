import { Metadata } from "next";
import { ServicesGrid } from "@/components/services-grid";

export const metadata: Metadata = {
  title: "Services - Solutions IA sur Mesure",
  description:
    "Découvrez nos services en développement IA, applications sur mesure, automatisation et consulting. Solutions adaptées à vos besoins métier.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Des solutions sur mesure pour transformer votre entreprise grâce à
            l'intelligence artificielle et au développement de pointe.
          </p>
        </div>
        <ServicesGrid />
      </div>
    </div>
  );
}

