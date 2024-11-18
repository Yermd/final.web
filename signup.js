document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        localStorage.setItem("username", username);
        localStorage.setItem("email", email); // Сохраняем почту
        localStorage.setItem("password", password);

        if (!username || !email || !password) {
            alert("All fields are required!");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(user => user.email === email)) {
            alert("This email is already registered. Please log in.");
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");
        window.location.href = "login.html";
    });
});
