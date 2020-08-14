let menuIcon = document.getElementById("menu-icon");
let closeBtn = document.getElementById("closebtn");
let overlay = document.getElementById("overlay");
let navLink = document.querySelectorAll(".nav-link");

menuIcon.addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "250px";
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "0px";
  overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "0px";
  overlay.style.display = "none";
});

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    document.getElementById("mySidenav").style.width = "0px";
    overlay.style.display = "none";
  });
}
