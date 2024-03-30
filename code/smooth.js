<script>
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, { rootMargin: "0px", threshold: 0.5 });

  document.querySelectorAll('.background').forEach(img => {
    observer.observe(img);
  });
});
</script>
