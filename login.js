document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            alert("Invalid email or password.");
            return;
        }

        localStorage.setItem("username", user.username);
        alert("Welcome back, " + user.username + "!");
        window.location.href = "index.html";
    });
});
