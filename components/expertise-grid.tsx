"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Layers,
  Cloud,
  Shield,
  Code2,
  Database,
  Zap,
  Lock,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description:
      "Maîtrise des modèles de langage (GPT-4, Claude, Llama), traitement du langage naturel, vision par ordinateur et apprentissage automatique.",
    technologies: [
      "OpenAI GPT-4",
      "Anthropic Claude",
      "Meta Llama",
      "Whisper (Speech-to-Text)",
      "Scikit-learn",
      "TensorFlow",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Développement end-to-end avec les technologies modernes pour créer des applications performantes et maintenables.",
    technologies: [
      "React & Next.js",
      "TypeScript",
      "Node.js",
      "Python & FastAPI",
      "Tauri (Desktop)",
      "WebSocket",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Architecture de Données",
    description:
      "Conception de bases de données optimisées, modélisation de données complexes et gestion de la scalabilité.",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
      "Database Design",
      "Query Optimization",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Architecture Cloud",
    description:
      "Déploiement et optimisation d'applications cloud-native avec focus sur la performance et la scalabilité.",
    technologies: [
      "Docker & Kubernetes",
      "AWS / Vercel",
      "CI/CD Pipelines",
      "Microservices",
      "Serverless",
      "CDN & Caching",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Conformité & Sécurité",
    description:
      "Garantie de la conformité RGPD, sécurisation des données sensibles et mise en place de bonnes pratiques.",
    technologies: [
      "RGPD Compliance",
      "Encryption",
      "OAuth 2.0 / JWT",
      "Data Privacy",
      "Security Audits",
      "Backup & Recovery",
    ],
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance & Optimisation",
    description:
      "Optimisation des performances, réduction des temps de chargement et amélioration de l'expérience utilisateur.",
    technologies: [
      "Performance Monitoring",
      "Code Splitting",
      "Image Optimization",
      "Lazy Loading",
      "Caching Strategies",
      "Bundle Analysis",
    ],
    color: "from-yellow-500 to-orange-500",
  },
];

export function ExpertiseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {expertiseAreas.map((area, index) => {
        const Icon = area.icon;
        return (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all h-full group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}
              />
              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} mb-6 shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  {area.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-1.5 rounded-md bg-muted/50 text-sm text-muted-foreground"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

