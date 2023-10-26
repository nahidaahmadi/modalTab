"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal"); //use querySelectorAll if there is more than one element!!**
console.log(btnsOpenModal);
const closeBtn = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  //you can use this fun multiple times
  console.log("Button clicked!");
  modal.classList.remove("hidden"); //dont use . here//dot is used in selectors
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeBtn); //dont write closeBtn()  cause it will be executed right after the page is loaded
overlay.addEventListener("click", closeBtn);
//keypress events are global events which it is needed  to listen to all the elements
document.addEventListener("keydown", function (e) {
  //e=the key which is pressed!!
  console.log("a key was pressed!");
  console.log(e + " " + e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    console.log("the escape was pressed!");

    //when it is visible
    // modal.classList.add("hidden");
    closeBtn();
  }
});
