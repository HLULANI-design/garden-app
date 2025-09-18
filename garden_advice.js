
// Gardening advice data
// TODO: Replace hardcoded values with constants or configuration
const adviceByMonth = {
  January: "Prepare the soil and plan your garden for the new year.",
  February: "Start planting early vegetables indoors.",
  March: "Plant potatoes and onions.",
  April: "Great time for leafy greens like spinach and lettuce.",
  May: "Plant tomatoes, peppers, and cucumbers.",
  June: "Water plants regularly as temperatures rise.",
  July: "Harvest early crops and plant more beans.",
  August: "Keep weeds under control and water deeply.",
  September: "Plant fall crops like carrots and kale.",
  October: "Prepare beds for winter and add compost.",
  November: "Protect plants from frost and store harvested crops.",
  December: "Review your gardening year and plan for next season."
};

// Function to get advice by month
// TODO: Add validation for incorrect month input
function getAdviceByMonth(month) {
  return adviceByMonth[month] || "No advice available for this month.";
}

// Function to get advice by season
// TODO: Implement logic to group months into seasons dynamically
function getAdviceBySeason(season) {
  if (season === "Spring") {
    return "Spring is great for planting vegetables and flowers.";
  } else if (season === "Summer") {
    return "Water deeply and harvest your crops regularly.";
  } else if (season === "Autumn") {
    return "Prepare your soil and compost fallen leaves.";
  } else if (season === "Winter") {
    return "Protect your plants from frost and plan ahead.";
  } else {
    return "No advice available for this season.";
  }
}

// Example usage
console.log(getAdviceByMonth("March"));   // Expected: Plant potatoes and onions.
console.log(getAdviceBySeason("Winter")); // Expected: Protect your plants from frost and plan ahead.

// TODO: Add documentation for functions (JSDoc style comments)
// TODO: Write simple unit tests for getAdviceByMonth and getAdviceBySeason
