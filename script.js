var login = document.querySelector(".Login");
var signup = document.querySelector(".SignUp");
var login_clicked = document.querySelector(".login_clicked");
var signup_clicked = document.querySelector(".signup_clicked");
var login_submit = document.querySelector(".login-submit");
var signUp_submit = document.querySelector(".signUp-submit");
var delivary = document.querySelector(".delivary");
var diningOut = document.querySelector(".dining_out");
var nightLife = document.querySelector(".night_life");
var main = document.querySelector(".main");
var pages = document.querySelector(".pages");
var delivaryPage = document.querySelector(".delivary_page");
var diningOutPage = document.querySelector(".dining_out_page");
var nightOutPage = document.querySelector(".night_life_page");
var pageOut = document.querySelector(".pageOut");
var pageOut2 = document.querySelector(".pageOut2");
var pageOut3 = document.querySelector(".pageOut3");


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
  login_clicked.style.display = "none";
});

signUp_submit.addEventListener("click", (e) => {
    e.preventDefault();
    var username = document.querySelector("#signup-username").value.trim();
    var email = document.querySelector("#signup-email").value.trim();
    var password = document.querySelector("#signup-password").value.trim();
    var confirmPassword = document.querySelector("#confirm-password").value.trim();

    if (!username && !email && !password && !confirmPassword) {
        alert("Please fill in all the fields.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        alert("Signup Successful!");
        console.log(username , " , ", email , " , ", password);
    }
  signup_clicked.style.display = "none";
});

delivary.addEventListener("click", () => {
    console.log("Deliveries selected");
    main.style.display = "none";
    pages.style.display = "block";
    delivaryPage.style.display = "block";
    diningOutPage.style.display = "none";
    nightOutPage.style.display = "none";
});

diningOut.addEventListener("click", () => {
    console.log("dining out is selected");
    main.style.display = "none";
    pages.style.display = "block";
    delivaryPage.style.display = "none";
    diningOutPage.style.display = "block";
    nightOutPage.style.display = "none";
});

nightLife.addEventListener("click", () => {
    console.log("night out selected");
    main.style.display = "none";
    pages.style.display = "block";
    delivaryPage.style.display = "none";
    diningOutPage.style.display = "none";
    nightOutPage.style.display = "block";
});

pageOut.addEventListener("click",()=>{
    pages.style.display = "none";
    main.style.display = "block";
})

pageOut2.addEventListener("click",()=>{
    pages.style.display = "none";
    main.style.display = "block";
})

pageOut3.addEventListener("click",()=>{
    pages.style.display = "none";
    main.style.display = "block";
})
