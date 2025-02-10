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

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:5215/api/projects")  
        .then(response => response.json())
        .then(data => {
            console.log("Fetched projects:", data);
            const projectContainer = document.getElementById("projects-list");

            if (!projectContainer) {
                console.error("Error: 'projects-list' div not found in index.html!");
                return;
            }

            projectContainer.innerHTML = "";

            data.forEach(project => {
                projectContainer.innerHTML += `
                    <div class="project-card">
                        <img src="./assets/images/${project.image}" alt="${project.title}">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                `;
            });
        })
        .catch(error => console.error("Error fetching projects:", error));
});


