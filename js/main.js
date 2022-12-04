let IconMenu = document.querySelector("#openMenu");
let menu = document.querySelector(".menu");

IconMenu.onclick = () =>{
   IconMenu.classList.toggle('fa-times')
   menu.classList.toggle('active')
}
let header = document.querySelector("#header");
window.onscroll = function () {
   // console.log(this.scrollY);
   if(this.scrollY >= 200){
      header.classList.add("addbg")
   }else{
      header.classList.remove("addbg")
   }
}

var swiper = new Swiper(".home-slider", {
   spaceBetween: 0,
   centeredSlides: true,
   autoplay: {
     delay: 5000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
 loop:true,
 });