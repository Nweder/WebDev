function toggleTheme() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
  }

document.getElementById("sendMailButton").addEventListener("click", function() {
    window.location.href = "mailto:m.neweder@gmail.com?subject=Hello&body=I want to contact you!";
});

document.getElementById("backHomeButton").addEventListener("click", function() {
    window.location.href = "../index.html"; 
});

document.getElementById("back-button-about-me").addEventListener("click", function() {
    window.location.href = "../index.html"; 
});

document.getElementById("back-button-for-fun").addEventListener("click", function() {
    window.location.href = "../index.html"; 
});

document.getElementById("back-button-my-projects").addEventListener("click", function() {
    window.location.href = "../index.html"; 
});

document.getElementById("sendMailButton").addEventListener("click", async function() {
    let userEmail = document.getElementById("userEmail").value;
    let messageElement = document.getElementById("message");

    if (userEmail.trim() === "") {
        messageElement.textContent = "Please enter your email before sending.";
        messageElement.style.color = "red";
        return;
    }
    try {
        let response = await fetch("http://localhost:5000/api/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userEmail })
        });

        let result = await response.json();

        if (response.ok) {
            messageElement.textContent = "Email sent successfully!";
            messageElement.style.color = "green";
        } else {
            messageElement.textContent = "Failed to send email. Please try again.";
            messageElement.style.color = "red";
        }
    } catch (error) {
        messageElement.textContent = "Error connecting to server.";
        messageElement.style.color = "red";
        console.error("Error:", error);
    }
});

