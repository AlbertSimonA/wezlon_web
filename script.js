const mobileNav = document.getElementById("mobile-nav");

setTimeout(function () {
  document.getElementById("form-container").style.display = "block";
}, 10000);


function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
  mobileNav.hidden = !mobileNav.hidden 
}

const dialog = document.querySelector("#formDialog")

const openDialog = function() {
  dialog.showModal();
}

const closeDialog = function() {
  dialog.close();
}

