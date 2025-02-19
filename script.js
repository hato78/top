var splide = new Splide(".splide", {
  direction: "ttb",
  height: "10rem",
});

splide.mount();
// カーソル用の画像を作成
// カーソル用の画像を作成
const cursor = document.createElement("img");
cursor.src = "images/pointer.png"; // カスタムカーソル画像
cursor.style.position = "absolute";
cursor.style.width = "32px"; // サイズ調整
cursor.style.height = "32px";
cursor.style.pointerEvents = "none"; // クリックの邪魔をしない
cursor.style.zIndex = "1000"; // 最前面に表示
document.body.appendChild(cursor);

// マウスの動きに合わせてカスタム画像を追従
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});
