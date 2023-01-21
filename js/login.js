
const email = document.getElementById('u_email').value = "admin@gmail.com"
const password = document.getElementById('u_password').value = "adminadmin";
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
function login(form) {
    if(email == ''){
        alert("Please enter User Name");
    }else if(password == ''){
        alert("enter the password");
    }else if(!filter.test(email)){
        alert("enter valid email id");
    }else if(password.length < 8 || password.length > 10){
        alert("Password min 8 and max length is 10.");
    }else{
//        alert('Thank You for Login & You are Redirecting to Campuslife Website');
//        window.location = "./users/index.html";
        window.open('./users/index.html');
    }
}
//function check(form){
// if(form.u_email.value == "admin@gmail.com" && form.u_password.value == "mypassword"){
//    window.open('./user/index.html');
//  }else{
//   alert("Error Password or Username");
//  }
//}







const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');
const container = document.getElementById('container');

signUp.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signIn.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
