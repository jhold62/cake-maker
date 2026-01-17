const cake = document.getElementById('cake');

function addTopping(type) {
    const topping = document.createElement('div');
    topping.className = 'topping';
    topping.innerHTML = type; // e.g., '🍓' or '🕯️'
    topping.style.left = '125px';
    topping.style.top = '125px';
    
    // Make it draggable
    topping.onmousedown = function(event) {
        let shiftX = event.clientX - topping.getBoundingClientRect().left;
        let shiftY = event.clientY - topping.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            topping.style.left = pageX - cake.offsetLeft - shiftX + 'px';
            topping.style.top = pageY - cake.offsetTop - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        topping.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            topping.onmouseup = null;
        };
    };

    cake.appendChild(topping);
}
