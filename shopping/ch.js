// const card = document.getElementById("q");

// const cateBar = document.querySelector(".i");
// const cat = document.querySelector(".c");
// cateBar.addEventListener("click", () => {
//   cat.classList.toggle("show");
// });

// const shirt = document.querySelector(".shirt");
// const carda = document.querySelector(".a-card");
// shirt.addEventListener("click", () => {
//   carda.classList.toggle("show");
//   card.style.display = "none";
// });
// const cap = document.querySelector(".cap");
// const cardb = document.querySelector(".b-card");
// cap.addEventListener("click", () => {
//   cardb.classList.toggle("show");
//   card.style.display = "none";
// });
// const pants = document.querySelector(".pants");
// const cardc = document.querySelector(".cc-card");
// pants.addEventListener("click", () => {
//   cardc.classList.toggle("show");
//   card.style.display = "none";
// });

const card = document.getElementById("q");

function hideAllCards() {
  document
    .querySelectorAll(".a-card, .b-card, .cc-card")
    .forEach((cardElement) => {
      cardElement.classList.remove("show");
    });
}

const cateBar = document.querySelector(".i");
const cat = document.querySelector(".c");
cateBar.addEventListener("click", () => {
  cat.classList.toggle("show");
});

const all = document.querySelector(".all");
const cardz = document.querySelector(".c-card");
all.addEventListener("click", () => {
  hideAllCards();
  cardz.classList.toggle("show");
  card.style.display = "";
});

const shirt = document.querySelector(".shirt");
const carda = document.querySelector(".a-card");
shirt.addEventListener("click", () => {
  hideAllCards();
  carda.classList.toggle("show");
  card.style.display = "none";
});

const cap = document.querySelector(".cap");
const cardb = document.querySelector(".b-card");
cap.addEventListener("click", () => {
  hideAllCards();
  cardb.classList.toggle("show");
  card.style.display = "none";
});

const pants = document.querySelector(".pants");
const cardc = document.querySelector(".cc-card");
pants.addEventListener("click", () => {
  hideAllCards();
  cardc.classList.toggle("show");
  card.style.display = "none";
});

// const hello = document.getElementById("cl");
// const log = document.getElementById("Log");
// hello.addEventListener("click", () => {
//   log.classList.toggle("show");
// });
