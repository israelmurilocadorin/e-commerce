function login() {

    var done = 0;
    var email = document.getElementsById('user_email')[0].value;
    email = email.toLowerCase();

    var password = document.getElementsById('user_password')[0].value;
    password = password.toLowerCase();

    if(email == "1" && password == "1") {
        window.location = "/Home.vue";
        done = 1;
    }
    
    if(done == 0) {
        alert("Dados incorretos"); 
    }
}