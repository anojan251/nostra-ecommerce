let sidenav = document.getElementById("mobileMenu")
let humburgerIcon = document.getElementById("humburger")
let closeMobileMenu = document.getElementById("closeSidenav")

humburgerIcon.addEventListener("click",function(){
    sidenav.style.left= "0%"
    sidenav.style.transition = "1s"
})
closeMobileMenu.addEventListener("click",function(){
    sidenav.style.left = "-50%"
    
 })