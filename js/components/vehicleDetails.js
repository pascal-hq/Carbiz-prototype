/**
 * ==========================================
 * VEHICLE DETAILS COMPONENT
 * ==========================================
 */
function createVehicleDetails(vehicle) {
    const badges = `
        <div class="badge-group">
            <span class="badge">${vehicle.year}</span>
            <span class="badge">${vehicle.transmission}</span>
            <span class="badge">${vehicle.fuel}</span>
            <span class="badge">${vehicle.mileage.toLocaleString()} km</span>
        </div>
    `;
    const gallery = vehicle.gallery.map(image => `
        <img
            src="../images/${image}"
            alt="${vehicle.make} ${vehicle.model}"
            class="gallery-image">
    `).join("");
    const features = vehicle.features.map(feature => `
        <span class="feature-item">
            ${feature}
        </span>
    `).join("");
    return `
        <div class="vehicle-details-layout">
            <div>
                <img
                    id="main-image"
                    class="main-vehicle-image"
                    src="../images/${vehicle.image}"
                    alt="${vehicle.make} ${vehicle.model}">
                <div class="gallery">
                    ${gallery}
                </div>
            </div>
            <div class="content-card">
                <div class="card-body">
                    <h2>
                        ${formatPrice(vehicle.price)}
                    </h2>
                    ${badges}
                    <br>
                    <a href="contact.html"
                       class="btn btn-primary">
                        Enquire Now
                    </a>
                    <br><br>
                    <a href="#"
                       class="btn btn-secondary">
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
        <section class="page-content">
            <div class="content-card">
                <div class="card-body">
                    <h2>
                        Description
                    </h2>
                    <p>
                        ${vehicle.description}
                    </p>
                </div>
            </div>
        </section>
        <section class="page-content">
            <h2 class="section-title">
                Specifications
            </h2>
            <div class="spec-list">
                <div class="spec-row">
                    <span class="spec-label">Make</span>
                    <span class="spec-value">${vehicle.make}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Model</span>
                    <span class="spec-value">${vehicle.model}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Year</span>
                    <span class="spec-value">${vehicle.year}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Mileage</span>
                    <span class="spec-value">${vehicle.mileage.toLocaleString()} km</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Fuel</span>
                    <span class="spec-value">${vehicle.fuel}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Transmission</span>
                    <span class="spec-value">${vehicle.transmission}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Engine</span>
                    <span class="spec-value">${vehicle.engine}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Drive</span>
                    <span class="spec-value">${vehicle.drivetrain}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Colour</span>
                    <span class="spec-value">${vehicle.colour}</span>
                </div>
            </div>
        </section>
        <section class="page-content">
            <h2 class="section-title">
                Features
            </h2>
            <div class="feature-list">
                ${features}
            </div>
        </section>
    `;
}