// ============================================
// PORTFOLIO INTERACTIVITY & ANIMATIONS
// Enhanced with Search, Validation, and More Features
// ============================================

// Sample Data - Replace with your actual data
const portfolioData = {
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            subtitle: "Full-Stack Web Application",
            description: "A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
            technologies: ["React", "Node.js", "PostgreSQL", "Express", "Stripe"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/username/project1",
            features: [
                "User authentication and authorization",
                "Secure payment processing with Stripe",
                "Real-time inventory management",
                "Order tracking and notifications",
                "Admin dashboard for analytics"
            ],
            challenges: "Handling concurrent orders and maintaining data consistency during high traffic periods.",
            solutions: "Implemented Redis caching, database connection pooling, and optimistic locking for inventory updates.",
            impact: [
                "Improved page load time by 40%",
                "Reduced server response time by 60%",
                "Increased conversion rate by 25%",
                "Handled 10,000+ concurrent users"
            ]
        },
        {
            id: 2,
            title: "Cloud Infrastructure Dashboard",
            subtitle: "DevOps & Monitoring Tool",
            description: "A real-time monitoring dashboard for cloud infrastructure with automated scaling, cost optimization, and comprehensive observability.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
            technologies: ["Python", "Docker", "Kubernetes", "AWS", "Grafana", "Prometheus"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/username/project2",
            features: [
                "Real-time infrastructure monitoring",
                "Automated scaling based on metrics",
                "Cost optimization recommendations",
                "Multi-cloud support (AWS, Azure, GCP)",
                "Custom alerting and notifications"
            ],
            challenges: "Aggregating metrics from multiple cloud providers with different APIs and data formats.",
            solutions: "Created a unified abstraction layer with provider-specific adapters and standardized data models.",
            impact: [
                "Reduced infrastructure costs by 35%",
                "Decreased incident response time by 50%",
                "Improved system uptime to 99.9%",
                "Automated 80% of scaling decisions"
            ]
        },
        {
            id: 3,
            title: "API Gateway & Microservices",
            subtitle: "Backend Architecture",
            description: "A scalable microservices architecture with API gateway, service mesh, and distributed tracing for a high-traffic application.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
            technologies: ["Go", "gRPC", "Kubernetes", "Istio", "Jaeger", "Redis"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/username/project3",
            features: [
                "API rate limiting and throttling",
                "Service discovery and load balancing",
                "Distributed tracing across services",
                "Circuit breaker pattern implementation",
                "Centralized logging and monitoring"
            ],
            challenges: "Managing service communication complexity and ensuring data consistency across distributed services.",
            solutions: "Implemented event-driven architecture with message queues, saga pattern for distributed transactions, and comprehensive health checks.",
            impact: [
                "Reduced API latency by 45%",
                "Improved system reliability by 60%",
                "Scaled to handle 1M+ requests/day",
                "Reduced deployment time by 70%"
            ]
        },
        {
            id: 4,
            title: "Database Optimization System",
            subtitle: "Performance & Analytics",
            description: "An intelligent database optimization tool that analyzes query patterns, suggests indexes, and provides performance insights.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
            technologies: ["Python", "PostgreSQL", "MongoDB", "Elasticsearch", "Machine Learning"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/username/project4",
            features: [
                "Query performance analysis",
                "Automatic index recommendations",
                "Query pattern detection",
                "Performance trend visualization",
                "Cost optimization suggestions"
            ],
            challenges: "Analyzing complex query patterns and predicting optimal indexes without impacting production performance.",
            solutions: "Used machine learning models trained on query execution plans and implemented a shadow testing environment for index validation.",
            impact: [
                "Improved query performance by 55%",
                "Reduced database load by 40%",
                "Decreased storage costs by 30%",
                "Automated 90% of optimization tasks"
            ]
        }
    ],
    experience: [
        {
            role: "Senior Software Engineer",
            company: "Tech Company Inc.",
            companyLink: "https://example.com",
            date: "2022 - Present",
            description: "Leading development of scalable microservices architecture and cloud infrastructure.",
            technologies: ["Go", "Kubernetes", "AWS", "PostgreSQL", "Redis"],
            achievements: [
                "Architected and deployed microservices handling 10M+ requests daily",
                "Reduced infrastructure costs by 40% through optimization",
                "Mentored team of 5 junior developers",
                "Improved system reliability from 99.5% to 99.9% uptime"
            ]
        },
        {
            role: "Full-Stack Developer",
            company: "StartupXYZ",
            companyLink: "https://example.com",
            date: "2020 - 2022",
            description: "Developed end-to-end features for a SaaS platform, from database design to frontend implementation.",
            technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
            achievements: [
                "Built core features serving 50,000+ active users",
                "Implemented CI/CD pipeline reducing deployment time by 80%",
                "Optimized database queries improving response time by 60%",
                "Led migration from monolithic to microservices architecture"
            ]
        },
        {
            role: "Backend Developer",
            company: "Enterprise Corp",
            companyLink: "https://example.com",
            date: "2018 - 2020",
            description: "Developed RESTful APIs and database solutions for enterprise applications.",
            technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Jenkins"],
            achievements: [
                "Designed and implemented 20+ REST APIs",
                "Optimized database schema reducing query time by 50%",
                "Implemented automated testing increasing code coverage to 85%",
                "Reduced API response time by 45%"
            ]
        }
    ],
    skills: [
        { name: "JavaScript", icon: "fab fa-js-square", level: 90, color: "#F7DF1E" },
        { name: "React", icon: "fab fa-react", level: 85, color: "#61DAFB" },
        { name: "Node.js", icon: "fab fa-node-js", level: 88, color: "#339933" },
        { name: "Python", icon: "fab fa-python", level: 82, color: "#3776AB" },
        { name: "Go", icon: "fab fa-golang", level: 80, color: "#00ADD8" },
        { name: "PostgreSQL", icon: "fas fa-database", level: 85, color: "#336791" },
        { name: "MongoDB", icon: "fas fa-database", level: 78, color: "#47A248" },
        { name: "Docker", icon: "fab fa-docker", level: 83, color: "#2496ED" },
        { name: "Kubernetes", icon: "fas fa-cube", level: 75, color: "#326CE5" },
        { name: "AWS", icon: "fab fa-aws", level: 80, color: "#FF9900" },
        { name: "Git", icon: "fab fa-git-alt", level: 88, color: "#F05032" },
        { name: "Linux", icon: "fab fa-linux", level: 85, color: "#FCC624" }
    ]
};

// Load Local Storage Projects
const storedProjects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
// Add stored projects to the main data
portfolioData.projects.push(...storedProjects);

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
    currentProjectFilter: 'all',
    searchQuery: '',
    filteredProjects: [...portfolioData.projects],
    isSearchActive: false
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    setupEventListeners();
    setupAnimations();
    setupSearch();
    setupFormValidation();
    loadFormData();
});

