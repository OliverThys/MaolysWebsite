"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.enum(["ia", "developpement", "consulting", "autre"]),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "ia",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-green-500/50 rounded-2xl p-12 text-center"
      >
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Message envoyé !</h2>
        <p className="text-muted-foreground">
          Nous vous répondrons dans les plus brefs délais (sous 24h).
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border rounded-2xl p-8 lg:p-12"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nom complet *
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Jean Dupont"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="jean@exemple.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Entreprise
            </label>
            <input
              {...register("company")}
              type="text"
              id="company"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nom de votre entreprise"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Téléphone
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+32 XXX XXX XXX"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2">
            Type de service *
          </label>
          <select
            {...register("service")}
            id="service"
            className="w-full px-4 py-3 rounded-lg bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="ia">Intelligence Artificielle</option>
            <option value="developpement">Développement sur mesure</option>
            <option value="consulting">Consulting & Formation</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Décrivez votre projet, vos besoins ou posez-nous vos questions..."
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <span>Envoyer le message</span>
              <Send className="h-5 w-5" />
            </>
          )}
        </button>

        <p className="text-sm text-muted-foreground text-center">
          * Champs obligatoires. Vos données sont traitées conformément au RGPD.
        </p>
      </form>
    </motion.div>
  );
}

