// PAINT NAV LISTS, CONTACT BUTTONS, SOCIAL ICONS
const navListHTML = `
  <ul class="nav-list container centered">
    <li><a href="#Articles">Articles</a></li>
    <li><a href="#Chats">Chats</a></li>
    <li><a href="#Awards">Awards</a></li>
    <li><a href="#About">About</a></li>
  </ul>
`
document.querySelector("#header-list-parent").innerHTML = navListHTML
document.querySelector("#mobile-list-parent").innerHTML = navListHTML

const contactButtonHTML = `
  <a href="#Contact" class="contact-button centered">Get in touch</a>
`
document.querySelector("#header-button-parent").innerHTML = contactButtonHTML
document.querySelector("#mobile-button-parent").innerHTML = contactButtonHTML

const socialIconsHTML = `
  <div class="social-icons">
    <a href="#Twitter">
      <img src="./assets/Icons/Twitter.svg" alt="Twitter icon" />
    </a>
    <a href="#LinkedIn">
      <img
        src="./assets/Icons/LinkedIn.svg"
        alt="LinkedIn icon"
      />
    </a>
    <a href="#Github">
      <img src="./assets/Icons/Github.svg" alt="Github icon" />
    </a>
  </div>
`
document.querySelector("#mobile-icons-parent").innerHTML = socialIconsHTML
document.querySelector("#footer-icons-parent").innerHTML = socialIconsHTML

// HANDLE MOBILE NAV TOGGLE
const body = document.querySelector("body")
const mobileNav = document.querySelector(".mobile-nav")
const toggleMenu = () => {
  mobileNav.classList.toggle("active")
  mobileNav.classList.contains("active")
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "unset")
}
document.querySelector("#menu-toggle").addEventListener("click", toggleMenu)
window.addEventListener("resize", () => {
  window.innerWidth >= 1024 &&
    mobileNav.classList.contains("active") &&
    toggleMenu()
})

// HANDLE ACTIVE NAV ITEM
const handleHashChange = () => {
  const navList = document.querySelectorAll(".nav-list li a")
  navList.forEach(item => {
    item.hash === window.location.hash
      ? item.classList.add("active")
      : item.classList.remove("active")
  })
  mobileNav.classList.contains("active") && setTimeout(toggleMenu, 300)
}
window.addEventListener("hashchange", handleHashChange)
