// script.js

// Function to toggle the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Function to dynamically load projects
function loadProjects() {
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1.",
            link: "#"
        },
        {
            title: "Project 2",
            description: "Description of project 2.",
            link: "#"
        },
        {
            title: "Project 3",
            description: "Description of project 3.",
            link: "#"
        }
    ];

    const projectContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectContainer.appendChild(projectElement);
    });
}

// Function to dynamically load experiences
function loadExperiences() {
    const experiences = [
        {
            title: "Experience 1",
            description: "Details about experience 1."
        },
        {
            title: "Experience 2",
            description: "Details about experience 2."
        },
        {
            title: "Experience 3",
            description: "Details about experience 3."
        }
    ];

    const experienceContainer = document.getElementById('experiences');
    experiences.forEach(experience => {
        const experienceElement = document.createElement('div');
        experienceElement.classList.add('experience');

        experienceElement.innerHTML = `
            <h3>${experience.title}</h3>
            <p>${experience.description}</p>
        `;

        experienceContainer.appendChild(experienceElement);
    });
}

// Initialize the page content
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadExperiences();
});