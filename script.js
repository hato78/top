document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',  // ループスライダー
    perPage: 1,    // 1枚ずつ表示
    focus: 'center', // 中央に配置
  }).mount();
});


