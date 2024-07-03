let icon = document.querySelector('.icon .fa-bars')
let xmark = document.querySelector('.bg-black .mobile-menu .logo .fa-xmark')
let bgBlack = document.querySelector('.bg-black')
let mobileMenu = document.querySelector('.bg-black .mobile-menu')
icon.addEventListener("click" , () => {
   bgBlack.classList.add('active')
   mobileMenu.classList.add('active')
})

xmark.addEventListener('click' , () => {
   bgBlack.classList.remove('active')
   mobileMenu.classList.remove('active')
})