"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { ProcessSection } from "@/components/sections/process";
import { TrustSection } from "@/components/sections/trust";
import { CTASection } from "@/components/sections/cta";
import { preloadImages } from "@/lib/preload-images";

// Images des projets à précharger immédiatement
const allProjectImages = [
  "/projects/hellojade.jpg",
  "/projects/hellojade-main.jpg",
  "/projects/easyrecruit.jpg",
  "/projects/easyrecruit-main.jpg",
  "/projects/helloluna.jpg",
  "/projects/helloluna-main.jpg",
  "/projects/rbbc.jpg",
  // rbbc-mobile.jpg sera ajouté quand disponible
];

export default function HomePage() {
  // Précharger TOUTES les images dès le chargement de la page
  useEffect(() => {
    // Utiliser requestIdleCallback pour ne pas bloquer le rendu initial
    const preloadOnIdle = () => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          preloadImages(allProjectImages);
        }, { timeout: 1000 });
      } else {
        // Si pas de support, précharger après un court délai
        setTimeout(() => {
          preloadImages(allProjectImages);
        }, 500);
      }
    };

    preloadOnIdle();
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
