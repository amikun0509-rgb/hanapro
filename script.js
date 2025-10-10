let submitted = false;

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}


// スライドショー
const images = [
  "images/S__25403487.jpg",
  "images/S__25403488.jpg",
  "images/S__25403497.jpg"
];
let current = 0;
const slideshow = document.getElementById("slideshow");

setInterval(() => {
  current = (current + 1) % images.length;
  slideshow.src = images[current];
}, 3000); // 3秒ごとに切り替え

