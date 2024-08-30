// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all the navigation list items
  document.querySelectorAll(".navigations nav ul li").forEach((item) => {
    item.addEventListener("click", function () {
      // Remove 'active' class from any previously active item
      document
        .querySelector(".navigations nav ul li.active")
        .classList.remove("active");

      // Add 'active' class to the clicked item
      this.classList.add("active");

      // Determine the target page based on the clicked item
      let targetPage = "";

      switch (this.textContent.trim().toLowerCase()) {
        case "home":
          targetPage = "index.html";
          break;
        case "mathematics":
          targetPage = "maths.html";
          break;
        case "physics":
          targetPage = "physics.html";
          break;
        case "chemistry":
          targetPage = "chemistry.html";
          break;
        default:
          targetPage = "index.html"; // Default page if none match
      }

      // Navigate to the target page
      if (targetPage) {
        window.location.href = targetPage;
      }
    });
  });
});

const year = new Date();
let foot = document.getElementById("foot");
const txt = "©  SirLaw Limited. All Rights Reserved."
foot.innerHTML =
  year.getFullYear() + " " +txt






 const images = [
  "happ.png",
  "mary1.jpg",
  "mary2.jpg",
  "sirlaw pic.jpg",
  "mary3.jpg",
  "primary six.jpg",
  "happy-bith.webp"
];

let img = document.getElementById('img');
let currentIndex = 0;

// Function to change the image
function changeImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  img.src = `/images/${images[currentIndex]}`;
}

// Change the image every 3 seconds
setInterval(changeImage, 2000);

