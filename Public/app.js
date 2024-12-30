// First slider controls
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slider = document.getElementById("slider");

const cardWidth = 300 + 16; // Card width + margin (300px + 2rem margin)
let scrollPosition = 0;

next.addEventListener("click", () => {
  const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
  scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
  slider.style.transform = `translateX(-${scrollPosition}px)`;
});

prev.addEventListener("click", () => {
  scrollPosition = Math.max(scrollPosition - cardWidth, 0);
  slider.style.transform = `translateX(-${scrollPosition}px)`;
});




// Second slider controls
const slider2 = document.getElementById("slider2");
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");

prev2.addEventListener("click", () => {
  slider2.scrollBy({
    top: 0,
    left: -300, // Adjust the scroll step size
    behavior: "smooth",
  });
});

next2.addEventListener("click", () => {
  slider2.scrollBy({
    top: 0,
    left: 300, // Adjust the scroll step size
    behavior: "smooth",
  });
});


// Second slider controls
const slider3 = document.getElementById("slider3");
const prev3 = document.getElementById("prev3");
const next3 = document.getElementById("next3");

prev3.addEventListener("click", () => {
  slider3.scrollBy({
    top: 0,
    left: -300, // Adjust the scroll step size
    behavior: "smooth",
  });
});

next3.addEventListener("click", () => {
  slider3.scrollBy({
    top: 0,
    left: 300, // Adjust the scroll step size
    behavior: "smooth",
  });
});


// Second slider controls
const slider4 = document.getElementById("slider4");
const prev4 = document.getElementById("prev4");
const next4 = document.getElementById("next4");

prev3.addEventListener("click", () => {
  slider4.scrollBy({
    top: 0,
    left: -300, // Adjust the scroll step size
    behavior: "smooth",
  });
});

next4.addEventListener("click", () => {
  slider4.scrollBy({
    top: 0,
    left: 300, // Adjust the scroll step size
    behavior: "smooth",
  });
});


// Second slider controls
const slider5 = document.getElementById("slider5");
const prev5 = document.getElementById("prev5");
const next5 = document.getElementById("next5");

prev5.addEventListener("click", () => {
  slider5.scrollBy({
    top: 0,
    left: -300, // Adjust the scroll step size
    behavior: "smooth",
  });
});

next5.addEventListener("click", () => {
  slider5.scrollBy({
    top: 0,
    left: 300, // Adjust the scroll step size
    behavior: "smooth",
  });
});
