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
        if (throttleTimeout) return; // Empêche l'exécution répétée

        throttleTimeout = setTimeout(() => {
            throttleTimeout = null;
            const direction = e.deltaY > 0 ? 1 : -1; // Détermine la direction du défilement
            scrollToSection(currentSectionIndex + direction);
        }, 150); // Utilisez un délai constant pour simplifier
    };

    // Suppression de la condition spécifique à Mac pour unifier le comportement
    document.addEventListener('wheel', (e) => {
        e.preventDefault(); // Empêche le défilement standard pour un contrôle uniforme
        throttleScroll(e);
    }, { passive: false }); // `{ passive: false }` permet `e.preventDefault()` sans avertissement
});
