const cake = document.getElementById('cake-base');
let activeTopping = null;

function setBaseImage(url) {
    cake.style.backgroundImage = `url('${url}')`;
}

function setFlavor(color) {
    cake.style.backgroundColor = color;
}

function selectTopping(emoji) {
    activeTopping = emoji;
}

function placeTopping(e) {
    if (!activeTopping) {
        alert("Pick a topping first!");
        return;
    }

    const topping = document.createElement('div');
    topping.innerText = activeTopping;
    topping.className = 'topping-item';

    const rect = cake.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    topping.style.left = x + "px";
    topping.style.top = y + "px";

    cake.appendChild(topping);
}
