/**
 * Précharge les images de manière simple et efficace
 */
export function preloadImages(imageUrls: string[]): void {
  imageUrls.forEach((url) => {
    // Vérifier si déjà préchargée
    if (document.querySelector(`link[href="${url}"]`)) {
      return;
    }

    // 1. Link preload (priorité haute pour le navigateur)
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);

    // 2. Fetch pour forcer le cache
    fetch(url, { cache: 'force-cache' }).catch(() => {});
  });
}
