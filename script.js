let topBannar = document.getElementById("topBannerAd")
let topBannarCloseButton = document.getElementById("topBannerCloseBtn")


topBannarCloseButton.addEventListener("click",function(){
    topBannar.style.display="none"
})


const container = document.querySelector(".imageContainer")
let rightBtn = document.getElementById("rightArrow")
let leftBtn = document.getElementById("leftArrow")

let image1 = document.getElementById("imgOne")
let image2 = document.getElementById("imageTwo")
const imagList= ["1","2","3","4"]

let index = 0




rightBtn.addEventListener("click",function(){
   

    image1.style.marginLeft = "-1130px"
    image1.style.transition = "1s"
   
})
leftBtn.addEventListener("click",function(){
    console.log("left")
    image1.style.marginLeft="0px"

})

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