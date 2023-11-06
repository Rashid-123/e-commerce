const top_cart_logo = document.querySelector(".nav-cart-logo");
const modal = document.querySelector(".modal");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const cart_number = document.querySelector(".cart_count");
const cart_price_count = document.querySelector(".cart_price_count");
const total = document.querySelector(".cart_total_price");
const cart_hidden = document.querySelector(".cart_box");
const cart_add = document.querySelector(".add-cart");
const logo_count = document.querySelector(".cart_logo_count");

// VARIABLES
let cart_value = 0;
let cart_value_2 = 0;
let total_value = 0;

const update_count = function (value) {
  cart_number.innerHTML = value.toString();
};

// EVENT LISTENERS

plus.addEventListener("click", function (e) {
  e.preventDefault();
  cart_value += 1;
  update_count(cart_value);
});

minus.addEventListener("click", function (e) {
  e.preventDefault();
  if (cart_value > 0) {
    cart_value -= 1;
  }
  update_count(cart_value);
});

top_cart_logo.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.toggle("hidden");
});

cart_add.addEventListener("click", function (e) {
  e.preventDefault();
  cart_value_2 = cart_value;
  cart_value = 0;
  update_count(cart_value);
  total_value = 125 * cart_value_2;
  logo_count.innerHTML = cart_value_2.toString();
  if (cart_value_2 > 0) {
    cart_price_count.innerHTML = cart_value_2.toString();
    total.innerHTML = `$${total_value.toString()}.00`;
    cart_hidden.classList.remove("hidden-2");
  } else {
    cart_hidden.classList.add("hidden-2");
  }
});
