const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
const productImages = ['product-gallery-01.jpg', 'product-gallery-02.jpg', 'product-gallery-03.jpg', 'product-gallery-04.jpg', 'product-gallery-05.jpg', 'product-gallery-06.jpg', 'product-gallery-07.jpg', 'product-gallery-08.jpg', 'product-gallery-09.jpg', 'product-gallery-10.jpg', 'product-gallery-11.jpg', 'product-gallery-12.jpg', 'product-gallery-13.jpg', 'product-gallery-14.jpg', 'product-gallery-15.jpg', 'product-gallery-16.jpg', 'product-gallery-17.jpg', 'product-gallery-18.jpg', 'product-gallery-19.jpg', 'product-gallery-20.jpg', 'product-gallery-21.jpg', 'product-gallery-22.jpg', 'product-gallery-23.jpg'];
const gallery = document.getElementById("productGallery");
productImages.forEach((file, index) => {
  const image = document.createElement("img");
  image.src = "assets/" + file;
  image.alt = "AR International product sample " + (index + 1);
  image.loading = "lazy";
  gallery.appendChild(image);
});
document.getElementById("year").textContent = new Date().getFullYear();
