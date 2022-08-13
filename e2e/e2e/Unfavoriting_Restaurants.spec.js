const assert = require('assert');

Feature('Unfavoriting Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited menu restaurant', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.seeElement('.content__heading');
  I.amOnPage('/');
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const unfavoritedRestaurantName = await I.grabTextFrom('.restaurant__name a');
  assert.strictEqual(firstRestaurantName, unfavoritedRestaurantName);

  I.seeElement('.restaurant__name a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
