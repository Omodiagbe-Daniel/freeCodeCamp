const favouriteButton = document.querySelectorAll(".favorite-icon");

favouriteButton.forEach(button => button.addEventListener("click", function () {
  if (button.classList.contains("filled")) {
    button.classList.remove("filled");
    button.innerHTML = "&#9825;"; // ♡
  } else {
    button.classList.add("filled");
    button.innerHTML = "&#10084;"; // ❤
  }
}));
