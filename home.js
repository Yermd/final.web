document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const dateTimeDisplay = document.getElementById("current-date-time");
        const now = new Date();

        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hour12: false 
        };
        const formattedDateTime = now.toLocaleString('en-US', options);

        dateTimeDisplay.textContent = formattedDateTime;
    }


    updateDateTime();

    setInterval(updateDateTime, 1000);
});

// Popup form logic for feedback form (show/hide)
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('.popup-form');
    const openPopupBtn = document.querySelector('.open-popup');
    const closePopupBtn = document.querySelector('.close-popup');

    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });


    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});


document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = "0 10px";
        } else {
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null;
                item.style.padding = "0 10px";
            });

            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "10px";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openPopupButton = document.querySelector(".open-popup");
    const popupForm = document.querySelector(".popup-form");
    const closePopupButton = document.querySelector(".close-popup");
    const form = popupForm.querySelector("form");
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector("textarea");

    openPopupButton.addEventListener("click", function() {
        popupForm.style.display = "block";
    });

    closePopupButton.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popupForm) {
            popupForm.style.display = "none";
        }
    });

    // Form validation
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (emailInput.value.trim() === "") {
            alert("Please enter your email address.");
            return; 
        }

        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            return; 
        }

        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            return; 
        }

        alert("Thank you for your feedback!");
        form.submit();
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Star Rating Logic
    const stars = document.querySelectorAll('.star'); // Select all star elements
    const ratingMessage = document.getElementById('rating-message'); // Select the message element

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const selectedRating = this.getAttribute('data-value'); // Get the value of the clicked star

            // Update the color of the stars based on the selected rating
            stars.forEach(s => {
                s.style.color = s.getAttribute('data-value') <= selectedRating ? 'gold' : 'grey';
            });

            // Update the message displayed on the page
            ratingMessage.textContent = `You rated ${selectedRating} star${selectedRating > 1 ? 's' : ''}.`;
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreContent = document.getElementById("more-content");

    readMoreBtn.addEventListener("click", function() {
        if (moreContent.style.display === "none") {
            moreContent.style.display = "inline";
            readMoreBtn.textContent = "Read Less";
        } else {
            moreContent.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });
});

// Select the reset button
const resetBtn = document.getElementById('reset-btn');

// Add event listener to reset button to clear form inputs
resetBtn.addEventListener('click', function() {
    document.querySelectorAll('.popup-form input, .popup-form textarea').forEach(input => {
        input.value = '';
    });
});

// Select all nav links in the navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Variable to track the currently focused link
let currentFocusedIndex = 0;

// Set initial focus to the first link
navLinks[currentFocusedIndex].focus();

// Event listener for keydown on the document
document.addEventListener('keydown', function(event) {
    // Check if the left or right arrow key is pressed
    if (event.key === 'ArrowRight') {
        // Move focus to the next link
        currentFocusedIndex = (currentFocusedIndex + 1) % navLinks.length;
        navLinks[currentFocusedIndex].focus();
        event.preventDefault(); // Prevent default scrolling behavior
    } else if (event.key === 'ArrowLeft') {
        // Move focus to the previous link
        currentFocusedIndex = (currentFocusedIndex - 1 + navLinks.length) % navLinks.length;
        navLinks[currentFocusedIndex].focus();
        event.preventDefault(); // Prevent default scrolling behavior
    }
});

// JavaScript to handle multi-step form navigation
const steps = document.querySelectorAll('.form-step');
let currentStep = 0;

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');

// Callback function to update the form steps based on user actions
function updateFormStep(step) {
    steps.forEach((formStep, index) => {
        formStep.style.display = index === step ? 'block' : 'none';
    });
    
    // Update button visibility
    prevBtn.style.display = step > 0 ? 'inline' : 'none';
    nextBtn.style.display = step < steps.length - 1 ? 'inline' : 'none';
    submitBtn.style.display = step === steps.length - 1 ? 'inline' : 'none';
}

// Event listener for "Next" button
nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        if (currentStep === steps.length - 1) {
            // Display confirmation data on the last step
            document.getElementById('confirmName').textContent = document.getElementById('recipeName').value;
            document.getElementById('confirmCategory').textContent = document.getElementById('category').value;
            document.getElementById('confirmIngredients').textContent = document.getElementById('ingredients').value;
            document.getElementById('confirmInstructions').textContent = document.getElementById('instructions').value;
        }
        updateFormStep(currentStep);
    }
});

