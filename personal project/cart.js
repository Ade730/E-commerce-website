// const Addcart = $("#Addcart");
 let counterValue = 0; // Initial counter value

function incrementCounter() {
    counterValue += 1; // Increment the counter value
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counterValue; // Update the displayed value
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



const storedName  = getCookie("firstname")
if(storedName){
    const username = document.getElementById("Name");
    username.textContent = `welcome, ${storedName}`;
}