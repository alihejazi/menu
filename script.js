// search-box open close js code
let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("bx-search" ,"bx-x");
//   }else {
//     searchBox.classList.replace("bx-x" ,"bx-search");
//   }
// });

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".match-funding-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show-match-funding-sub-menu");
}
let moreArrow = document.querySelector(".match-funding-opportunities-sub-sub-menu-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show-match-funding-opportunities-sub-sub-menu");
}
let aboutUsArrow = document.querySelector(".about-us-arrow");
aboutUsArrow.onclick = function() {
 navLinks.classList.toggle("show-about-us-sub-menu");
}
// let resourcesArrow = document.querySelector(".resources-arrow");
// resourcesArrow.onclick = function() {
//  navLinks.classList.toggle("show-resources-sub-menu");
// }