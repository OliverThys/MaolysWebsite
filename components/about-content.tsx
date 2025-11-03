"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Heart, Code } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence Technique",
    description:
      "Nous visons l'excellence dans chaque ligne de code, avec des standards de qualité élevés et des technologies de pointe.",
  },
  {
    icon: Heart,
    title: "Approche Humaine",
    description:
      "Derrière chaque projet, il y a des personnes. Nous privilégions la communication, l'écoute et la compréhension de vos besoins.",
  },
  {
    icon: Code,
    title: "Innovation Continue",
    description:
      "Nous restons à la pointe de l'innovation technologique pour vous proposer toujours les meilleures solutions possibles.",
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
          Maolys est une entreprise spécialisée dans le développement
          informatique avec une forte expertise en intelligence artificielle.
          Nous transformons vos idées en solutions concrètes qui génèrent de la
          valeur.
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
            Transformer les entreprises belges et européennes en leur offrant
            des solutions d'intelligence artificielle sur mesure qui
            automatisent leurs processus, augmentent leur productivité et
            créent de nouveaux avantages concurrentiels.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Pourquoi Maolys ?</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>
                <strong className="text-foreground">Expertise IA de pointe :</strong>{" "}
                Maîtrise des dernières technologies d'IA (GPT-4, Claude, Llama,
                Whisper) et capacité à les intégrer dans des solutions
                opérationnelles.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>
                <strong className="text-foreground">Développement Full-Stack :</strong>{" "}
                Compétences complètes du front-end au back-end, permettant de
                livrer des solutions complètes et intégrées.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>
                <strong className="text-foreground">Résultats Mesurables :</strong>{" "}
                Chaque projet que nous livrons génère un ROI concret et des
                métriques de performance claires.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>
                <strong className="text-foreground">Conformité RGPD :</strong>{" "}
                Toutes nos solutions respectent strictement la réglementation
                européenne sur la protection des données.
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