// ============================================
// PORTFOLIO INITIALIZATION
// ============================================

function initializePortfolio() {
    renderProjects();
    renderExperience();
    renderSkills();
    setupSmoothScrolling();
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderProjects(projects = state.filteredProjects) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    if (projects.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p style="font-size: 1.2rem;">No projects found matching your search.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = projects.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-subtitle">${project.subtitle}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-badge">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" target="_blank" class="project-link glass-button" onclick="event.stopPropagation()">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Demo</span>
                    </a>
                    <a href="${project.githubLink}" target="_blank" class="project-link glass-button" onclick="event.stopPropagation()">
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers for project cards
    container.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            openProjectModal(projectId);
        });
    });
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = portfolioData.experience.map(exp => `
        <div class="experience-item">
            <div class="experience-header">
                <div>
                    <h3 class="experience-role">${exp.role}</h3>
                    <a href="${exp.companyLink}" target="_blank" class="experience-company">${exp.company}</a>
                </div>
                <span class="experience-date">${exp.date}</span>
            </div>
            <p class="experience-description">${exp.description}</p>
            <div class="experience-tech">
                ${exp.technologies.map(tech => `
                    <span class="tech-badge">${tech}</span>
                `).join('')}
            </div>
            <div class="experience-achievements">
                ${exp.achievements.map(achievement => `
                    <div class="achievement-item">${achievement}</div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-item" data-skill="${skill.name}">
            <i class="${skill.icon} skill-icon" style="color: ${skill.color}"></i>
            <span class="skill-name">${skill.name}</span>
            <div class="skill-level">
                <div class="skill-level-bar" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');

    // Animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.skill-level-bar');
                if (bar) {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }
            }
        });
    }, { threshold: 0.5 });

    container.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    // Debounced search
    const performSearch = debounce((query) => {
        state.searchQuery = query.toLowerCase().trim();
        
        if (!state.searchQuery) {
            state.filteredProjects = [...portfolioData.projects];
            state.isSearchActive = false;
        } else {
            state.isSearchActive = true;
            state.filteredProjects = portfolioData.projects.filter(project => {
                const searchableText = `
                    ${project.title} 
                    ${project.subtitle} 
                    ${project.description} 
                    ${project.technologies.join(' ')} 
                    ${project.features.join(' ')}
                `.toLowerCase();
                
                return searchableText.includes(state.searchQuery);
            });
        }
        
        renderProjects();
        updateSearchResults();
    }, 300);

    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    // Clear search on Escape
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch('');
            searchInput.blur();
        }
    });
}

