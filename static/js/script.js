const fav = document.querySelector(".fav1");
let isClicked = false;
fav.addEventListener("click", function () {
  isClicked = !isClicked;
  const heart = document.querySelector("i");
  console.log(isClicked);
  if (isClicked) {
    heart.classList.remove("text-white");
    heart.classList.add("text-danger");

    console.log(heart.classList);
  } else {
    heart.classList.remove("text-danger");
    heart.classList.add("text-white");
  }
});

// console.log(fav);
