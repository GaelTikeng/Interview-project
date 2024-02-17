const url = "https://foodish-api.com/images/burger";
const btn = document.querySelector(".btn")
const loaderContainer = document.querySelector(".loader");
loaderContainer.style.display = "none";
// let randomBurger = Math.floor(Math.random() * 10);
const listOfBurger = [
  "burger87.jpg",
  "burger13.jpg",
  "burger29.jpg",
  "burger48.jpg",
  "burger33.jpg",
  "burger79.jpg",
  "burger77.jpg",
  "burger45.jpg",
  "burger86.jpg",
  "burger61.jpg",
];

// function to fetch image
function fetchImage(mealType) {
  loaderContainer.style.display = "block";
  fetch("https://foodish-api.com/images/burger")
    .then((response) => {
      loaderContainer.style.display = "none";
      console.log(response);
      document.querySelector(".display").innerHTML = `
      <div >
        <h2>This is foodish</h2>
        <img src="${response.url}/${mealType}" alt="foodish image"/>
      </div>`;
    })
    .catch((error) => {
      console.log(error);
      document.querySelector(".display").innerHTML = `
      <div>
        <p class="display-error">${error}</p>
      </div>
      `;
      loaderContainer.style.display = "none";
    });
}

// fetch image when page loads
fetchImage("burger61.jpg");

// fetch image on click on the refresh button
function getData() {
  let randomBurger = Math.floor(Math.random() * 10);
  fetchImage(listOfBurger[randomBurger]);
}
btn.addEventListener("click", getData);
