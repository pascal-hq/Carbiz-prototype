/**
 * ==========================================
 * VEHICLE CARD COMPONENT
 * ==========================================
 */
function formatPrice(price) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 0
    }).format(price);
}
function createVehicleCard(vehicle) {
    return `
        <article class="vehicle-card content-card">
            <img
                src="../images/${vehicle.image}"
                alt="${vehicle.make} ${vehicle.model}"
                class="vehicle-image">
            <div class="card-body">
                <h3>
                    ${vehicle.make} ${vehicle.model}
                </h3>
                <div class="badge-group">
                    <span class="badge">
                        ${vehicle.year}
                    </span>
                    <span class="badge">
                        ${vehicle.transmission}
                    </span>
                    <span class="badge">
                        ${vehicle.fuel}
                    </span>
                    <span class="badge">
                        ${vehicle.mileage.toLocaleString()} km
                    </span>
                </div>
                <h4>
                    ${formatPrice(vehicle.price)}
                </h4>
                <a
                    href="vehicle-details.html?slug=${vehicle.slug}"
                    class="btn btn-primary">
                    View Details
                </a>
            </div>
        </article>
    `;
}