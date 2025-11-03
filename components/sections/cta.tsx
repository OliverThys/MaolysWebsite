"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Prêt à transformer votre entreprise ?
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4 sm:mb-6 px-2 sm:px-0">
            Discutons de{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Votre Projet
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4 sm:px-0">
            Une première consultation gratuite pour comprendre vos besoins et
            définir ensemble la meilleure solution pour votre entreprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link
              href="/contact"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium text-base sm:text-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              <span>Planifier un appel gratuit</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projets"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-card border border-border rounded-lg font-medium text-base sm:text-lg hover:bg-muted transition-all text-center"
            >
              Voir nos réalisations
            </Link>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Consultation gratuite</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Sans engagement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