function updateSearchResults() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const resultsCount = state.filteredProjects.length;
    const totalCount = portfolioData.projects.length;

    // Add search results indicator
    let indicator = container.previousElementSibling;
    if (!indicator || !indicator.classList.contains('search-results-indicator')) {
        indicator = document.createElement('div');
        indicator.className = 'search-results-indicator';
        indicator.style.cssText = 'margin-bottom: 1rem; color: var(--text-secondary); font-size: 0.9rem;';
        container.parentNode.insertBefore(indicator, container);
    }

    if (state.isSearchActive) {
        indicator.textContent = `Found ${resultsCount} project${resultsCount !== 1 ? 's' : ''} out of ${totalCount}`;
        indicator.style.display = 'block';
    } else {
        indicator.style.display = 'none';
    }
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================

function openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="project-details">
            <img src="${project.image}" alt="${project.title}" class="project-detail-image">
            <h2 class="modal-title">${project.title}</h2>
            <p class="project-detail-description">${project.description}</p>
            
            <div>
                <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Technologies Used</h3>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-badge">${tech}</span>
                    `).join('')}
                </div>
            </div>

            <div>
                <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Key Features</h3>
                <ul class="project-detail-features">
                    ${project.features.map(feature => `
                        <li>${feature}</li>
                    `).join('')}
                </ul>
            </div>

            <div>
                <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Challenges & Solutions</h3>
                <p style="margin-bottom: 0.5rem; color: var(--text-secondary);"><strong>Challenge:</strong> ${project.challenges}</p>
                <p style="color: var(--text-secondary);"><strong>Solution:</strong> ${project.solutions}</p>
            </div>

            <div class="project-detail-impact">
                <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Impact & Results</h3>
                <ul class="project-detail-features">
                    ${project.impact.map(impact => `
                        <li>${impact}</li>
                    `).join('')}
                </ul>
            </div>

            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <a href="${project.demoLink}" target="_blank" class="glass-button primary" style="flex: 1; justify-content: center;">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                </a>
                <a href="${project.githubLink}" target="_blank" class="glass-button" style="flex: 1; justify-content: center;">
                    <i class="fab fa-github"></i>
                    <span>View on GitHub</span>
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus trap for accessibility
    trapFocus(modal);
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function openMessageModal() {
    const modal = document.getElementById('message-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    loadFormData();
    trapFocus(modal);
}

function closeMessageModal() {
    const modal = document.getElementById('message-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// ADD PROJECT FUNCTIONALITY
// ============================================

function openAddProjectModal() {
    const modal = document.getElementById('add-project-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAddProjectModal() {
    const modal = document.getElementById('add-project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleAddProjectSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    // Basic validation
    if (!form.checkValidity()) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }

    const newProject = {
        id: Date.now(), // Generate unique ID
        title: document.getElementById('p-title').value,
        subtitle: document.getElementById('p-subtitle').value,
        image: document.getElementById('p-image').value,
        description: document.getElementById('p-desc').value,
        technologies: document.getElementById('p-tech').value.split(',').map(t => t.trim()),
        demoLink: document.getElementById('p-demo').value || '#',
        githubLink: document.getElementById('p-github').value || '#',
        features: ["User generated project"], // simplified for demo
        challenges: "N/A",
        solutions: "N/A",
        impact: ["N/A"]
    };

    // Save to LocalStorage
    const projects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
    projects.push(newProject);
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));

    // Update Global Data
    portfolioData.projects.push(newProject);
    
    // Re-render
    state.filteredProjects = [...portfolioData.projects];
    renderProjects();
    
    showNotification('Project added successfully!', 'success');
    form.reset();
    closeAddProjectModal();
}

// ============================================
// FORM VALIDATION & HANDLING
// ============================================

function setupFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Real-time validation
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remove previous error
    field.classList.remove('error');
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }

    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }

    // Show error if invalid
    if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.style.cssText = 'color: #ff6b6b; font-size: 0.85rem; margin-top: 0.25rem;';
        field.parentElement.appendChild(errorDiv);
    }

    return isValid;
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isFormValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });

    return isFormValid;
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    
    // Validate form
    if (!validateForm(form)) {
        showNotification('Please fix the errors in the form', 'error');
        return;
    }
    
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim(),
        timestamp: new Date().toISOString()
    };

    // Save to localStorage (for demo purposes)
    saveFormData(formData);

    // Here you would typically send this to a backend
    console.log('Form submitted:', formData);
    
    // Simulate API call
    showNotification('Sending message...', 'info');
    
    setTimeout(() => {
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        form.reset();
        clearFormData();
        closeMessageModal();
    }, 1500);
}

function saveFormData(data) {
    try {
        localStorage.setItem('portfolio_contact_form', JSON.stringify(data));
    } catch (e) {
        console.warn('Could not save form data to localStorage:', e);
    }
}

function loadFormData() {
    try {
        const saved = localStorage.getItem('portfolio_contact_form');
        if (saved) {
            const data = JSON.parse(saved);
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');
            
            if (nameField) nameField.value = data.name || '';
            if (emailField) emailField.value = data.email || '';
            if (messageField) messageField.value = data.message || '';
        }
    } catch (e) {
        console.warn('Could not load form data from localStorage:', e);
    }
}

function clearFormData() {
    try {
        localStorage.removeItem('portfolio_contact_form');
    } catch (e) {
        console.warn('Could not clear form data from localStorage:', e);
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-md);
        color: var(--text-primary);
        z-index: 10000;
        box-shadow: 0 8px 32px var(--glass-shadow);
        animation: slideInRight 0.3s ease-out;
    `;

    // Add icon based on type
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    const icon = icons[type] || icons.info;
    notification.innerHTML = `<i class="fas ${icon}" style="margin-right: 0.5rem;"></i>${message}`;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Mobile Menu
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close mobile menu
            if (mobileToggle) mobileToggle.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
            
            const section = link.dataset.section;
            navigateToSection(section);
        });
    });

    // Modal close buttons
    const closeModalBtn = document.getElementById('close-modal');
    const closeMessageModalBtn = document.getElementById('close-message-modal');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }
    
    if (closeMessageModalBtn) {
        closeMessageModalBtn.addEventListener('click', closeMessageModal);
    }

    // Close modals on overlay click
    document.getElementById('project-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'project-modal') {
            closeProjectModal();
        }
    });

    document.getElementById('message-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'message-modal') {
            closeMessageModal();
        }
    });

    // CTA Buttons
    document.querySelectorAll('.cta-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.textContent.trim();
            if (text.includes('Work') || text.includes('View')) {
                navigateToSection('portfolio');
            } else if (text.includes('Touch') || text.includes('Contact')) {
                navigateToSection('contact');
            }
        });
    });

    // Send Message Button
    const sendMessageBtn = document.querySelector('.send-message-btn');
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', openMessageModal);
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Project Controls
    const prevBtn = document.getElementById('prev-projects');
    const nextBtn = document.getElementById('next-projects');
    const editBtn = document.getElementById('edit-projects');
    const addBtn = document.getElementById('add-project');
    const previewBtn = document.getElementById('preview-projects');

    if (prevBtn) prevBtn.addEventListener('click', () => scrollProjects('prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollProjects('next'));
    if (editBtn) editBtn.addEventListener('click', () => showNotification('Edit functionality - Coming soon!', 'info'));
    if (addBtn) addBtn.addEventListener('click', openAddProjectModal);
    
    // Add Project Modal Close
    const closeAddModalBtn = document.getElementById('close-add-modal');
    if (closeAddModalBtn) closeAddModalBtn.addEventListener('click', closeAddProjectModal);
    
    // Add Project Form
    const addProjectForm = document.getElementById('add-project-form');
    if (addProjectForm) addProjectForm.addEventListener('submit', handleAddProjectSubmit);
    if (previewBtn) previewBtn.addEventListener('click', () => navigateToSection('portfolio'));

    // Resume Button
    const resumeBtn = document.querySelector('.resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Replace with your actual resume URL
            showNotification('Resume download - Add your resume PDF link in script.js!', 'info');
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeMessageModal();
        }
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
}

// ============================================
// NAVIGATION
// ============================================

function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });

    // Smooth scroll to section
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sectionTop = section.offsetTop - headerHeight - 20;
    
    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
}

