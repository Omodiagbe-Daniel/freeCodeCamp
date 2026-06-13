const gallery = document.querySelector(".gallery");
const galleryItem = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeBtn = document.getElementById("close-btn");

const imageArr = [""]
galleryItem.forEach(item => item.addEventListener("click", () => {lightbox.style.display = "flex";
lightboxImage.src = item.src.replace("-thumbnail", "");
}));

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
})
