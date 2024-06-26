import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
            <div class="card" tabindex="0">
                <a href="/#/detail/${resto.id}">
                <img class="card-img" src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="${resto.name}">
                <div class="card-content">
                    <h2 class="card-title">${resto.name}</h2>
                    <p class="card-info">${resto.city}</p>
                    <p class="card-info">⭐ ${resto.rating}</p>
                    <p class="card-info">${resto.description.substring(0, 100)}...</p>
                </div>
                </a>
            </div>
`;
const createRestoDetailTemplate = (resto) => `
    <h2 class="resto-title"></h2>
    <img class="resto-image" src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="${resto.name}">
    <div class="resto-info">
        <h3>Information</h3>
        <h4>Nama Restaurant</h4>
        <p>${resto.name}</p>
        <h4>Kategori</h4>
        <p>${resto.categories.map((category) => category.name).join(', ')}</p>
        <h4>Alamat</h4>
        <p>${resto.address}</p>
        <h4>Kota</h4>
        <p>${resto.city}</p>
        <h4>Deskripsi</h4>
        <p>${resto.description}</p>
    </div>
    <div class="resto-menu">
        <h2 class="restaurant-menu">Menu</h2>
        <div class="food-detail">
            <h3 class="menu-title">Foods</h3>
                <ul class="menu-list">
                    ${resto.menus.foods.map((food) => `<li class="list">${food.name}</li>`).join('')}
                </ul>
        </div>
        <div class="drink-detail">
            <h3 class="menu-title">Drinks</h3>
                <ul class="menu-list">
                    ${resto.menus.drinks.map((drink) => `<li class"list">${drink.name}</li>`).join('')}
                </ul>
        </div>
    </div>
    <div class="restaurant-reviews">
        <h3 class="review-title">Review</h3>
            <div class="review-item">
                ${resto.customerReviews.map((review) => `
                <h4>${review.name} - ${review.date}</h4>
                <p>${review.review}</p>`).slice(0, 3)}
            </div>
    </div>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
