document.getElementById("home-icon").addEventListener("click", function() {
    window.location.href = "../index.html";  // Navigate to the home page
});

document.getElementById("settings-icon").addEventListener("click", function() {
    window.location.href = "settings.html";  // Stay on the settings page
});

// Function to load profile data from localStorage
function loadProfileData() {
    const savedName = localStorage.getItem('profileName');
    const savedEmail = localStorage.getItem('profileEmail');

    // If there is saved data, update the profile info displayed on the page
    if (savedName && savedEmail) {
        document.getElementById('profile-name').textContent = savedName;
        document.getElementById('profile-email').textContent = savedEmail;
    }
}

// Event listener for form submission to update the profile
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page

    // Get the values from the input fields
    const newName = document.getElementById('name').value;
    const newEmail = document.getElementById('email').value;

    // Update the profile information displayed on the page
    if (newName) {
        document.getElementById('profile-name').textContent = newName;
        document.getElementById('name-label').textContent = "Full Name (Updated)";  // Update the label text
    }
    if (newEmail) {
        document.getElementById('profile-email').textContent = newEmail;
        document.getElementById('email-label').textContent = "Email Address (Updated)";  // Update the label text
    }

    // Save the new profile data to localStorage so it persists
    localStorage.setItem('profileName', newName);
    localStorage.setItem('profileEmail', newEmail);
    
    // Show the success message after form submission
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';  // Show the success message

    // Optionally, hide the success message after a few seconds (for better UX)
    setTimeout(function() {
        successMessage.style.display = 'none'; // Hide after 3 seconds
    }, 3000);
});

// Load profile data when the page loads
loadProfileData();
