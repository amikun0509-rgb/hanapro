function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

// ページが読み込まれてからスライドショー開始
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "src=https://github.com/amikun0509-rgb/hanapro/blob/main/S__25403487.jpg?raw=true",
    "src=https://github.com/amikun0509-rgb/hanapro/blob/main/S__25403488.jpg?raw=true",
    "images/S__25403497.jpg"
  ];

  let current = 0;
  const slideshow = document.getElementById("slideshow");

  if (slideshow) {
    setInterval(() => {
      current = (current + 1) % images.length;
      slideshow.src = images[current];
    }, 3000);
  }
});



