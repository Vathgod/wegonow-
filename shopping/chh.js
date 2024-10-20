const ic1 = document.getElementById("ic1");
const ic2 = document.getElementById("ic2");
const hello = document.getElementById("cl");
const log = document.getElementById("Log");
hello.addEventListener("click", () => {
  ic2.classList.toggle("show");
  ic1.classList.toggle("show");
  log.classList.toggle("show");
});

const element = document.querySelectorAll(".card1");
const epi = document.querySelectorAll(".pi");

for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("click", () => {
    element[i].classList.toggle("show");
    epi[i].classList.toggle("show");
  });
}

const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();

    // Check if the card is in the viewport
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      card.classList.add("visible"); // Add the class when visible
    } else {
      card.classList.remove("visible"); // Remove the class when not visible
    }
  });
});
const card1s = document.querySelectorAll(".card1");
window.addEventListener("scroll", () => {
  card1s.forEach((card) => {
    const rect = card.getBoundingClientRect();

    // Check if the card is in the viewport
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      card.classList.add("visible"); // Add the class when visible
    } else {
      card.classList.remove("visible"); // Remove the class when not visible
    }
  });
});

// const cardd = document.getElementById("q");

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

const input = document.getElementById("ip");
const search = document.getElementById("search");

search.addEventListener("click", () => {
  const text = input.value;
  const lowerEl = text.toLowerCase();
  if (lowerEl === "shirt") {
    const carda = document.querySelector(".a-card");
    search.addEventListener("click", () => {
      hideAllCards();
      carda.classList.toggle("show");
      card.style.display = "none";
    });
  } else if (
    lowerEl === "jeans" ||
    lowerEl === "jean" ||
    lowerEl === "cowboy"
  ) {
    const cardc = document.querySelector(".cc-card");
    search.addEventListener("click", () => {
      hideAllCards();
      cardc.classList.toggle("show");
      card.style.display = "none";
    });
  } else if (lowerEl === "cap" || lowerEl === "Cap") {
    const cardb = document.querySelector(".b-card");
    search.addEventListener("click", () => {
      hideAllCards();
      cardb.classList.toggle("show");
      card.style.display = "none";
    });
  } else {
    input.value = "";
    input.classList.add("error");
    input.placeholder = "No we dont have";
  }
});
