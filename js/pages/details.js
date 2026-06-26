/**
 * ==========================================
 * VEHICLE DETAILS PAGE
 * ==========================================
 */
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const vehicle = vehicles.find(v => v.slug === slug);
    if (!vehicle) {
        document.getElementById("vehicle-details").innerHTML = `
            <div class="content-card">
                <div class="card-body">
                    <h2>
                        Vehicle Not Found
                    </h2>
                    <p>
                        The requested vehicle does not exist.
                    </p>
                </div>
            </div>
        `;
        return;
    }
    document.title = `${vehicle.make} ${vehicle.model} | CarBiz Motors`;
    document.getElementById("vehicle-title").textContent =
        `${vehicle.make} ${vehicle.model}`;
    document.getElementById("breadcrumb-title").textContent =
        `${vehicle.make} ${vehicle.model}`;
    document.getElementById("vehicle-details").innerHTML =
        createVehicleDetails(vehicle);
    const related = vehicles
        .filter(v =>
            v.category === vehicle.category &&
            v.id !== vehicle.id
        )
        .slice(0, 3);
    const relatedContainer = document.getElementById("related-vehicles");
    related.forEach(car => {
        relatedContainer.innerHTML += createVehicleCard(car);
    });
});