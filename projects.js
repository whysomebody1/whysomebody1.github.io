document.addEventListener("DOMContentLoaded", async function () {
    const username = "whysomebody1";
    const repo = "ML-Projects";
    const projectsContainer = document.getElementById("project-list");

    try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/`);
        const data = await response.json();

        data.forEach(item => {
            if (item.type === "dir") {
                const projectDiv = document.createElement("div");
                projectDiv.className = "project";
                projectDiv.innerHTML = `
                    <h3>📌 ${item.name.replace(/_/g, " ")}</h3>
                    <a href="https://github.com/${username}/${repo}/tree/main/${item.name}" target="_blank">🔗 View Project</a>
                `;
                projectsContainer.appendChild(projectDiv);
            }
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        projectsContainer.innerHTML = "<p>⚠️ Failed to load projects from GitHub.</p>";
    }
});
