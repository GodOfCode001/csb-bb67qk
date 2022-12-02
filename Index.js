function onScroll() {
  const headElem = document.querySelector(".headtext");
  const textElem = document.querySelector(".text");

  const scrollPosition = window.pageYOffset;
  const revealPosition = headElem.offsetTop + headElem.offsetHeight / 10;

  if (scrollPosition >= revealPosition) {
    textElem.classList.add("reveal");
  }
  if (scrollPosition <= revealPosition) {
    textElem.classList.remove("reveal");
  }
}

function run() {
  document.addEventListener("scroll", onScroll);
}
run();
