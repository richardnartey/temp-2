// sticky header
window.onscroll = function() {stickyFunction()};

var header = document.getElementById("mainNav");
var sticky = header.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// mobile device navigation
const primaryNav = document.getElementById("siteNav");
const mobileToggleOpen = document.getElementById("mobileToggleOpen");
const mobileToggleClose = document.getElementById("mobileToggleClose");
const visibility = primaryNav.getAttribute("data-visible");

mobileToggleOpen.addEventListener("click", () => {
   
   if (visibility === "false"){
       primaryNav.setAttribute("data-visible", true);
       mobileToggleOpen.setAttribute("aria-expanded", true);
   }
}); 

mobileToggleClose.addEventListener("click", () => {
  const nvisibility = primaryNav.getAttribute("data-visible");
  if (nvisibility === "true"){
    primaryNav.setAttribute("data-visible", false);
    mobileToggleOpen.setAttribute("aria-expanded", false);
}

});



// testimonial slide
var controlButton = document.getElementsByClassName("control-btn");
var testimonialSlide = document.getElementById("testimonialSlide");

controlButton[0].onclick = function() {
  testimonialSlide.style.transform = "translateX(-100%)"
}

controlButton[1].onclick = function() {
  testimonialSlide.style.transform = "translateX(100%)"
}