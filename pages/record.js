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

document.getElementById("start-button").addEventListener("click", function() {
    // Show the popup
    document.getElementById("popup").style.display = "block";
    
    // Optionally, hide the popup after a certain amount of time (e.g., 3 seconds)
    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
        
        // After the popup disappears, update the blood pressure and pulse readings
        updateBloodPressureReading();
        updatePulseReading();
    }, 3000); // Hide after 3 seconds
});

function updateBloodPressureReading() {
    // Simulate a random systolic blood pressure value between 90 and 130
    const systolic = Math.floor(Math.random() * (130 - 90 + 1)) + 90;

    // Simulate a random diastolic blood pressure value between 60 and 85
    const diastolic = Math.floor(Math.random() * (85 - 60 + 1)) + 60;

    // Update the DOM with the new readings
    document.getElementById("Sys-pressure").innerText = systolic;
    document.getElementById("Dia-pressure").innerText = diastolic;

    // Get the element to change background color (the #recorder element)
    const recorder = document.getElementById('blood-pressure');

    // Change the background color based on the blood pressure values
    if (systolic < 120 && diastolic < 80) {
        // Normal blood pressure
        recorder.style.backgroundColor = 'green';  // Normal: Green
    } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
        // Elevated blood pressure (Medium)
        recorder.style.backgroundColor = 'yellow';  // Medium: Yellow
    } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
        // Hypertension Stage 1
        recorder.style.backgroundColor = 'orange';  // Stage 1: Orange
    } else if (systolic >= 140 || diastolic >= 90) {
        // Hypertension Stage 2 (High)
        recorder.style.backgroundColor = 'red';  // High: Red
    } else {
        // Default case if no condition matches (you could make this gray or white)
        recorder.style.backgroundColor = 'white';
    }
}

// You can call this function on an interval, button click, or other trigger:
updateBloodPressureReading();  // Call it once to test the functionality


function updatePulseReading() {
    // Generate a random pulse value between 60 and 150 bpm
    const pulse = Math.floor(Math.random() * (150 - 60 + 1)) + 60;

    // Update the DOM with the new pulse value
    document.getElementById("pulse-value").innerText = `${pulse} bpm`;
}

