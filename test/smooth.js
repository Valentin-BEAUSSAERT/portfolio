document.addEventListener("DOMContentLoaded", () => {
    let throttleTimeout;
    const sections = document.querySelectorAll('.background');
    let currentSectionIndex = 0;
  
    const scrollToSection = (index) => {
      if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        currentSectionIndex = index;
      }
    };
  
    const throttleScroll = (e) => {
      e.preventDefault(); // Empêche le défilement standard
      if (throttleTimeout) return; // Empêche l'exécution répétée
  
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
        const direction = e.deltaY > 0 ? 1 : -1; // Détermine la direction du défilement
        scrollToSection(currentSectionIndex + direction);
      }, 100); // Délai pour réduire la fréquence d'exécution
    };
  
    // Ajoutez ici `{ passive: false }` pour permettre `e.preventDefault()` sans avertissement
    document.addEventListener('wheel', throttleScroll, { passive: false });
});
