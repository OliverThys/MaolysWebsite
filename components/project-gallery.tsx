"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function ProjectGallery({
  images,
  title,
  isOpen,
  onClose,
  initialIndex = 0,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isImageReady, setIsImageReady] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const preloadedImages = useRef<Set<string>>(new Set());

  // Précharger toutes les images en arrière-plan
  useEffect(() => {
    if (!isOpen || images.length === 0) return;

    images.forEach((url) => {
      if (preloadedImages.current.has(url)) return;
      
      preloadedImages.current.add(url);
      
      // Préchargement via link preload
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = url;
      if (!document.head.querySelector(`link[href="${url}"]`)) {
        document.head.appendChild(link);
      }

      // Préchargement via fetch
      fetch(url, { cache: 'force-cache' }).catch(() => {});
    });
  }, [isOpen, images]);

  // Réinitialiser quand la galerie s'ouvre
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsImageReady(false);
    }
  }, [isOpen, initialIndex]);

  // Réinitialiser quand l'index change
  useEffect(() => {
    if (isOpen) {
      setIsImageReady(false);
    }
  }, [currentIndex, isOpen]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Navigation clavier
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goToNext, goToPrevious, onClose]);

  // Empêcher le scroll du body quand la galerie est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleImageLoad = useCallback(() => {
    setIsImageReady(true);
  }, []);

  const handleImageError = useCallback(() => {
    setIsImageReady(true);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50"
          />

            {/* Gallery Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-2 sm:inset-4 lg:inset-8 xl:inset-16 z-50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className="text-foreground flex-1 min-w-0 pr-2">
                <h3 className="text-lg sm:text-xl font-bold truncate">{title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 sm:p-2.5 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors touch-manipulation flex-shrink-0"
                aria-label="Fermer"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-border bg-muted/30">
              {/* Loading indicator */}
              {!isImageReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
                  <div className="w-12 h-12 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
              )}

              {/* Image */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: isImageReady ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imageRef}
                  src={images[currentIndex]}
                  alt={`${title} - Screenshot ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </motion.div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background active:scale-95 sm:hover:scale-110 transition-all z-20 touch-manipulation"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background active:scale-95 sm:hover:scale-110 transition-all z-20 touch-manipulation"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-4 overflow-x-auto pb-2 touch-pan-x">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 touch-manipulation active:scale-95 ${
                      currentIndex === index
                        ? "border-primary scale-105 sm:scale-110"
                        : "border-border opacity-50 active:opacity-100 sm:hover:opacity-100 active:scale-100 sm:hover:scale-105"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Keyboard Navigation Hint */}
            {images.length > 1 && (
              <div className="text-center mt-2 sm:mt-4 text-xs text-muted-foreground px-2">
                <span className="hidden sm:inline">Utilisez ← → pour naviguer • ESC pour fermer</span>
                <span className="sm:hidden">Swipez pour naviguer</span>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
