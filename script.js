const GITHUB_USERNAME = 'karanshri1668';

async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    const repos = await response.json();
    const projectList = document.getElementById('project-list');

    // Map of specific repo names to image URLs (you can add more)
    const projectImages = {
        'repo1': 'https://via.placeholder.com/300x200?text=Project+1',
        'repo2': 'https://via.placeholder.com/300x200?text=Project+2',
        // Add more mappings as needed
    };

    repos.forEach(repo => {
        const imageUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;
        
        const projectCard = document.createElement('div');
        projectCard.className = 'col-12 col-md-4';  // Add col-12 for mobile
        projectCard.innerHTML = `
            <div class="card h-100">
                <img src="${imageUrl}" class="card-img-top" alt="${repo.name}">
                <div class="card-body">
                    <h5 class="card-title">${repo.name}</h5>
                    <p class="card-text">${repo.description || 'No description available.'}</p>
                    <a href="${repo.html_url}" class="btn btn-primary" target="_blank">View on GitHub</a>
                </div>
            </div>`;
        projectList.appendChild(projectCard);
    });
    } catch (error) {
        console.error('Error fetching projects:', error);
        document.getElementById('project-list').innerHTML = 
            '<p class="text-center">Unable to load projects. Please check your connection.</p>';
    }
    
}


// Rest of your JavaScript remains the same
        function animateSections() {
            const sections = document.querySelectorAll('.section');
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            sections.forEach(section => {
                observer.observe(section);
            });
        }

        function animateHeader() {
            gsap.from(".header-title", { duration: 1, y: -50, opacity: 0 });
            gsap.from(".header-subtitle", { duration: 1.2, y: -50, opacity: 0, delay: 0.3 });
        }

        document.addEventListener('DOMContentLoaded', () => {
            animateHeader();
            animateSections();
            fetchGitHubProjects();
        });