// Event listener for "Back" button
prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateFormStep(currentStep);
    }
});

// Initial form step display
updateFormStep(currentStep);

// Handle form submission
document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Handle form submission logic here, e.g., save data or display a success message
    alert('Thank you, we will consider your recipe!!!');
    
    // Optionally reset the form and return to the first step
    this.reset();
    currentStep = 0;
    updateFormStep(currentStep);
});

const recipes = [
    {
        title: 'Spaghetti Carbonara',
        image: 'images/spaghetti-carbonara.jpeg',
        description: 'A creamy Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
        category: 'Pasta'
    },
    {
        title: 'Chicken Tikka Masala',
        image: 'images/Chicken-Tikka-Masala.jpeg',
        description: 'Marinated chicken cooked in a spiced curry sauce, served with rice or naan.',
        ingredients: ['Chicken', 'Yogurt', 'Tomato Puree', 'Garam Masala', 'Cream'],
        category: 'Chicken'
    },
    {
        title: 'Beef Stroganoff',
        image: 'images/beefstroganoff.png',
        description: 'Tender strips of beef cooked in a creamy sauce with mushrooms and onions.',
        ingredients: ['Beef', 'Mushrooms', 'Onions', 'Sour Cream', 'Garlic'],
        category: 'Beef'
    },
    {
        title: 'Caprese Salad',
        image: 'images/Caprese-Salad-main-1.jpg.webp',
        description: 'A fresh Italian salad made with mozzarella, tomatoes, basil, olive oil, and balsamic vinegar.',
        ingredients: ['Mozzarella Cheese', 'Tomatoes', 'Fresh Basil', 'Olive Oil', 'Balsamic Vinegar'],
        category: 'Vegetarian'
    },
    {
        title: 'Shakshuka',
        image: 'images/shakshuka.webp',
        description: 'A North African dish of poached eggs in a spicy tomato and bell pepper sauce, often served with bread.',
        ingredients: ['Eggs', 'Tomatoes', 'Bell Peppers', 'Onions', 'Spices'],
        category: 'Vegetarian'
    },
    {
        title: 'Teriyaki Salmon',
        image: 'images/salmon.jpeg',
        description: 'Grilled salmon fillet glazed with a sweet and savory teriyaki sauce, served with rice and vegetables.',
        ingredients: ['Salmon Fillet', 'Teriyaki Sauce', 'Rice', 'Vegetables', 'Sesame Seeds'],
        category: 'Fish'
    },
    {
        title: 'Tacos al Pastor',
        image: 'images/tacos.webp',
        description: 'Mexican tacos made with marinated pork, pineapple, onions, and cilantro.',
        ingredients: ['Pork', 'Pineapple', 'Onions', 'Cilantro', 'Corn Tortillas'],
        category: 'Beef'
    },
    {
        title: 'Pad Thai',
        image: 'images/pad-thai.jpeg',
        description: 'A popular Thai stir-fried noodle dish made with rice noodles, shrimp or chicken, peanuts, and bean sprouts.',
        ingredients: ['Rice Noodles', 'Shrimp or Chicken', 'Eggs', 'Peanuts', 'Bean Sprouts'],
        category: 'Pasta'
    },
    {
        title: 'Moussaka',
        image: 'images/moussaka.jpeg',
        description: 'A Greek baked dish made with layers of eggplant, ground meat, and béchamel sauce.',
        ingredients: ['Eggplant', 'Ground Meat', 'Potatoes', 'Tomato Sauce', 'Béchamel Sauce'],
        category: 'Beef'
    }
];



// Function to display recipes with ingredient toggle functionality
function displayRecipes() {
    const recipeContainer = document.querySelector('.card-group');
    recipeContainer.innerHTML = ''; // Clear existing cards

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('card', 'col-lg-4', 'col-md-6', 'mb-4');
        recipeCard.style.width = '18rem';
        
        recipeCard.innerHTML = `
            <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <p class="card-text">${recipe.description}</p>
                <a href="#" class="btn btn-primary view-recipe" data-index="${index}">View Recipe</a>
                <ul class="ingredient-list" style="display: none;"></ul>
            </div>
        `;
        
        recipeContainer.appendChild(recipeCard);
    });

    // Add event listeners for "View Recipe" buttons
    document.querySelectorAll('.view-recipe').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const recipeIndex = event.target.getAttribute('data-index');
            toggleIngredients(recipeIndex);
        });
    });
}

