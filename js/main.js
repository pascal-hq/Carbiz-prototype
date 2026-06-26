/**
 * ==========================================
 * MOBILE NAVIGATION
 * ==========================================
 */
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if(menuButton){
    menuButton.addEventListener("click",()=>{
        navLinks.classList.toggle("show");
    });
}