function setupSmoothScrolling() {
    // Update active nav on scroll (throttled for performance)
    const sections = document.querySelectorAll('.section, .sidebar-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const updateActiveNav = throttle(() => {
        let current = '';
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === current) {
                link.classList.add('active');
            }
        });
    }, 100);

    window.addEventListener('scroll', updateActiveNav);
}

// ============================================
// PROJECT CAROUSEL
// ============================================

function scrollProjects(direction) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const scrollAmount = 320; // card width + gap
    const currentScroll = container.scrollLeft;
    const newScroll = direction === 'next' 
        ? currentScroll + scrollAmount 
        : currentScroll - scrollAmount;

    container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
    });
}

// ============================================
// ANIMATIONS
// ============================================

function setupAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section, .sidebar-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Liquid button animations
    document.querySelectorAll('.glass-button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });

    // Ripple effect on glass panels
    document.querySelectorAll('.glass-panel').forEach(panel => {
        panel.addEventListener('click', function(e) {
            // Don't trigger on interactive elements
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
                return;
            }

            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ============================================
// ACCESSIBILITY
// ============================================

function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input:not([disabled]), select'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', function trapHandler(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// ADD DYNAMIC STYLES
// ============================================

const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .form-input.error {
        border-color: #ff6b6b !important;
        box-shadow: 0 0 15px rgba(255, 107, 107, 0.3) !important;
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .notification-success {
        border-left: 4px solid #51cf66;
    }

    .notification-error {
        border-left: 4px solid #ff6b6b;
    }

    .notification-info {
        border-left: 4px solid var(--primary-blue);
    }
`;
document.head.appendChild(style);
