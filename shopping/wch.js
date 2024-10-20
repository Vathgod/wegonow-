function hideAllCards() {
  document
    .querySelectorAll(".a-card, .b-card, .cc-card")
    .forEach((cardElement) => {
      cardElement.classList.remove("show");
    });
}
// const shirt = document.querySelector(".shirt");
// const carda = document.querySelector(".a-card");
// shirt.addEventListener("click", () => {
//   hideAllCards();
//   carda.classList.toggle("show");
//   card.style.display = "none";
// });

const inputt = document.getElementById("ipp");
const searchh = document.getElementById("searchh");

searchh.addEventListener("click", () => {
  const text = inputt.value;
  const lowerEl = text.toLowerCase();
  if (lowerEl === "dress" || lowerEl === "Dress") {
    const carda = document.querySelector(".a-card");
    searchh.addEventListener("click", () => {
      hideAllCards();
      carda.classList.toggle("show");
      card.style.display = "none";
    });
  } else if (lowerEl === "top" || lowerEl === "Top" || lowerEl === "shirt") {
    const cardb = document.querySelector(".b-card");
    searchh.addEventListener("click", () => {
      hideAllCards();
      cardb.classList.toggle("show");
      card.style.display = "none";
    });
  } else if (lowerEl === "cap" || lowerEl === "Cap") {
    const cardc = document.querySelector(".cc-card");
    searchh.addEventListener("click", () => {
      hideAllCards();
      cardc.classList.toggle("show");
      card.style.display = "none";
    });
  } else {
    inputt.value = "";
    inputt.classList.add("error");
    inputt.placeholder = "No we dont have";
  }
});
