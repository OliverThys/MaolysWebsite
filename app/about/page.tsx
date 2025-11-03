import { Metadata } from "next";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "À Propos - Maolys",
  description:
    "Découvrez Maolys, entreprise spécialisée en développement informatique avec une forte expertise en intelligence artificielle. Basée à Mons, Belgique.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AboutContent />
      </div>
    </div>
  );
}

