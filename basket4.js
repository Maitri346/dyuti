function magnify(event) {
  var img, glass, posX, posY, bgPosX, bgPosY;
  img = document.getElementById("product-img");
  glass = document.querySelector(".magnifying-glass");

  // Set background image for the magnifying glass
  glass.style.backgroundImage = "url('" + img.src + "')";

  // Calculate the ratio between the magnified and non-magnified dimensions
  var ratio = 3;

  // Calculate the position of the cursor relative to the image
  posX = event.pageX - img.offsetLeft;
  posY = event.pageY - img.offsetTop;

  // Calculate the position of the background image
  bgPosX = -posX * ratio;
  bgPosY = -posY * ratio;

  // Set background position for the magnifying glass
  glass.style.backgroundPosition = bgPosX + "px " + bgPosY + "px";

  // Set coordinates for the magnifying glass
  var glassX = posX - glass.offsetWidth / 2;
  var glassY = posY - glass.offsetHeight / 2;

  // Prevent the magnifying glass from going outside the boundaries of the image
  if (glassX < 0) {
    glassX = 0;
  }
  if (glassX > img.width - glass.offsetWidth) {
    glassX = img.width - glass.offsetWidth;
  }
  if (glassY < 0) {
    glassY = 0;
  }
  if (glassY > img.height - glass.offsetHeight) {
    glassY = img.height - glass.offsetHeight;
  }

  // Set position for the magnifying glass
  glass.style.left = glassX + "px";
  glass.style.top = glassY + "px";
}