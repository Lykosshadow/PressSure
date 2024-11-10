document.getElementById("home-icon").addEventListener("click", function() {
    window.location.href = "../index.html";  // Navigate to the home page
});

document.getElementById("settings-icon").addEventListener("click", function() {
    window.location.href = "settings.html";  // Stay on the settings page
});

// Save settings button functionality (optional)
document.getElementById("save-settings-btn").addEventListener("click", function() {
    const theme = document.getElementById("theme-selector").value;
    const notificationsEnabled = document.getElementById("notifications-toggle").checked;
    const language = document.getElementById("language-selector").value;

    // Store the settings in localStorage (for example)
    localStorage.setItem("theme", theme);
    localStorage.setItem("notifications", notificationsEnabled);
    localStorage.setItem("language", language);

    alert("Settings saved successfully!");
});