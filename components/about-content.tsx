"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Code, Users } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Équipe de Qualité",
    description:
      "Une startup bien structurée avec des développeurs experts passionnés par leur métier et l'innovation technologique.",
  },
  {
    icon: Code,
    title: "Expertise Technique",
    description:
      "Maîtrise approfondie des technologies IA et full-stack, avec une capacité à résoudre des défis complexes et sur mesure.",
  },
  {
    icon: Target,
    title: "Solutions Sur-Mesure",
    description:
      "Chaque projet est unique. Nous adaptons notre approche à vos besoins spécifiques, sans solutions pré-packagées.",
  },
];

export function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
          Expertise Technique,
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Approche Humaine
          </span>
        </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Maolys est une startup technologique belge spécialisée dans le développement informatique 
          et l'intelligence artificielle. Notre équipe de développeurs experts crée des applications 
          web, desktop et solutions IA sur mesure adaptées à vos besoins, avec rigueur et innovation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-invert max-w-none mb-16"
      >
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Développer des solutions informatiques sur mesure pour les entreprises belges et européennes : 
            applications web, desktop, solutions IA et automatisation. Nous combinons développement 
            full-stack et intelligence artificielle pour transformer vos processus et créer de nouveaux 
            avantages concurrentiels.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Pourquoi Maolys ?</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>
                <strong className="text-foreground">Une équipe d'experts passionnés :</strong>{" "}
                Startup bien structurée avec des développeurs full-stack de qualité qui maîtrisent 
                le développement web (React, Next.js, TypeScript), desktop (Tauri), backend (Python, Node.js) 
                et les technologies IA (GPT-4, Claude, Llama, Whisper).
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>
                <strong className="text-foreground">Solutions 100% sur mesure :</strong>{" "}
                Chaque projet est unique. Nous développons des applications web, desktop ou solutions IA 
                entièrement adaptées à vos besoins spécifiques, sans solutions pré-packagées. 
                Du front-end au back-end, tout est pensé pour votre contexte métier.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>
                <strong className="text-foreground">Startup agile, rigueur professionnelle :</strong>{" "}
                Nous combinons la flexibilité d'une startup avec des standards de qualité élevés. 
                Approche agile, communication transparente et livraisons itératives.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>
                <strong className="text-foreground">Expertise technique reconnue :</strong>{" "}
                Développement full-stack, applications web et desktop, intégration IA : nos projets 
                démontrent notre capacité à livrer des solutions complexes et performantes, 
                tout en respectant la conformité RGPD et les meilleures pratiques de sécurité.
              </span>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center"
      >
        <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Basés à Mons, Wallonie</h3>
        <p className="text-muted-foreground mb-6">
          Nous servons des clients en Belgique et dans toute l'Europe, avec une
          compréhension approfondie du marché belge et de ses spécificités
          réglementaires.
        </p>
        <p className="text-sm text-muted-foreground">
          Disponibles pour des réunions en présentiel à Mons et dans la région
          de Wallonie, ainsi que pour des consultations à distance.
        </p>
      </motion.div>
    </div>
  );
}

