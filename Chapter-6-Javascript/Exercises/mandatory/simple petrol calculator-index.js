// script.js
document.addEventListener("DOMContentLoaded", function() {
    const petrolCostInput = document.getElementById("petrolCost");
    const litersPurchasedInput = document.getElementById("litersPurchased");
    const calculateBtn = document.getElementById("calculateBtn");
    const totalCostDisplay = document.getElementById("totalCost");

    // Event listener for the calculate button
    calculateBtn.addEventListener("click", function() {
        const petrolCost = parseFloat(petrolCostInput.value);
        const litersPurchased = parseFloat(litersPurchasedInput.value);

        // Calculate total cost
        const totalCost = petrolCost * litersPurchased;

        // Display total cost
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
});
