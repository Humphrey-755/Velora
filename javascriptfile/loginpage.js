const email = document.querySelector(".email-control");
const password = document.querySelector(".form-control");
const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (email.value === "titanhunter755@gmail.com" && password.value === "maduka12345@") {
    window.location.href = "dashboard.html";
} else {
    alert("Incorrect email or password");
}
});