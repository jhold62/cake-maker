const cakeBase = document.getElementById('cake-base');
const cakeSide = document.getElementById('cake-side');
const statusText = document.getElementById('status');
let activeTopping = null;

function setShape(shape) {
    // Keep color, update shape on both top and 3D side
    const currentFlavor = Array.from(cakeBase.classList).find(c => 
        ['guava', 'pear', 'avocado', 'yucca', 'sarsaparilla'].includes(c)
    ) || 'guava';
    
    cakeBase.className = `${shape} ${currentFlavor}`;
    cakeSide.className = `${shape}`; // Side stays dark for 3D effect
}

function setFlavor(flavor) {
    const currentShape = cakeBase.classList[0];
    cakeBase.className = `${currentShape} ${flavor}`;
}

function selectTopping(emoji) {
    activeTopping = emoji;
    statusText.innerText = `Topping: ${emoji} (Click the cake!)`;
    statusText.style.color = "#ff6b6b";
}

function placeTopping(e) {
    if (!activeTopping) {
        alert("Please select a topping from the left first!");
        return;
    }

    const topping = document.createElement('div');
    topping.innerText = activeTopping;
    topping.className = 'topping-item';
    
    // Calculate click position inside the cake
    const rect = cakeBase.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    topping.style.left = `${x}px`;
    topping.style.top = `${y}px`;

    cakeBase.appendChild(topping);
}

function clearToppings() {
    cakeBase.innerHTML = '';
}
