const isInPages = window.location.pathname.includes("/pages/");
const basePath = isInPages ? "../components/" : "components/";
async function loadComponent(id, file) {
    try {
        const res = await fetch(file);
        if (!res.ok) {
            throw new Error("Failed to load " + file);
        }
        const html = await res.text();
        document.getElementById(id).innerHTML = html;
        return true;
    } catch (err) {
        console.error("Component load failed:", file, err);
        return false;
    }
}
function initMobileMenu() {
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (!menuButton || !navLinks) return;
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}
document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("navbar", basePath + "navbar.html");
    await loadComponent("footer", basePath + "footer.html");
    // IMPORTANT: run AFTER navbar is injected
    initMobileMenu();
});