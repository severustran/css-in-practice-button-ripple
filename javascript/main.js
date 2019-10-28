document.addEventListener("DOMContentLoaded", function (){
    let button1 = document.querySelector('button:nth-child(1)');

    button1.addEventListener('click', function(event) {
       let ripple1 = document.createElement('div');
        let x, y;
        x = event.clientX - button1.offsetLeft;
        y = event.clientY - button1.offsetTop;

        ripple1.classList.add('ripple1');
        ripple1.style.left = x + "px";
        ripple1.style.top = y + "px";
       button1.appendChild(ripple1);
    });
});