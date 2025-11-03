"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParticleBackground } from "@/components/particle-background";
import { TypingText } from "@/components/typing-text";
import { useIsMobile } from "@/lib/mobile-detection";

export function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={isMobile ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { delay: 0.05, duration: 0.2, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Expert en Intelligence Artificielle • Mons, Belgique
            </span>
          </motion.div>

          <motion.h1
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { delay: 0.1, duration: 0.3, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
          >
            L'Intelligence Artificielle{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              au Service
            </span>{" "}
            de Votre Métier
          </motion.h1>

          <motion.p
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { delay: 0.15, duration: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Nous développons des solutions IA sur mesure qui automatisent vos
            processus, augmentent votre productivité et transforment votre
            façon de travailler.
          </motion.p>

          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { delay: 0.2, duration: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0"
          >
            <Link
              href="/projets"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium text-base sm:text-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              <span>Découvrir nos réalisations</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-card border border-border rounded-lg font-medium text-base sm:text-lg hover:bg-muted transition-all text-center"
            >
              Discuter de votre projet
            </Link>
          </motion.div>

          {/* Tech Stack Logos */}
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { delay: 0.25, duration: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-60 px-4 sm:px-0"
          >
            {["React", "TypeScript", "Next.js", "Python", "FastAPI", "PostgreSQL", "Docker", "OpenAI"].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-xs sm:text-sm text-muted-foreground font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}

