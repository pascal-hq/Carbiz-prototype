async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) return;
    try {
        const response = await fetch(file);
        const html = await response.text();
        element.innerHTML = html;
    }
    catch (error) {
        console.error(`Failed to load ${file}`, error);
    }
}
loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");