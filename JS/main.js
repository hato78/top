// main.js — Vue 3 (CDN) used only to initialize small interactive behaviors
const { createApp, onMounted } = Vue;

createApp({
  setup() {
    // Intersection Observer for reveal animations
    onMounted(() => {
      const appearElems = document.querySelectorAll('[data-appear]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });

      appearElems.forEach(el => io.observe(el));
    });

    // set current year
    onMounted(() => {
      const y = new Date().getFullYear();
      document.getElementById('year').textContent = y;
    });

    return {};
  }
}).mount('#app');
