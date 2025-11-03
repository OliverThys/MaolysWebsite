"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Maximize2 } from "lucide-react";
import Image from "next/image";
import { ProjectGallery } from "@/components/project-gallery";

const projects = [
  {
    id: "hellojade",
    title: "HelloJADE",
    category: "Projet Phare - Système Post-Hospitalisation",
    description:
      "Application desktop innovante avec appels automatisés par IA, transcription Whisper et analyse Llama 3.1 en temps réel.",
    image: "/projects/hellojade.jpg",
    metrics: [
      { label: "Stack", value: "Tauri 2.0" },
      { label: "IA", value: "Whisper + Llama" },
    ],
    technologies: ["Tauri 2.0", "React 18", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    href: "/projets/hellojade",
    images: ["/projects/hellojade.jpg", "/projects/hellojade-main.jpg"],
    featured: true,
  },
  {
    id: "easyrecruit",
    title: "EasyRecruit",
    category: "Side Project - Recrutement IA",
    description:
      "Agent IA de recrutement via WhatsApp avec parsing intelligent de CV et gestion multi-organisation.",
    image: "/projects/easyrecruit.jpg",
    images: ["/projects/easyrecruit.jpg", "/projects/easyrecruit-main.jpg"],
    technologies: ["Next.js 14", "Node.js", "PostgreSQL", "Twilio", "GPT-4"],
    href: "/projets/easyrecruit",
    featured: false,
  },
  {
    id: "helloluna",
    title: "HelloLuna",
    category: "Side Project - Rendez-vous IA",
    description:
      "Système intelligent de prise de rendez-vous avec optimisation automatique des créneaux via IA conversationnelle multi-canal.",
    image: "/projects/helloluna.jpg",
    images: ["/projects/helloluna.jpg", "/projects/helloluna-main.jpg"],
    technologies: ["Next.js 14", "Express", "GPT-4", "Twilio"],
    href: "/projets/helloluna",
    featured: false,
  },
];

export function ProjectsSection() {
  const [galleryOpen, setGalleryOpen] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (projectId: string, imageIndex: number = 0) => {
    setGalleryIndex(imageIndex);
    setGalleryOpen(projectId);
  };

  const closeGallery = () => {
    setGalleryOpen(null);
  };

  const currentProject = projects.find((p) => p.id === galleryOpen);

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Des Résultats{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Concrets, Mesurables
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque projet que nous livrons transforme la façon dont nos clients
            travaillent et génère un ROI mesurable.
          </p>
        </motion.div>

        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              style={{ willChange: 'opacity' }}
            >
              <div
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <button
                      onClick={() => openGallery(project.id, 0)}
                      className="block h-56 sm:h-64 lg:h-96 w-full relative group/gallery touch-manipulation"
                    >
                      <div className="relative h-full">
                        {/* Image principale */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl overflow-hidden border border-border group-hover:border-primary/50 transition-all"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "tween", duration: 0.2 }}
                          style={{ willChange: 'transform' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover/gallery:opacity-100 transition-opacity z-10" />
                          <Image
                            src={project.images?.[0] || project.image}
                            alt={`Screenshot de ${project.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index === 0}
                          />
                          {project.images?.[1] && (
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
                        </motion.div>
                      </div>
                    </button>
                  </div>

                  <div
                    className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.metrics?.map((metric) => (
                        <div
                          key={metric.label}
                          className="px-4 py-2 rounded-lg bg-card border border-border"
                        >
                          <div className="text-2xl font-bold text-primary">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

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
                      <span>Voir l'étude de cas</span>
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/projets"
            className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Voir tous les projets
            <ExternalLink className="h-4 w-4 ml-2" />
          </Link>
        </motion.div>
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
    </section>
  );
}
