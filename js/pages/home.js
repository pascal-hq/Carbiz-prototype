/**
 * ==========================================
 * HOME PAGE
 * ==========================================
 */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("featured-vehicles");
    if (!container) return;
    const featured = vehicles.filter(vehicle => vehicle.featured);
    featured.forEach(vehicle => {
        container.innerHTML += createVehicleCard(vehicle);
    });
});