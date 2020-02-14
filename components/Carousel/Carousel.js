/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselCont = document.querySelector(".carousel-container");

carouselCreator();

function carouselCreator() {
  let carouselIndex = 0;
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const mountImg = document.createElement("img");
  const CompImg = document.createElement("img");
  const treeImg = document.createElement("img");
  const musicImg = document.createElement("img");
  const rightButton = document.createElement("div");

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  mountImg.src = "./assets/carousel/mountains.jpeg";
  CompImg.src = "./assets/carousel/computer.jpeg";
  treeImg.src = "./assets/carousel/trees.jpeg";
  musicImg.src = "./assets/carousel/turntable.jpeg";

  leftButton.textContent = " < ";
  rightButton.textContent = " > ";

  carousel.appendChild(leftButton);
  carousel.appendChild(mountImg);
  carousel.appendChild(CompImg);
  carousel.appendChild(treeImg);
  carousel.appendChild(musicImg);
  carousel.appendChild(rightButton);


  // array of images for index pos for button clicks
  const images = [mountImg, CompImg, treeImg, musicImg];
  displayCarouselImage(images[carouselIndex]);
  buttonHelper();

  carouselCont.appendChild(carousel);

  // I personally love refactoring everything into functions
  function buttonHelper() {
    let carouselTimer = setInterval(autoImageScroll, 5000);
    leftButton.addEventListener("click", event => {
      clearInterval(carouselTimer);
      if (carouselIndex > 0) {
        carouselIndex--;
        displayCarouselImage(images[carouselIndex], images[carouselIndex + 1]);
      } else {
        carouselIndex = 3;
        displayCarouselImage(images[carouselIndex], images[0]);
      }
      carouselTimer = setInterval(autoImageScroll, 5000);
    });

    rightButton.addEventListener("click", event => {
      clearInterval(carouselTimer);
      autoImageScroll();
      carouselTimer = setInterval(autoImageScroll, 5000);
    });
  }

  function autoImageScroll() {
    if (carouselIndex < 3) {
      carouselIndex++;
      displayCarouselImage(images[carouselIndex], images[carouselIndex - 1]);
    } else {
      carouselIndex = 0;
      displayCarouselImage(images[carouselIndex], images[images.length - 1]);
    }
  }

  function displayCarouselImage(img, oldImg) {
    img.style.display = "block";
    if (oldImg) {
      oldImg.style.display = "none";
    }
  }
}
