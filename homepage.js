function loadHeader() {
    const name = localStorage.getItem('profileName');
    if (name) {
        document.getElementById("welcome-header").innerHTML += ", " + name;
    }
}

loadHeader();