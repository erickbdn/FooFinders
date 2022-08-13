import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__info">
  <div class="img-wrapper">
    <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.pictureId}"/>
  </div>
  <div class="restaurant__info-content">
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Foods Menu</h4>
    <p>${restaurant.menus.foods.map((food) => food.name)}</p>
    <h4>Drinks Menu</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p>
  </div>
    <h4>Reviews</h4>
    <p>${restaurant.customerReviews.map((customerReviews) => `
    <div class="review">
      <p class="review-name">${customerReviews.name}</p>
      <p class="review-review">${customerReviews.review}</p>
    </div>
    `).join(' ')}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name || '-'}"
            data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
        <p>${restaurant.description || '-'}</p>
    </div>
  </div>
  `;

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
  <i class="fa-regular fa-bookmark" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa-solid fa-bookmark" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};
