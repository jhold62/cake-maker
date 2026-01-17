const cake = document.getElementById('cake-base');
const hint = document.getElementById('selected-hint');
let selectedTopping = null;

function setShape(shape) {
    // We wipe classes but restore flavor
    const flavors = ['guava', 'pear', 'avocado', 'yucca', 'sarsaparilla'];
    const currentFlavor = Array.from(cake.classList).find(c => flavors.includes(c)) || 'guava';
    cake.className = '';
    cake.classList.add(shape, currentFlavor);
}

function setFlavor(flavor) {
    const currentShape = cake.classList[0]; // Gets 'indy', 'film', etc.
    cake.className = '';
    cake.classList.add(currentShape, flavor);
}

// 1. Select the topping from sidebar
function selectTopping(emoji) {
    selectedTopping = emoji;
    hint.innerText = `Ready to place: ${emoji}`;
    hint.style.color = "#ff9eb5";
}

// 2. Click on the cake to drop it
function placeTopping(event) {
    if (!selectedTopping) {
        alert("Pick a topping from the left first!");
        return;
    }

    const topping = document.createElement('div');
    topping.innerText = selectedTopping;
    topping.className = 'topping-item';
    
    // Position it exactly where you clicked
    const rect = cake.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    topping.style.left = x + "px";
    topping.style.top = y + "px";

    cake.appendChild(topping);
}
