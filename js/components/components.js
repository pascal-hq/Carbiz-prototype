/**
 * ==========================================
 * COMPONENT LOADER
 * ==========================================
 */
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
    } catch (err) {
        console.error("Component load failed:", file, err);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", basePath + "navbar.html");
    loadComponent("footer", basePath + "footer.html");
});