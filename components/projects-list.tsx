"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { ProjectGallery } from "@/components/project-gallery";
import { MonitorIcon, SmartphoneIcon } from "@/components/icons";
import { useIsMobile } from "@/lib/mobile-detection";
import { BASE_PATH } from "@/lib/constants";

const projects = [
  {
    id: "hellojade",
    title: "HelloJADE",
    category: "Système de Gestion Post-Hospitalisation",
    description:
      "Application desktop innovante pour le suivi post-hospitalisation avec appels téléphoniques automatisés via IA, transcription et analyse en temps réel des conversations.",
    metrics: [
      { label: "Appels automatisés/jour", value: "500+" },
      { label: "Taux de satisfaction", value: "95%" },
      { label: "Réduction temps suivi", value: "70%" },
      { label: "ROI", value: "3 mois" },
    ],
    technologies: [
      "Tauri 2.0",
      "React 18",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Whisper",
      "Llama 3.1",
    ],
    challenges: [
      "Conformité RGPD complète",
      "Intégration systèmes hospitaliers Oracle",
      "Traitement en temps réel",
    ],
    href: "/projets/hellojade",
    image: `${BASE_PATH}/projects/hellojade.jpg`,
    images: [`${BASE_PATH}/projects/hellojade.jpg`, `${BASE_PATH}/projects/hellojade-main.jpg`],
    featured: true,
    isMainProject: true,
  },
  {
    id: "easyrecruit",
    title: "EasyRecruit",
    category: "Agent IA de Recrutement",
    description:
      "Système de recrutement automatisé via WhatsApp avec IA conversationnelle GPT-4, parsing automatique de CV et gestion multi-organisation avec isolation des données.",
    image: `${BASE_PATH}/projects/easyrecruit.jpg`,
    images: [`${BASE_PATH}/projects/easyrecruit.jpg`, `${BASE_PATH}/projects/easyrecruit-main.jpg`],
    metrics: [
      { label: "Candidats traités", value: "1000+" },
      { label: "Temps économisé", value: "80%" },
      { label: "Taux de précision", value: "92%" },
    ],
    technologies: ["Next.js 14", "Node.js", "PostgreSQL", "Twilio", "GPT-4"],
    challenges: [
      "Isolation des données multi-tenant",
      "Parsing intelligent de CV variés",
      "Gestion conversation naturelle",
    ],
    href: "/projets/easyrecruit",
    featured: false,
    isSideProject: true,
  },
  {
    id: "helloluna",
    title: "HelloLuna",
    category: "Gestion de Rendez-vous avec IA",
    description:
      "Système intelligent de prise de rendez-vous avec optimisation automatique des créneaux via IA conversationnelle multi-canal (WhatsApp, SMS, appels).",
    image: `${BASE_PATH}/projects/helloluna.jpg`,
    images: [`${BASE_PATH}/projects/helloluna.jpg`, `${BASE_PATH}/projects/helloluna-main.jpg`],
    metrics: [
      { label: "Canaux supportés", value: "3" },
      { label: "Réservations/jour", value: "200+" },
      { label: "Optimisation créneaux", value: "95%" },
    ],
    technologies: ["Next.js 14", "Express", "GPT-4", "Twilio"],
    challenges: [
      "Optimisation intelligente des créneaux",
      "Gestion multi-canal unifiée",
      "Confirmation automatique",
    ],
    href: "/projets/helloluna",
    featured: false,
    isSideProject: true,
  },
  {
    id: "rbbc",
    title: "RBBC Website",
    category: "Projet Dev Classique - Site Vitrine",
    description:
      "Site vitrine moderne et responsive avec design Apple-style et animations fluides pour le club de basketball RBBC (Blaregnies).",
    image: `${BASE_PATH}/projects/rbbc.png`,
    images: [`${BASE_PATH}/projects/rbbc.png`, `${BASE_PATH}/projects/rbbc-mobile.jpg`], // Desktop + Mobile
    technologies: ["HTML5", "CSS3", "JavaScript"],
    href: "/projets/rbbc",
    featured: false,
    isClassicDev: true,
    isResponsive: true, // Montrer PC + Mobile
  },
];

