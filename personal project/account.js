function create(){
const firstname= document.getElementById("First-Name").value;
const lastname= document.getElementById("last-name").value;
const email= document.getElementById("email").value;
const password= document.getElementById("password").value;
const message = document.getElementById("message");



function setCookie(name,value,days){
    const expire = new Date();
    expire.setDate(expire.getDate()+ (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expire.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}


if(firstname || lastname || email || password){
    setCookie('firstname', firstname, 365);
    setCookie('lastname', lastname, 365);
    setCookie('email', email, 365);
    setCookie('password', password, 365);

    message.textContent= "Account created "
}else{
    message.textContent = "Fill Up The Fields"
}


setCookie('firstname', firstname, 365);
setCookie('lastname', lastname, 365);
setCookie('email', email, 365);
setCookie('password', password, 365);



}






