/**
 * ==========================================
 * VEHICLES PAGE
 * ==========================================
 */
let filteredVehicles = [...vehicles];
const vehicleGrid = document.getElementById("vehicle-grid");
const vehicleCount = document.getElementById("vehicle-count");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const fuelFilter = document.getElementById("fuel-filter");
const sortFilter = document.getElementById("sort-filter");
function renderVehicles(list) {
    vehicleGrid.innerHTML = "";
    list.forEach(vehicle => {
        vehicleGrid.innerHTML += createVehicleCard(vehicle);
    });
    vehicleCount.textContent = `${list.length} Vehicle(s) Found`;
}
function applyFilters() {
    filteredVehicles = vehicles.filter(vehicle => {
        const search = searchInput.value.toLowerCase();
        const matchesSearch =
            vehicle.make.toLowerCase().includes(search) ||
            vehicle.model.toLowerCase().includes(search);
        const matchesCategory =
            categoryFilter.value === "" ||
            vehicle.category === categoryFilter.value;
        const matchesFuel =
            fuelFilter.value === "" ||
            vehicle.fuel === fuelFilter.value;
        return matchesSearch &&
               matchesCategory &&
               matchesFuel;
    });
    switch(sortFilter.value){
        case "price-low":
            filteredVehicles.sort((a,b)=>a.price-b.price);
            break;
        case "price-high":
            filteredVehicles.sort((a,b)=>b.price-a.price);
            break;
        case "year":
            filteredVehicles.sort((a,b)=>b.year-a.year);
            break;
    }
    renderVehicles(filteredVehicles);
}
document.addEventListener("DOMContentLoaded", () => {
    renderVehicles(vehicles);
    searchInput.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);
    fuelFilter.addEventListener("change", applyFilters);
    sortFilter.addEventListener("change", applyFilters);
});