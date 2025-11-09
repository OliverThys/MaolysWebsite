"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { ProcessSection } from "@/components/sections/process";
import { TrustSection } from "@/components/sections/trust";
import { CTASection } from "@/components/sections/cta";
import { preloadImages } from "@/lib/preload-images";
import { BASE_PATH } from "@/lib/constants";

// Images des projets à précharger immédiatement
const allProjectImages = [
  `${BASE_PATH}/projects/hellojade.jpg`,
  `${BASE_PATH}/projects/hellojade-main.jpg`,
  `${BASE_PATH}/projects/easyrecruit.jpg`,
  `${BASE_PATH}/projects/easyrecruit-main.jpg`,
  `${BASE_PATH}/projects/helloluna.jpg`,
  `${BASE_PATH}/projects/helloluna-main.jpg`,
  `${BASE_PATH}/projects/rbbc.png`,
  `${BASE_PATH}/projects/rbbc-mobile.jpg`,
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
