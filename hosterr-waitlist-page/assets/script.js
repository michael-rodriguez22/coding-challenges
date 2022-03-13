// Toggle Dropdown
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

// Highlight Current Nav Link
const navLinks = Array.from(document.querySelectorAll(".nav-links > a"))

const signInLinks = document.querySelectorAll(".call-to-action > a:first-child")

signInLinks.forEach(link => navLinks.push(link))

const handleActiveNavLink = () => {
  navLinks.forEach(link => {
    link.hash === window.location.hash
      ? link.classList.add("active")
      : link.classList.remove("active")
  })
}

window.addEventListener("load", handleActiveNavLink)
window.addEventListener("hashchange", handleActiveNavLink)
