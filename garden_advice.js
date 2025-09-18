


// Gardening advice data
const SEASONS = {
  Spring: ["March", "April", "May"],
  Summer: ["June", "July", "August"],
  Autumn: ["September", "October", "November"],
  Winter: ["December", "January", "February"]
};

const SEASON_ADVICE = {
  Spring: "Spring is great for planting vegetables and flowers.",
  Summer: "Water deeply and harvest your crops regularly.",
  Autumn: "Prepare your soil and compost fallen leaves.",
  Winter: "Protect your plants from frost and plan ahead."
};

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


/**
 * Get gardening advice for a given month.
 * @param {string} month - The name of the month (e.g., "March").
 * @returns {string} Gardening advice for the month, or an error message if input is invalid.
 */
function getAdviceByMonth(month) {
  if (typeof month !== 'string' || !month.trim()) {
    return "Invalid input: Please provide a valid month name.";
  }
  const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  return adviceByMonth[formattedMonth] || "No advice available for this month.";
}



/**
 * Get gardening advice for a given season or month.
 * @param {string} input - The name of the season (e.g., "Winter") or month (e.g., "March").
 * @returns {string} Gardening advice for the season, or an error message if input is invalid.
 */
function getAdviceBySeason(input) {
  if (typeof input !== 'string' || !input.trim()) {
    return "Invalid input: Please provide a valid season or month name.";
  }
  // Normalize input
  const formattedInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  // Check if input is a season
  if (SEASONS[formattedInput]) {
    return SEASON_ADVICE[formattedInput] || "No advice available for this season.";
  }
  // Check if input is a month and find its season
  for (const [season, months] of Object.entries(SEASONS)) {
    if (months.includes(formattedInput)) {
      return SEASON_ADVICE[season];
    }
  }
  return "No advice available for this season or month.";
}

// Example usage
console.log(getAdviceByMonth("March"));   // Expected: Plant potatoes and onions.
console.log(getAdviceBySeason("Winter")); // Expected: Protect your plants from frost and plan ahead.

// TODO: Add documentation for functions (JSDoc style comments)
// TODO: Write simple unit tests for getAdviceByMonth and getAdviceBySeason
