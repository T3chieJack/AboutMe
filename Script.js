// Example dynamic project loading from GitHub API
const fetchGitHubProjects = async () => {
    const response = await fetch('https://api.github.com/users/yourusername/repos');
    const repos = await response.json();

    const projectList = document.getElementById('project-list');
    repos.forEach(repo => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available"}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        projectList.appendChild(projectDiv);
    });
};

// Load projects on page load
window.onload = fetchGitHubProjects;
