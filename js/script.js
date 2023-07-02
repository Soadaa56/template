sideBar = document.getElementById("sidebar");
mainContent = document.getElementById("main-content");
sideBarOpenBtn = document.querySelector("#main-content > .openbtn")

function openNav() {
  sideBar.style.width = "auto";
  mainContent.style.gridColumn = "2 / 3";
  sideBarOpenBtn.style.display = "none";
}
function closeNav() {
  sideBar.style.width = "0";
  mainContent.style.gridColumn = "1 / 3";
  sideBarOpenBtn.style.display = "block";
}