import "./style.css";

async function loadNavbar() {
  const response = await fetch("./navbar.html");
  const navbarHtml = await response.text();
  const topBarId = "page-top-navbar";
  const navbarContainer = document.getElementById(topBarId);
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHtml;
  }
}

loadNavbar();
