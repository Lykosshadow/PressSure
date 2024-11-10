document.getElementById("start-button").addEventListener("click", function() {
    // Show the popup
    document.getElementById("popup").style.display = "block";
    
    // Optionally, hide the popup after a certain amount of time (e.g., 3 seconds)
    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
        
        // Update the container to show a blood pressure reading after popup disappears
        updateBloodPressureReading();
    }, 3000); // Hide after 3 seconds
});

const dateTime = (new Date()).toString();

const daysOfWeek = {
    "Sun": "Sunday",
    "Mon": "Monday",
    "Tue": "Tuesday",
    "Wed": "Wednesday",
    "Thu": "Thursday",
    "Fri": "Friday",
    "Sat": "Saturday"
}

const months = {
    "Jan": "January",
    "Feb": "Feburary",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "Augest",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December"
}

const dayOfWeek = daysOfWeek[dateTime.slice(0, 3)];
const month = months[dateTime.slice(4, 7)];
const day = dateTime.slice(8,10);
const time = dateTime.slice(16,21);

document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = dayOfWeek + ", " + month + " " + day;

// Function to simulate blood pressure reading
function updateBloodPressureReading() {
    // Simulate a random systolic blood pressure value between 90 and 130
    const systolic = Math.floor(Math.random() * (130 - 90 + 1)) + 90;

    // Simulate a random diastolic blood pressure value between 60 and 85
    const diastolic = Math.floor(Math.random() * (85 - 60 + 1)) + 60;

    // Combine systolic and diastolic into a formatted string
    const reading = `${systolic} / ${diastolic} mmHg`;

    // Find the container where you want to show the blood pressure reading
    const bloodPressureContainer = document.getElementById("blood-pressure");

    // Update the container with the new blood pressure reading
    bloodPressureContainer.innerHTML = `Blood Pressure: ${reading}`;
}