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
