const dropdownMenu = document.querySelector(".dropdown-menu")
const menuToggle = document.querySelector("#menu-toggle")
const hamburger = document.querySelector(".hamburger")

const handleToggle = () => {
  if (dropdownMenu.classList.contains("open")) {
    dropdownMenu.classList.remove("open")
    hamburger.classList.remove("open")
  } else {
    dropdownMenu.classList.add("open")
    hamburger.classList.add("open")
  }
}

menuToggle.addEventListener("click", handleToggle)
