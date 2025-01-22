const GITHUB_USERNAME = 'Karanshri1668';

        async function fetchGitHubProjects() {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
            const repos = await response.json();
            const projectList = document.getElementById('project-list');

            repos.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.className = 'col-md-4';
                projectCard.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description || 'No description available.'}</p>
                            <a href="${repo.html_url}" class="btn btn-primary" target="_blank">View on GitHub</a>
                        </div>
                    </div>`;
                projectList.appendChild(projectCard);
            });
        }

        function animateSections() {
            const sections = document.querySelectorAll('.section');
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

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
