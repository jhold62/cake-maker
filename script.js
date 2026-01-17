const cake = document.getElementById('cake-base');

function setShape(shape) {
    // Keep the color, change the shape
    const currentFlavor = cake.className.split(' ').find(c => ['guava', 'pear', 'avocado', 'yucca', 'sarsaparilla'].includes(c));
    cake.className = shape + ' ' + currentFlavor;
}

function setFlavor(flavor) {
    // Keep the shape, change the color
    const currentShape = cake.className.split(' ')[0];
    cake.className = currentShape + ' ' + flavor;
}

function addTopping(emoji) {
    const topping = document.createElement('div');
    topping.innerText = emoji;
    topping.className = 'topping-item';
    
    // Set random position initially
    topping.style.left = (Math.random() * 200 + 50) + 'px';
    topping.style.top = (Math.random() * 200 + 50) + 'px';

    // Simple Drag and Drop
    topping.onmousedown = function(event) {
        let shiftX = event.clientX - topping.getBoundingClientRect().left;
        let shiftY = event.clientY - topping.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            topping.style.left = pageX - cake.parentElement.offsetLeft - shiftX + 'px';
            topping.style.top = pageY - cake.parentElement.offsetTop - shiftY + 'px';
        }

        function onMouseMove(event) { moveAt(event.pageX, event.pageY); }
        document.addEventListener('mousemove', onMouseMove);

        topping.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            topping.onmouseup = null;
        };
    };

    document.querySelector('.canvas').appendChild(topping);
}
