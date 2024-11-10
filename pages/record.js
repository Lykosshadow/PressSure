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