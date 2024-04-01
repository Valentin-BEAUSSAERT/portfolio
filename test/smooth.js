function smoothScrollTo(element, duration) {
    let start = window.scrollY,
        end = element.getBoundingClientRect().top,
        startTime = null;

    function scroll(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let position = start + (end * (progress / duration));

        window.scrollTo(0, position);

        if (progress < duration) {
            window.requestAnimationFrame(scroll);
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
            smoothScrollTo(sections[index], 500); // 1000ms = 1 seconde pour le défilement
            currentSectionIndex = index;

            setTimeout(() => {
                isScrolling = false;
            }, 1000); // Assumer que le défilement prend 1 seconde
        }
    };

    document.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (isScrolling) return;

        const direction = e.deltaY > 0 ? 1 : -1;
        scrollToSection(currentSectionIndex + direction);
    }, { passive: false });
});
