/**
 * ==========================================
 * VEHICLES PAGE
 * ==========================================
 */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("vehicle-grid");
    if (!container) return;
    container.innerHTML = "";
    vehicles.forEach(vehicle => {
        container.innerHTML += createVehicleCard(vehicle);
    });
});