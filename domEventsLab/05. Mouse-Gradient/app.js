function attachGradientEvents() {
    //     Write a program that detects and displays how far along a gradient the user has moved their mouse. 
    //The result should be rounded down and displayed as a percentage inside the <div> with ID "result". 
    // Submit only the attachGradientEvents() function in judge. 
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }

    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
}