/**
 * ==========================================
 * CAR HIRE PAGE
 * ==========================================
 */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hire-vehicles");
    if (!container) return;
    // Vehicles to showcase for hire
    const hireVehicles = vehicles.filter(vehicle =>
        [
            "toyota-prado-tx",
            "toyota-harrier",
            "toyota-land-cruiser-300",
            "mercedes-gls450",
            "toyota-vellfire"
        ].includes(vehicle.slug)
    );
    hireVehicles.forEach(vehicle => {
        container.innerHTML += createVehicleCard(vehicle);
    });
});