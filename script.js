let icon = document.querySelector('.head .fa-bars')
let xmark = document.querySelector('.head .bg-black .mobile-menu .logo .fa-xmark')
let bgBlack = document.querySelector('.head .bg-black')
let mobileMenu = document.querySelector('.head .bg-black .mobile-menu')
icon.addEventListener("click" , () => {
   bgBlack.classList.add('active')
   mobileMenu.classList.add('active')
})

xmark.addEventListener('click' , () => {
   bgBlack.classList.remove('active')
   mobileMenu.classList.remove('active')
})