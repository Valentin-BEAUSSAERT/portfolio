document.addEventListener("DOMContentLoaded", () => {
  let throttleTimeout;
  const sections = document.querySelectorAll('.background');
  let currentSectionIndex = 0;
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  const scrollToSection = (index) => {
      if (index >= 0 && index < sections.length) {
          sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
          currentSectionIndex = index;
      }
  };

  const throttleScroll = (e) => {
      if (isMac) {
          e.preventDefault(); // Sur Mac, cela empêche le défilement standard pour un meilleur contrôle
      }
      if (throttleTimeout) return; // Empêche l'exécution répétée

      throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
          const direction = e.deltaY > 0 ? 1 : -1; // Détermine la direction du défilement
          scrollToSection(currentSectionIndex + direction);
      }, isMac ? 500 : 150); // Sur Mac, augmentez le délai pour ralentir le défilement
  };

  // Ajoutez ici `{ passive: false }` pour permettre `e.preventDefault()` sans avertissement
  document.addEventListener('wheel', throttleScroll, { passive: false });
});
