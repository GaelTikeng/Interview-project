const url = "https://foodish-api.com/images/burger";
const loaderContainer = document.querySelector(".loader-container");
loaderContainer.style.display = "none";
let burgerType = Math.floor(Math.random() * 10);
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

// function to display loader
const displayLoader = () => {
  loaderContainer.style.display = "block";
};

// hide loader
const hideLoader = () => {
  loaderContainer.style.dsiplay = "none";
};

// function to fetch image
function fetchImage(mealType) {
  loaderContainer.style.display = "block";
  fetch("https://foodish-api.com/images/burger")
    .then((response) => {
      loaderContainer.style.display = "none";
      console.log(response);
      document.querySelector(".display").innerHTML = `
      <div >
        <h2>This is image</h2>
        <img src="${response.url}/${mealType}" alt="foodish image"/>
      </div>`;
    })
    .catch((error) => {
      console.log(error);
      document.querySelector('.display').innerHTML = `
      <div>
        <p class="display-error">${error}</p>
      </div>
      `
    });
}

// fetch image when page loads
fetchImage("burger61.jpg");

function getData() {
  // displayLoader();
  let burgerType = Math.floor(Math.random() * 10);
  console.log(burgerType);
  console.log("hello gael");
  fetchImage(listOfBurger[burgerType]);
  // fetch(url)
  //   .then((data) => {
  //     hideLoader();
  //     console.log(data);
  //     console.log(`${data.url}/${listOfBurger[burgerType]}`);
  //     document.querySelector(".display").innerHTML = `
  //     <div>
  //       <h1>This is image</h1>
  //       <img src="${data.url}/${listOfBurger[burgerType]}" alt="foodish image"/>
  //     </div>`;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}
document.querySelector(".btn").addEventListener("click", getData);
