document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.getElementById("projects-container");

    async function fetchGitHubProjects() {
        const username = "whysomebody1";
        const repoName = "ML-Projects";
        const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            data.forEach(file => {
                if (file.type === "file") {
                    const projectElement = document.createElement("div");
                    projectElement.classList.add("project-card");
                    projectElement.innerHTML = `
                        <h3>${file.name}</h3>
                        <a href="${file.html_url}" target="_blank">View File</a>
                    `;
                    projectsContainer.appendChild(projectElement);
                }
            });
        } catch (error) {
            console.error("Error fetching GitHub projects:", error);
        }
    }

    fetchGitHubProjects();
});
