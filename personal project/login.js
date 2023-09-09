function auth(){
    const password = $("#password").val();

    if (password === "Admin123" || password === "admin123"){
        window.location='main.html';
        alert("welcome");
    }else{
        alert('wrongpassword')
    };
}



function login(){
    const loginemail = document.getElementById("Email").value;
    const loginpassword = document.getElementById("Password").value;
    const message = document.getElementById("message");
    const accountname = document.getElementById("account-name");

    const storedEmail = getCookie('email');
    const storedPassword = getCookie('password');
    const storedName = getCookie('firstname')

    if(loginemail === storedEmail  && loginpassword === storedPassword){
        message.textContent = "Login Successful"
        window.location = "main.html"
        accountname.textContent = 'welcome,'+ storedName;
    }else{
        message.textContent = "Login Failed"
    }



    function getCookie(name) {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return "";
    }
}