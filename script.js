// ハンバーガーメニューのトグル
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
}

// モーダルを開く
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

// モーダルを閉じる
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// モーダルの背景クリックで閉じる処理
window.onclick = function(event) {
    const modal = document.getElementById('greeting-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // スライドショー
    const images = [
        "https://github.com/amikun0509-rgb/hanapro/blob/main/S__25403487.jpg?raw=true",
        "https://github.com/amikun0509-rgb/hanapro/blob/main/S__25403488.jpg?raw=true",
        "https://github.com/amikun0509-rgb/hanapro/blob/main/S__25403497.jpg?raw=true"
    ];

    let current = 0;
    const slideshow = document.getElementById("slideshow");

    if (slideshow) {
        setInterval(() => {
            current = (current + 1) % images.length;
            slideshow.src = images[current];
        }, 3000); // 3秒ごとに画像を切り替え
    }

    // FAQ「すべての質問を見る」ボタンの処理
    const showAllBtn = document.getElementById("show-all-qa");
    const qaHidden = document.getElementById("qa-details-hidden");

    if (showAllBtn && qaHidden) {
        showAllBtn.addEventListener("click", () => {
            qaHidden.classList.remove("qa-hidden");
            showAllBtn.style.display = "none";
        });
    }
});







