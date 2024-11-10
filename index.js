//const htmlString = "<i class='fa fa-home'></i><i class='fa fa-gear'></i>";

//document.getElementById("side-bar").innerHTML = htmlString;


const htmlString = `
  <i class='fa fa-home' id="home-icon"></i>
  <i class='fa fa-gear' id="settings-icon"></i>
`;

document.getElementById("side-bar").innerHTML = htmlString;

// Adding event listeners to the icons
document.getElementById("home-icon").addEventListener("click", function() {
  window.location.href = "/index.html";  // Navigate to the home page
});

document.getElementById("settings-icon").addEventListener("click", function() {
  window.location.href = "/pages/settings.html";  // Navigate to the settings page
});
