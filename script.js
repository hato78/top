document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',  // ループスライダーを有効にする
    perPage: 1,    // 1枚ずつ表示
    focus: 'center', // 中央に配置
    padding: '5rem', // 左右の余白を適度に調整
    start: 0, // スタート位置を1枚目にする
    trimSpace: false, // 自動トリミングを無効にする
  }).mount();
});
