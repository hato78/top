// work.js — Vue 3 lightbox + minor animation
const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    onMounted(() => {
      const y = new Date().getFullYear();
      document.getElementById('year2').textContent = y;

      // subtle entrance for hero image
      const hero = document.querySelector('.hero-frame');
      if (hero) {
        hero.style.opacity = 0;
        hero.style.transform = 'translateY(8px)';
        setTimeout(() => {
          hero.style.transition = 'all .6s cubic-bezier(.2,.9,.2,1)';
          hero.style.opacity = 1;
          hero.style.transform = 'translateY(0)';
        }, 140);
      }
    });
  }
}).mount('#workApp');

window.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'fade',
    rewind: true,
  });

  splide.mount();
});
