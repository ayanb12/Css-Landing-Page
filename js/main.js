const img = document.querySelector(".icon");
img.addEventListener("click", toggleIcon);

function toggleIcon(e) {
  e.preventDefault();
  const icon1 = `${window.location.origin}/images/icon-hamburger.svg`;
  const icon2 = `${window.location.origin}/images/icon-close.svg`;

  if (img.src === icon1) {
    img.src = icon2;
  } else {
    img.src = icon1;
  }

  document.querySelector(".main-ul").classList.toggle("show");
}
