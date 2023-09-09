function incrementCounter() {
    const itemquantity = parseInt($("#Quantity-item").val());
    const counterElement = document.getElementById('counter');
    counterElement.textContent = itemquantity  ; // Update the displayed value
}

const incrementButton = document.getElementById('incrementButton');

incrementButton.addEventListener('click', () => {
    incrementCounter();
});



let Value = 0;


function increase(){
    Value += 1;
    const Counter =document.getElementById("wish");
    Counter.textContent =  Value ;
}

const incrementBtn = document.getElementById("wishButton");

incrementBtn.addEventListener('click' , ()=>{
    increase();
});
