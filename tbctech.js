let iqonremove = document.querySelector(".fa-times");
let body = document.querySelector("#body");

let sp = document.querySelector(".sp");
let sp1 = document.querySelector(".sp1");
let sp2 = document.querySelector(".sp2");

let iqondown = document.querySelector(".iqondown");

let button1 = document.querySelectorAll(".button1");
let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  body.style.opacity = "0.6";
  body.style.transition = "0.4s";
});

iqonremove.addEventListener("click", () => {
  body.style.opacity = "1";
  body.style.transition = "0.4s";
});

let carousel = document.querySelector("#carousel");
let leftbutton = document.querySelector("#left-button");
let rightbutton = document.querySelector("#right-button");

const imgarr = [
  [
    "./image folder/usaid.webp",
    "./image folder/space.webp",
    "./image folder/tineti.webp",
  ],
  [
    "./image folder/tegeta.webp",
    "./image folder/spectre.webp",
    "./image folder/lizingi.webp",
  ],
  ["./image folder/ufc.webp"],
];

let index = 0;

leftbutton.addEventListener("click", () => {
  removeTransition();
  if (index > 0) {
    index--;
  } else {
    index = 2;
  }
  addTransition();
  carouselMethod(imgarr);
});

setInterval(() => {
  removeTransition();
  if (index < 2) {
    index++;
  } else {
    index = 0;
  }
  addTransition();
  carouselMethod(imgarr);
}, 5000);

rightbutton.addEventListener("click", () => {
  removeTransition();
  if (index < 2) {
    index++;
  } else {
    index = 0;
  }
  addTransition();
  carouselMethod(imgarr);
});

function addTransition() {
  // Adding the class after a short delay to allow for the removal to take effect
  setTimeout(() => {
    carousel.classList.add("carousel-transition");
  }, 10);
}

function removeTransition() {
  carousel.classList.remove("carousel-transition");
}

function carouselMethod(imgarr) {
  carousel.innerHTML = "";
  for (let i = 0; i < imgarr[index].length; i++) {
    let imgElement = document.createElement("img");
    imgElement.src = imgarr[index][i];
    carousel.append(imgElement);
  }
}
carouselMethod(imgarr);

let counter = 0;
for (let i of button1) {
  button1[0].addEventListener("click", () => {
    counter++;
    if (counter % 2 != 0) {
      iqondown.style.rotate = "180deg";
      sp.style.display = "block";
    } else {
      iqondown.style.rotate = "0deg";
      sp.style.display = "none";
    }
  });
}

let iqondown1 = document.querySelector(".iqondown1");
// console.log(iqondown)

let counter1 = 0;
for (let i of button1) {
  button1[1].addEventListener("click", () => {
    counter1++;
    if (counter1 % 2 != 0) {
      iqondown1.style.rotate = "180deg";
      sp1.style.display = "block";
    } else {
      iqondown1.style.rotate = "0deg";
      sp1.style.display = "none";
    }
  });
}
let iqondown2 = document.querySelector(".iqondown2");

let counter2 = 0;
for (let i of button1) {
  button1[2].addEventListener("click", () => {
    counter2++;
    if (counter2 % 2 != 0) {
      iqondown2.style.rotate = "180deg";
      sp2.style.display = "block";
      sp2.style.transition = "all 0.7s";
    } else {
      iqondown2.style.rotate = "0deg";
      sp2.style.display = "none";
      sp2.style.transition = "all 0.7s";
    }
  });
}
