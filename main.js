// برای باز کردن دکمه منو
let btnMenu =document.querySelector(".menu-button");
let subMenu = document.querySelector(".sub-menu");
let btnCloseMenu = document.querySelector(".btn-close-menu");
let blurMenuBackground = document.querySelector(".submenu-blur");

btnMenu.addEventListener("click",()=>{
    subMenu.classList.add("show");
    blurMenuBackground.classList.add("show")
});

btnCloseMenu.addEventListener("click",()=>{
    subMenu.classList.remove("show");
    blurMenuBackground.classList.remove("show");
});
