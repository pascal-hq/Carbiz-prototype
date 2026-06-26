/**
 * ==========================================
 * VEHICLE CARD COMPONENT
 * ==========================================
 */
/**
 * Format price as Kenyan Shillings
 */
function formatPrice(price) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 0
    }).format(price);
}
/**
 * Generate a vehicle card
 */
function createVehicleCard(vehicle) {
    // Detect whether we're inside the /pages folder
    const inPagesFolder = window.location.pathname.includes("/pages/");
    // Correct image path
    const imagePath = inPagesFolder
        ? `../images/${vehicle.image}`
        : `images/${vehicle.image}`;
    // Correct vehicle details link
    const detailsLink = inPagesFolder
        ? `vehicle-details.html?slug=${vehicle.slug}`
        : `pages/vehicle-details.html?slug=${vehicle.slug}`;
    // Featured badge
    const featuredBadge = vehicle.featured
        ? `<span class="featured-badge">Featured</span>`
        : "";
    return `
        <article class="vehicle-card content-card">
            <div class="vehicle-image-wrapper">
                ${featuredBadge}
                <img
                    src="${imagePath}"
                    alt="${vehicle.make} ${vehicle.model}"
                    class="vehicle-image"
                    loading="lazy">
            </div>
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
                </div>
                <p class="vehicle-specs">
                    ${vehicle.engine} •
                    ${vehicle.drivetrain} •
                    ${vehicle.mileage.toLocaleString()} km
                </p>
                <h4 class="vehicle-price">
                    ${formatPrice(vehicle.price)}
                </h4>
                <a
                    href="${detailsLink}"
                    class="btn btn-primary">
                    View Details
                </a>
            </div>
        </article>
    `;
}