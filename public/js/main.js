window.onscroll = () => {
  let navbar = document.querySelector(".navbar");
  let cartItem = document.querySelector(".cart-items-container");
  let searchForm = document.querySelector(".search-form");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};
