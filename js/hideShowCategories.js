let toggleBtn = document.querySelector("#hide-show-btn");
let toggleBtnIcon = document.querySelector("#hide-show-btn i");
let categoryList = document.querySelector(".sub-categories-container");

toggleBtn.addEventListener("click", () => {
  if (categoryList.classList.contains("visible")) {
    categoryList.classList.remove("visible");
    toggleBtnIcon.classList.remove("fa-chevron-up");
    toggleBtnIcon.classList.add("fa-chevron-down");
  } else {
    categoryList.classList.add("visible");
    toggleBtnIcon.classList.remove("fa-chevron-down");
    toggleBtnIcon.classList.add("fa-chevron-up");
  }
});

let toggleBtnForNav = document.querySelector("#brandModelHideShowBtn");
let toggleBtnIconForNav = document.querySelector("#brandModelHideShowBtn i");
let brandModelList = document.querySelector(".brand-model-container");

toggleBtnForNav.addEventListener("click", () => {
  if (brandModelList.classList.contains("hide")) {
    brandModelList.classList.remove("hide");
    toggleBtnIconForNav.classList.remove("fa-chevron-up");
    toggleBtnIconForNav.classList.add("fa-chevron-down");
  } else {
    brandModelList.classList.add("hide");
    toggleBtnIconForNav.classList.remove("fa-chevron-down");
    toggleBtnIconForNav.classList.add("fa-chevron-up");
  }
});
