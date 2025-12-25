const sethBtn = document.getElementById("seth-btn");
const scrubBtn = document.getElementById("scrubs-btn");
const coatBtn = document.getElementById("coat-btn");
const stethoscope = document.getElementById("stethoscope")
const scrubs = document.getElementById("scrubs")
const coat = document.getElementById("coat")
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const itemsContainer = document.querySelector(".shop-items");
const showAll = document.getElementById("shop-btn");
let currentIndex = 0;
const visibleItems = 3;
const totalItems = document.querySelectorAll(".shop-card").length;

document.querySelectorAll(".service-card, .shop-btn").forEach(i => {
    i.addEventListener("click", () => {
        alert("Coming soon! This is only an MVP.");
    });
});

sethBtn.addEventListener("click", () => {
    stethoscope.classList.add("showInfo");
});

scrubBtn.addEventListener("click", () => {
    scrubs.classList.add("showInfo");
});

coatBtn.addEventListener("click", () => {
    coat.classList.add("showInfo");
});

showAll.addEventListener("click", ()=> {
    alert("Coming soon! This is only an MVP.");
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

rightArrow.addEventListener("click", () => {
  if (currentIndex < totalItems - visibleItems) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const cardWidth = document.querySelector(".shop-card").offsetWidth + 20;
  itemsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}