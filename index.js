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


// Wait for the DOM to be fully loaded
window.onload = function() {
    // Get the canvas element for Chart.js
    var ctx = document.getElementById('pressure-chart').getContext('2d');

    // Sample data for the graph (replace with real data)
    var pressureData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], // X-axis labels
        datasets: [{
            label: 'Pressure Over Time',
            data: [120, 130, 125, 140, 135], // Y-axis values (pressure readings)
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color
            borderWidth: 1
        }]
    };

    // Chart.js configuration
    var config = {
        type: 'line',
        data: pressureData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Pressure Over Time',
                    padding: {
                        top: 20,    // Space above the title
                        bottom: 20  // Space below the title
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        padding: 10  // Space between X-axis labels and the chart
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        padding: 10  // Space between Y-axis labels and the chart
                    }
                }
            },
            layout: {
                padding: {
                    left: 20,    // Space on the left side of the chart
                    right: 20,   // Space on the right side
                    top: 20,     // Space on the top side
                    bottom: 20   // Space on the bottom side
                }
            }
        }
    };
    

    // Create the chart using the config
    var pressureChart = new Chart(ctx, config);
};
