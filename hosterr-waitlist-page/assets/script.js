const menuToggle = document.querySelector("#menu-toggle")
const dropdownMenu = document.querySelector(".dropdown-menu")

const handleToggle = () => {
  if (dropdownMenu.classList.contains("open")) {
    dropdownMenu.classList.remove("open")
    menuToggle.classList.remove("open")
  } else {
    dropdownMenu.classList.add("open")
    menuToggle.classList.add("open")
  }
}

menuToggle.addEventListener("click", handleToggle)
