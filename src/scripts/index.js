import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './component/component';
import App from './view/app';

// import data from '../public/data/DATA.json';
const app = new App({
  content: document.querySelector('#restoContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// const showRestaurants = (restaurantsData) => {
//     const restaurantContainer = document.querySelector(".restaurant-container");
//     restaurantContainer.innerHTML = "";

//     restaurantsData.forEach(restaurant => {
//         const { name, pictureId, city, rating, description } = restaurant;
//         const restaurantCard = document.createElement("div");
//         restaurantCard.classList.add("restaurant-card");

//         restaurantCard.innerHTML = `
//             <div class="card" tabindex="0"> 
//                 <img class="card-img" src="${pictureId}" alt="${name}">
//                 <div class="card-content">
//                     <h2 class="card-title">${name}</h2>
//                     <p class="card-info">${city ? `Location: ${city}` : 'Location: Unknown'}</p>
//                     <p class="card-info">${rating ? `Rating: ${rating}` : 'Rating: Not available'}</p>
//                     <p class="card-info">${description ? `Description: ${description.substring(0, 50)}...` : 'Description: Not available'}</p>
//                 </div>
//             </div>
//         `;

//         restaurantContainer.appendChild(restaurantCard);
//     });
// };

// showRestaurants(data.restaurants);

const hamburgerButton = document.querySelector('#hamburger');
const drawer = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
const header = document.querySelector('header');

header.addEventListener('click', event => {
  drawer.classList.remove('open');
  event.stopPropagation();
});
mainElement.addEventListener('click', event => {
  drawer.classList.remove('open');
  event.stopPropagation();
});
hamburgerButton.addEventListener('click', event => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

let list = document.querySelector('.sliders .list');
let items = document.querySelectorAll('.sliders .list .item');
let dots = document.querySelectorAll('.sliders .dots .li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSliders();
}

prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadSliders();
}

let refreshSliders = setInterval(() => { next.click() }, 4000);

function reloadSliders() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + 'px';

  clearInterval(refreshSliders);
  refreshSliders = setInterval(() => { next.click() }, 4000);
}
dots.forEach((li, key) => {
  li.addEventListener('click', function () {
    active = key;
    reloadSliders();
  });
});