export function ProjectsList() {
  const [galleryOpen, setGalleryOpen] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const isMobile = useIsMobile();

  const openGallery = (projectId: string, imageIndex: number = 0) => {
    setGalleryIndex(imageIndex);
    setGalleryOpen(projectId);
  };

  const closeGallery = () => {
    setGalleryOpen(null);
  };

  const currentProject = projects.find((p) => p.id === galleryOpen);

  return (
    <>
      <div className="space-y-16 lg:space-y-24">
        {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: isMobile ? "0px" : "-50px" }}
          transition={isMobile ? { duration: 0 } : { duration: 0.2, delay: index * 0.03, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center group">
            <div className={`relative h-56 sm:h-64 lg:h-96 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              {project.isResponsive ? (
                // Layout spécial pour RBBC : PC + Mobile côte à côte
                <div className="relative h-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <button
                    onClick={() => openGallery(project.id, 0)}
                    className="flex-1 sm:flex-1 h-48 sm:h-full relative group/gallery w-full sm:w-auto"
                  >
                    <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-muted/30 group-hover:border-primary/50 transition-all cursor-pointer touch-manipulation">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover/gallery:opacity-100 transition-opacity z-10" />
                      <Image
                        src={project.images[0]}
                        alt={`Screenshot desktop de ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-2 right-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium text-muted-foreground border border-border flex items-center gap-1.5">
                        <MonitorIcon className="h-3 w-3" />
                        <span className="hidden sm:inline">Desktop</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-active/gallery:opacity-100 sm:group-hover/gallery:opacity-100 transition-opacity bg-black/20 z-20">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          className="p-2 sm:p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg"
                        >
                          <Maximize2 className="h-4 w-4 sm:h-6 sm:w-6" />
                        </motion.div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => openGallery(project.id, 1)}
                    className="h-32 sm:h-4/5 w-full sm:w-32 flex-shrink-0 relative group/gallery"
                  >
                    <div className="relative h-full rounded-xl overflow-hidden border border-border bg-muted/30 group-hover:border-primary/50 transition-all cursor-pointer touch-manipulation">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover/gallery:opacity-100 transition-opacity z-10" />
                      <Image
                        src={project.images[1] || project.images[0]}
                        alt={`Screenshot mobile de ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 128px"
                      />
                      <div className="absolute top-2 right-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium text-muted-foreground border border-border flex items-center gap-1.5">
                        <SmartphoneIcon className="h-3 w-3" />
                        <span className="hidden sm:inline">Mobile</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-active/gallery:opacity-100 sm:group-hover/gallery:opacity-100 transition-opacity bg-black/20 z-20">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          className="p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>
                  </button>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary backdrop-blur-sm whitespace-nowrap">
                    ✨ Responsive
                  </div>
                </div>
              ) : (
                // Layout normal : Screenshot cliquable avec badge "Voir galerie"
                <button
                  onClick={() => openGallery(project.id, 0)}
                  className="block h-full w-full relative group/gallery"
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border group-hover:border-primary/50 transition-all">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover/gallery:opacity-100 transition-opacity z-10" />
                      <Image
                        src={project.images[0]}
                        alt={`Screenshot de ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      {project.images[1] && (
                        <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-lg text-xs font-medium text-foreground border border-border shadow-lg opacity-0 group-hover/gallery:opacity-100 transition-opacity z-20">
                          <Maximize2 className="h-4 w-4 inline mr-1.5" />
                          {project.images.length} screenshots
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity bg-black/30 z-20">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          className="p-4 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-xl"
                        >
                          <Maximize2 className="h-8 w-8" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </button>
              )}
            </div>

            <div
              className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {project.category}
                  </span>
                  {project.isMainProject && (
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                      Projet Phare
                    </span>
                  )}
                  {project.isSideProject && (
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium">
                      Side Project
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3 sm:p-4 rounded-lg bg-card border border-border"
                    >
                      <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-muted text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={project.href}
                className="flex items-center text-primary font-medium group-hover:gap-2 transition-all"
              >
                <span>Voir l'étude de cas complète</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
      </div>

      {/* Gallery Modal */}
      {currentProject && currentProject.images && (
        <ProjectGallery
          images={currentProject.images}
          title={currentProject.title}
          isOpen={galleryOpen === currentProject.id}
          onClose={closeGallery}
          initialIndex={galleryIndex}
        />
      )}
    </>
  );
}

