// Nav Bar
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
//Scroll Top
const scrollTop = document.querySelector(".scroll-top");
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});