// Function to toggle ingredients display
function toggleIngredients(index) {
    const recipe = recipes[index];
    const ingredientList = document.querySelectorAll('.ingredient-list')[index];
    
    if (ingredientList.style.display === 'none') {
        ingredientList.style.display = 'block';
        ingredientList.innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join('');
    } else {
        ingredientList.style.display = 'none';
    }
}

// Initialize recipes on page load
document.addEventListener('DOMContentLoaded', displayRecipes);

document.addEventListener("DOMContentLoaded", () => {
    // Load the sound
    const notificationSound = new Audio('sound.wav');

    function playSound() {
        notificationSound.currentTime = 0;
        notificationSound.play();
    }

    // Attach click event listeners to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.add('button-animated'); // Add animation class
        button.addEventListener('click', playSound);
    });

    // Update date and time
    function updateDateTime() {
        const dateTimeDisplay = document.getElementById("current-date-time");
        if (dateTimeDisplay) { // Check if element exists
            const now = new Date();
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: 'numeric', 
                minute: 'numeric', 
                second: 'numeric', 
                hour12: false 
            };
            const formattedDateTime = now.toLocaleString('en-US', options);
            dateTimeDisplay.textContent = formattedDateTime;
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Popup form logic
    const popup = document.querySelector('.popup-form');
    const openPopupBtn = document.querySelector('.open-popup');
    const closePopupBtn = popup ? popup.querySelector('.close-popup') : null;

    if (popup && openPopupBtn) {
        openPopupBtn.addEventListener('click', () => {
            popup.classList.add('show'); // Add show class for animation
            playSound();
        });

        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', () => {
                popup.classList.remove('show'); // Remove show class for animation
                playSound();
            });
        }

        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.classList.remove('show');
                playSound();
            }
        });
    }
});


// ... (rest of your existing code remains unchanged)

// Ensure to add playSound() in their respective event listeners for form validation and other button interactions.


// Reference to the HTML element where recipes will be displayed
const recipeContainer = document.querySelector('#recipe-container');

