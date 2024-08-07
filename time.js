function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zero to minutes if needed
    minutes = minutes.toString().padStart(2, '0');

    // Format the time as HH:MM:SS AM/PM
    var formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Update the content of the time display div
    document.getElementById('current-time').innerText = formattedTime;
}

// Call updateTime initially
updateTime();

// Set up a timer to call updateTime every second (1000 milliseconds)
setInterval(updateTime, 1000);
