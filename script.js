var login = document.querySelector(".Login");
var signup = document.querySelector(".SignUp");
var login_clicked = document.querySelector(".login_clicked");
var signup_clicked = document.querySelector(".signup_clicked");
var login_submit = document.querySelector(".login-submit");
var signUp_submit = document.querySelector(".signUp-submit");

login.addEventListener("click", () => {
    console.log("Login clicked");
    if (login_clicked.style.display === "block") {
        login_clicked.style.display = "none";
    } else {
        login_clicked.style.display = "block";
        signup_clicked.style.display = "none";
    }
});

signup.addEventListener("click", () => {
    console.log("Signup clicked");
    if (signup_clicked.style.display === "block") {
        signup_clicked.style.display = "none";
    } else {
        signup_clicked.style.display = "block";
        login_clicked.style.display = "none";
    }
});

login_submit.addEventListener("click", (e) => {
    e.preventDefault();
    var username = document.querySelector("#login-username").value.trim();
    var password = document.querySelector("#login-password").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
    } else {
        alert("Login Successful!");
        console.log(username, " , " , password);
    }
});

signUp_submit.addEventListener("click", (e) => {
    e.preventDefault();
    var username = document.querySelector("#signup-username").value.trim();
    var email = document.querySelector("#signup-email").value.trim();
    var password = document.querySelector("#signup-password").value.trim();
    var confirmPassword = document.querySelector("#confirm-password").value.trim();

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all the fields.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        alert("Signup Successful!");
        console.log(username , " , ", email , " , ", password);
    }
});
