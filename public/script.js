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

document.getElementById("sendMailButton").addEventListener("click", function() {
    let UserEmail = document.getElementById("UserEmail").value;
    if (UserEmail.trim() === "") {
        alert("Please enter your email before sending.");
        return;
    }
    let subject = "Request to See Your CV";
    let body = `Hello, I am ${UserEmail}. I would like to see your CV.`;
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
