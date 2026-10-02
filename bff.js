// --- Heart Animation Code ---
function createHeart() {
  let heart = document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";

  document.body.appendChild(heart);

  // Remove the heart element after the animation finishes (5 seconds)
  setTimeout(function () {
    heart.remove();
  }, 5000);
}

// Generate a new heart every 300 milliseconds
setInterval(createHeart, 300);

// --- Surprise Button Interaction ---
document.getElementById("showButton").addEventListener("click", function () {
  let photo = document.getElementById("myPhoto");
  let loveMessage = document.getElementById("loveMessage");

  // Make the photo and message visible
  photo.style.display = "block";
  loveMessage.style.display = "block";

  // Optional: Hide the button once clicked so it doesn't stay in the way
  this.style.display = "none";
});
