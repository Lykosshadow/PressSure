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




//NEW CHART FOR THE MONTHLY RESULTS
// Fake data for the chart (representing a full month)
const mlabels = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
];  // Days of the month (1-30)

const mbloodPressureData = {
    labels: labels,  // Days of the month
    datasets: [{
        label: 'Systolic Pressure (mmHg)',
        data: [120, 122, 130, 125, 128, 132, 135, 138, 140, 142, 145, 130, 127, 126, 130,
               132, 135, 138, 137, 140, 138, 135, 132, 129, 128, 126, 124, 121, 119, 118, 120],  // Systolic data for each day
        borderColor: 'rgba(75, 192, 192, 1)',  // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Fill color
        borderWidth: 1,
        fill: true,  // Make the area under the line filled
    }, {
        label: 'Diastolic Pressure (mmHg)',
        data: [80, 82, 85, 84, 86, 88, 90, 92, 93, 95, 97, 96, 94, 93, 92, 
               91, 90, 88, 87, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75],  // Diastolic data for each day
        borderColor: 'rgba(255, 99, 132, 1)',  // Line color
        backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Fill color
        borderWidth: 1,
        fill: true,  // Make the area under the line filled
    }]
};

// Chart options
const mconfig = {
    type: 'line',  // Line chart
    data: mbloodPressureData,
    options: {
        responsive: true,  // Make chart responsive
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Day of the Month',  // X-axis label
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Pressure (mmHg)',  // Y-axis label
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        // Display custom tooltip format
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw} mmHg`;
                    }
                }
            }
        }
    },
};

// Render the chart
const chartM = document.getElementById('trend_month-chart').getContext('2d');
const trend_monthChart = new Chart(chartM, config);  // Create the chart

