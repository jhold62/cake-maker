I'm// 1. Select the cake element
const cake = document.getElementById('cake-base');

// 2. Define the Shapes
function setShape(shapeName) {
    // Reset classes but keep the current flavor
    // This looks at the current class list and saves the flavor
    let currentFlavor = 'vanilla'; // Default
    if (cake.classList.contains('chocolate')) currentFlavor = 'chocolate';
    if (cake.classList.contains('strawberry')) currentFlavor = 'strawberry';

    // Apply new shape + old flavor
    cake.className = ''; // Wipe all classes
    cake.classList.add(shapeName);
    cake.classList.add(currentFlavor);
}

// 3. Define the Flavors
function setFlavor(flavorName) {
    // Reset classes but keep the current shape
    let currentShape = 'circle'; // Default
    if (cake.classList.contains('square')) currentShape = 'square';
    if (cake.classList.contains('sheet')) currentShape = 'sheet';

    // Apply new flavor + old shape
    cake.className = ''; // Wipe all classes
    cake.classList.add(currentShape);
    cake.classList.add(flavorName);
}
