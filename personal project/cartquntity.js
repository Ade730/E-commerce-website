// const price = document.getElementById("price");
const message = document.getElementById("total-cart");
const messagess = document.getElementById("total-cart1");
const messages = document.getElementById("total-cart2");


function cart(){
    const cartquantity = parseInt($("#quantity-carts").val());
    const price =500;
    const newtotal = cartquantity * price;
   message.textContent =`$${newtotal}`
}


function cart1(){
    const cartquantity = parseInt($("#quantity-carts").val());
    const price =500;
    const newtotal = cartquantity * price;
   messagess.textContent =`$${newtotal}`
}


function cart2(){
    const cartquantity = parseInt($("#quantity-carts").val());
    const price =500;
    const newtotal = cartquantity * price;
   messages.textContent =`$${newtotal}`
}