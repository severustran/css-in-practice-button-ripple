document.addEventListener("DOMContentLoaded", function (){
    var button1 = document.querySelector('button:nth-child(1)');
    var button2 = document.querySelector('button:nth-child(2)');
    var hover = true;

    function createRipple1(button1, event) {
        let ripple1 = document.createElement('div');
        let x, y;
        x = event.clientX - button1.offsetLeft;
        y = event.clientY - button1.offsetTop;

        ripple1.classList.add('ripple1');
        ripple1.style.left = x + "px";
        ripple1.style.top = y + "px";
        button1.appendChild(ripple1); 
        setTimeout(()=>{ripple1.remove()},1000);
    }

    function createRipple2(button2, event) {
        let ripple2 = document.createElement('div');
        let x, y;
        x = event.clientX - button2.offsetLeft;
        y = event.clientY - button2.offsetTop;

        ripple2.classList.add('ripple2');
        ripple2.style.left = x + "px";
        ripple2.style.top = y + "px";
        button2.appendChild(ripple2); 
        setTimeout(()=>{ripple2.remove()},1000);
    }

    button1.addEventListener("click", function(event){
        createRipple1(button1, event);
    });

    button1.addEventListener("mousemove", function(event){
        if(hover) {
            hover = false;
            createRipple1(button1, event);
            setTimeout(()=>{hover=true},100);
        }
    });

    button2.addEventListener("click", function(event){
        createRipple2(button2, event);
    });

    button2.addEventListener("mousemove", function(event){
        if(hover) {
            hover = false;
            createRipple2(button2, event);
            setTimeout(()=>{hover=true},100);
        }
    });
});