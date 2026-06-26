/**
 * ==========================================
 * IMAGE GALLERY
 * ==========================================
 */
document.addEventListener("click", function(event){
    if(!event.target.classList.contains("gallery-image")){
        return;
    }
    const mainImage = document.getElementById("main-image");
    mainImage.src = event.target.src;
});