// Function to display recipes based on the category filter
function displayRecipes(filteredRecipes) {
    recipeContainer.innerHTML = ''; // Clear existing recipes
    filteredRecipes.forEach(recipe => {
        // Create HTML for each recipe (customize as per your layout)
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe-card');
        recipeElement.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>${recipe.description}</p>
        `;
        recipeContainer.appendChild(recipeElement);
    });
}

// Filter recipes by category
function filterRecipes(category) {
    const filteredRecipes = (category === 'All') ? recipes : recipes.filter(recipe => recipe.category === category);
    displayRecipes(filteredRecipes);
    localStorage.setItem('selectedCategory', category); // Save the selected category
}

// Load filter from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedCategory = localStorage.getItem('selectedCategory') || 'All';
    filterRecipes(savedCategory); // Apply the saved category filter
});

const modeToggle = document.getElementById('mode-toggle');

// Check for logged-in user and display relevant information
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const userInfoDiv = document.getElementById('user-info');

    if (username) {
        userInfoDiv.innerHTML = `
            <span>Welcome, ${username}!</span>
            <button class="btn btn-danger btn-sm ms-2" id="logoutBtn">Logout</button>
        `;

        // Logout button event listener
        document.getElementById('logoutBtn').addEventListener('click', function () {
            localStorage.removeItem('username'); // Remove user from local storage
            window.location.href = 'login.html'; // Redirect to login page
        });
    } else {
        userInfoDiv.innerHTML = `<a href="login.html" class="btn btn-primary">Login</a>`;
    }
});


/*
// Function to toggle dark mode and save preference to local storage
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Function to initialize the theme based on local storage
function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const toggle = document.getElementById("theme-toggle");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        toggle.checked = true;
    } else {
        body.classList.remove("dark-mode");
        toggle.checked = false;
    }
}

// Set up event listener for the toggle button
document.getElementById("theme-toggle").addEventListener("change", toggleDarkMode);

// Call initializeTheme on page load to set the theme based on stored preference
initializeTheme();

document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("mode-toggle");
    const modeText = document.getElementById("mode-text");
    
    // Check localStorage for saved mode
    const currentMode = localStorage.getItem("mode");
    if (currentMode === "dark") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
        modeText.textContent = "Dark";
    }

    toggle.addEventListener("change", function() {
        toggleMode();
    });
});

function toggleMode() {
    const modeText = document.getElementById("mode-text");
    if (document.body.classList.toggle("dark-mode")) {
        localStorage.setItem("mode", "dark");
        modeText.textContent = "Dark";
    } else {
        localStorage.setItem("mode", "light");
        modeText.textContent = "Light";
    }
}

*/

// Function to initialize the theme
function initializeTheme() {
    const savedTheme = localStorage.getItem("theme"); // Используем единый ключ "theme"
    const body = document.body;
    const toggleInput = document.getElementById("mode-toggle");
    const modeText = document.getElementById("mode-text");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        if (toggleInput) toggleInput.checked = true;
        if (modeText) modeText.textContent = "Dark";
    } else {
        body.classList.remove("dark-mode");
        if (toggleInput) toggleInput.checked = false;
        if (modeText) modeText.textContent = "Light";
    }
}

// Function to toggle dark mode
function toggleMode() {
    const body = document.body;
    const modeText = document.getElementById("mode-text");

    if (body.classList.toggle("dark-mode")) {
        localStorage.setItem("theme", "dark"); // Используем единый ключ "theme"
        if (modeText) modeText.textContent = "Dark";
    } else {
        localStorage.setItem("theme", "light"); // Используем единый ключ "theme"
        if (modeText) modeText.textContent = "Light";
    }
}


// Add event listener for checkbox toggle
document.addEventListener("DOMContentLoaded", function () {
    // Initialize theme on page load
    initializeTheme();

    // Add listener to toggle switch
    const toggleInput = document.getElementById("mode-toggle");
    if (toggleInput) {
        toggleInput.addEventListener("change", toggleDarkMode);
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    const userInfoDiv = document.getElementById("user-info");

    if (username) {
        userInfoDiv.textContent = `Welcome, ${username}!`;
    } else {
        userInfoDiv.textContent = "You are not logged in.";
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");

    if (!username) {
        alert("Please log in to access this page.");
        window.location.href = "login.html"; // Перенаправление на страницу входа
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const logoutLink = document.getElementById("logout-link");

    if (logoutLink) {
        logoutLink.addEventListener("click", function () {
            localStorage.removeItem("username"); // Удаляем данные о текущем пользователе
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.getElementById("profile-btn");
    const profileMenu = document.getElementById("profile-menu");
    const profileUsername = document.getElementById("profile-username");
    const profileEmail = document.getElementById("profile-email");
    const logoutLink = document.getElementById("logout-link");

    // Получаем данные пользователя из localStorage
    const username = localStorage.getItem("username") || "Guest";
    const email = localStorage.getItem("email") || "guest@example.com";

    // Устанавливаем имя пользователя и почту
    profileUsername.textContent = username;
    profileEmail.textContent = email;

    // Открытие/закрытие меню при клике на кнопку
    profileBtn.addEventListener("click", function () {
        profileMenu.style.display =
            profileMenu.style.display === "block" ? "none" : "block";
    });

    // Закрытие меню при клике вне его области
    document.addEventListener("click", function (event) {
        if (!profileBtn.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.style.display = "none";
        }
    });

    // Обработка выхода из аккаунта
    logoutLink.addEventListener("click", function () {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
    });
});

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const usernameInput = document.getElementById("username").value;
    const emailInput = document.getElementById("email").value; // Поле для email
    const passwordInput = document.getElementById("password").value; // Поле для пароля

    // Проверяем массив пользователей
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === usernameInput);

    if (user && user.password === passwordInput) {
        // Успешный вход, сохраняем данные
        localStorage.setItem("username", user.username);
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);

        alert("Login successful!");
        window.location.href = "index.html"; // Перенаправление на главную страницу
    } else {
        alert("Invalid username or password.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileUsername = document.getElementById("profile-username");
    const profileEmail = document.getElementById("profile-email");
    const profilePassword = document.getElementById("profile-password"); // Для отображения пароля

    const username = localStorage.getItem("username") || "Guest";
    const email = localStorage.getItem("email") || "guest@example.com";
    const password = localStorage.getItem("password") || "******"; // Если пароль не найден

    // Отображение данных
    profileUsername.textContent = username;
    profileEmail.textContent = email;
    profilePassword.textContent = password;
});

