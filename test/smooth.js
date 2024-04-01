function smoothScrollTo(element, duration) {
    let start = window.pageYOffset;
    let end = element.getBoundingClientRect().top + window.pageYOffset;
    let change = end - start;
    let startTime = null;

    function scroll(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let position = start + change * (progress / duration);

        if (progress < duration) {
            window.scrollTo(0, position);
            window.requestAnimationFrame(scroll);
        } else {
            // S'assurer que nous allons exactement à la fin du scroll prévu
            window.scrollTo(0, end);
        }
    }

    window.requestAnimationFrame(scroll);
}


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.background');
    let currentSectionIndex = 0;
    let isScrolling = false;

    const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length && !isScrolling) {
            isScrolling = true;
            smoothScrollTo(sections[index], 800); // 1000ms = 1 seconde pour le défilement
            currentSectionIndex = index;

            setTimeout(() => {
                isScrolling = false;
            }, 800); // Assumer que le défilement prend 1 seconde
        }
    };

    document.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (isScrolling) return;

        const direction = e.deltaY > 0 ? 1 : -1;
        scrollToSection(currentSectionIndex + direction);
    }, { passive: false });
});
