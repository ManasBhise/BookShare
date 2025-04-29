// Navigation Bar Handling

// Select all elements with the class 'nav-link'
document.querySelectorAll('.nav-link').forEach(link => {
    // Add a click event listener to each nav-link
    link.addEventListener('click', function (e) {
        // Prevent the default anchor behavior
        e.preventDefault();
        // Get the page ID from the 'data-page' attribute and call showPage to display it
        showPage(this.getAttribute('data-page'));
    });
});

// Function to display the correct page section based on ID
function showPage(pageId) {
    // Remove 'active' class from all page sections to hide them
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Add 'active' class to the selected page to make it visible
    document.getElementById(pageId + '-page').classList.add('active');

    // Scroll to the top of the page after switching
    window.scrollTo(0, 0);
}

// Book Card Click Handling

// Select all book preview cards
document.querySelectorAll('.book-card').forEach(card => {
    // When clicked, show the book detail page
    card.addEventListener('click', () => showPage('book-detail'));
});

// Person Card Click Handling

// Select all person/profile cards
document.querySelectorAll('.person-card').forEach(card => {
    // When clicked, show the profile page
    card.addEventListener('click', () => showPage('profile'));
});

// Login / Signup Tab Switching

// Select both login and signup tabs
document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        // Get the ID of the selected tab (login or signup)
        const tabId = this.getAttribute('data-tab');

        // Remove 'active' class from all tabs to reset the tab state
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));

        // Mark the clicked tab as active
        this.classList.add('active');

        // Show or hide the forms based on the tab selected
        document.getElementById('login-form').style.display = (tabId === 'login') ? 'block' : 'none';
        document.getElementById('signup-form').style.display = (tabId === 'signup') ? 'block' : 'none';
    });
});

// Post Book Form Submission Handling

// Add listener to the post book form
document.getElementById('post-book-form').addEventListener('submit', function (e) {
    // Prevent page refresh on submit
    e.preventDefault();

    // Show a modal message to confirm successful submission
    document.getElementById('success-modal').style.display = 'flex';
});

// Modal Close Button Handling

// Select all close buttons on modals
document.querySelectorAll('.close-modal').forEach(close => {
    // When clicked, hide all modals
    close.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
    });
});

// Close Modal by Clicking Outside the Box

// Add a global click event to the window
window.addEventListener('click', function (e) {
    // If the clicked target is the modal background, hide the modal
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

// Initialize the App

// Function to show the default home page when the app loads
function initApp() {
    showPage('home');
}

// Call the initialization function
initApp();

// Basic Login Simulation

// Get the login button element
const loginBtn = document.getElementById("loginBtn");

// Function that handles login logic
function handleLogin() {
    // Prompt user for a username
    const username = prompt("Username:");
    // Prompt user for a password
    const password = prompt("Password:");

    // Check if username and password match the hardcoded values
    if (username === "user" && password === "1234") {
        // Hide the login button if credentials are valid
        loginBtn.style.display = "none";
    } else {
        // Alert the user about invalid login attempt
        alert("Invalid credentials!");
    }
}

// Attach the login logic to the login button's click event
loginBtn.addEventListener("click", handleLogin);
