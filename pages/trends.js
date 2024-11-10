// Fake data for the chart
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];  // Days of the week
const bloodPressureData = {
    labels: labels,
    datasets: [{
        label: 'Systolic Pressure (mmHg)',
        data: [120, 125, 130, 128, 135, 140, 138],  // Fake systolic data
        borderColor: 'rgba(75, 192, 192, 1)',  // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Fill color
        borderWidth: 1,
        fill: true,
    }, {
        label: 'Diastolic Pressure (mmHg)',
        data: [80, 85, 83, 82, 88, 85, 84],  // Fake diastolic data
        borderColor: 'rgba(255, 99, 132, 1)',  // Line color
        backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Fill color
        borderWidth: 1,
        fill: true,
    }]
};

// Chart options
const config = {
    type: 'line',  // Line chart
    data: bloodPressureData,
    options: {
        responsive: true,  // Make chart responsive
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    },
};

// Render the chart
const ctx = document.getElementById('trend-chart').getContext('2d');
const trendChart = new Chart(ctx, config);  // Create the chart