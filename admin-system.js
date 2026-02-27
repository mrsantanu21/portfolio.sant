// ============================================
// ADMIN MODE & EDITABLE SYSTEM
// Complete CMS for Portfolio Management
// ============================================

// Admin State
let adminMode = false;
let currentEditingExperience = null;
let currentEditingSkill = null;

// Storage Manager
const StorageManager = {
    keys: {
        PERSONAL_INFO: 'portfolio_personal_info',
        ABOUT_INFO: 'portfolio_about_info',
        CONTACT_INFO: 'portfolio_contact_info',
        PROJECTS: 'portfolio_projects',
        EXPERIENCE: 'portfolio_experience',
        SKILLS: 'portfolio_skills'
    },

    get(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error loading from localStorage:', e);
            return null;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error saving to localStorage:', e);
            if (e.name === 'QuotaExceededError') {
                showNotification('Storage limit exceeded!', 'error');
            }
            return false;
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from localStorage:', e);
            return false;
        }
    },

    exportAll() {
        const data = {};
        Object.values(this.keys).forEach(key => {
            const value = this.get(key);
            if (value) data[key] = value;
        });
        return data;
    },

    importAll(data) {
        try {
            Object.entries(data).forEach(([key, value]) => {
                if (Object.values(this.keys).includes(key)) {
                    this.set(key, value);
                }
            });
            return true;
        } catch (e) {
            console.error('Error importing data:', e);
            return false;
        }
    },

    clearAll() {
        Object.values(this.keys).forEach(key => this.remove(key));
    }
};

// Initialize Admin Mode
function initializeAdminMode() {
    // Load stored data
    loadStoredData();
    
    // Setup admin toolbar event listeners
    const toggleBtn = document.getElementById('toggle-admin-mode');
    const exportBtn = document.getElementById('export-data');
    const importBtn = document.getElementById('import-data');
    const resetBtn = document.getElementById('reset-data');
    
    if (toggleBtn) toggleBtn.addEventListener('click', toggleAdminMode);
    if (exportBtn) exportBtn.addEventListener('click', exportPortfolioData);
    if (importBtn) importBtn.addEventListener('click', () => document.getElementById('import-file-input').click());
    if (resetBtn) resetBtn.addEventListener('click', resetToDefaults);
    
    // File input for import
    const fileInput = document.getElementById('import-file-input');
    if (fileInput) {
        fileInput.addEventListener('change', importPortfolioData);
    }
    
    // Edit button click handlers
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const editType = btn.dataset.edit;
            handleEditClick(editType);
        });
    });
    
    // Modal close handlers
    setupEditModalCloseHandlers();
    
    // Form submit handlers
    setupEditFormHandlers();
    
    // Add/Edit buttons
    const addExpBtn = document.getElementById('add-experience');
    const addSkillBtn = document.getElementById('add-skill');
    
    if (addExpBtn) addExpBtn.addEventListener('click', () => openExperienceModal());
    if (addSkillBtn) addSkillBtn.addEventListener('click', () => openSkillModal());
    
    // Skill level slider
    const skillLevelSlider = document.getElementById('skill-level');
    const skillLevelDisplay = document.getElementById('skill-level-display');
    if (skillLevelSlider && skillLevelDisplay) {
        skillLevelSlider.addEventListener('input', (e) => {
            skillLevelDisplay.textContent = e.target.value;
        });
    }
    
    // Keyboard shortcut for admin mode (Ctrl+Shift+A)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            toggleAdminMode();
        }
    });
}

// Toggle Admin Mode
function toggleAdminMode() {
    adminMode = !adminMode;
    document.body.classList.toggle('admin-mode', adminMode);
    
    const statusSpan = document.querySelector('.admin-status');
    const toggleBtn = document.getElementById('toggle-admin-mode');
    
    if (statusSpan) {
        statusSpan.textContent = adminMode ? 'ON' : 'OFF';
    }
    
    if (toggleBtn) {
        toggleBtn.classList.toggle('active', adminMode);
    }
    
    showNotification(
        adminMode ? 'Admin mode enabled - Click edit buttons to modify content' : 'Admin mode disabled',
        'info'
    );
}

// Handle Edit Button Clicks
function handleEditClick(editType) {
    switch(editType) {
        case 'personal-info':
            openPersonalInfoModal();
            break;
        case 'about-info':
            openAboutInfoModal();
            break;
        case 'contact-info':
            openContactInfoModal();
            break;
        default:
            console.warn('Unknown edit type:', editType);
    }
}

// ============================================
// PERSONAL INFO EDITING
// ============================================

function openPersonalInfoModal() {
    const modal = document.getElementById('edit-personal-modal');
    if (!modal) return;
    
    // Load current values
    document.getElementById('edit-hero-title').value = 
        document.getElementById('hero-title').textContent;
    document.getElementById('edit-hero-tagline').value = 
        document.getElementById('hero-tagline').textContent;
    document.getElementById('edit-hero-description').value = 
        document.getElementById('hero-description').textContent.trim();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePersonalInfoModal() {
    const modal = document.getElementById('edit-personal-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function savePersonalInfo(e) {
    e.preventDefault();
    
    const data = {
        heroTitle: document.getElementById('edit-hero-title').value,
        heroTagline: document.getElementById('edit-hero-tagline').value,
        heroDescription: document.getElementById('edit-hero-description').value
    };
    
    // Update DOM
    document.getElementById('hero-title').textContent = data.heroTitle;
    document.getElementById('hero-tagline').textContent = data.heroTagline;
    document.getElementById('hero-description').textContent = data.heroDescription;
    
    // Save to localStorage
    StorageManager.set(StorageManager.keys.PERSONAL_INFO, data);
    
    showNotification('Personal information updated!', 'success');
    closePersonalInfoModal();
}

// ============================================
// ABOUT INFO EDITING
// ============================================

function openAboutInfoModal() {
    const modal = document.getElementById('edit-about-modal');
    if (!modal) return;
    
    // Load current values
    document.getElementById('edit-about-name').value = 
        document.getElementById('about-name').textContent;
    document.getElementById('edit-about-title').value = 
        document.getElementById('about-title').textContent;
    document.getElementById('edit-about-bio').value = 
        document.getElementById('about-bio').textContent.trim();
    document.getElementById('edit-about-drive').value = 
        document.getElementById('about-drive').textContent.trim();
    document.getElementById('edit-about-goals').value = 
        document.getElementById('about-goals').textContent.trim();
    document.getElementById('edit-profile-photo').value = 
        document.getElementById('profile-photo').src;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAboutInfoModal() {
    const modal = document.getElementById('edit-about-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function saveAboutInfo(e) {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('edit-about-name').value,
        title: document.getElementById('edit-about-title').value,
        bio: document.getElementById('edit-about-bio').value,
        drive: document.getElementById('edit-about-drive').value,
        goals: document.getElementById('edit-about-goals').value,
        photo: document.getElementById('edit-profile-photo').value
    };
    
    // Update DOM
    document.getElementById('about-name').textContent = data.name;
    document.getElementById('about-title').textContent = data.title;
    document.getElementById('about-bio').textContent = data.bio;
    document.getElementById('about-drive').textContent = data.drive;
    document.getElementById('about-goals').textContent = data.goals;
    document.getElementById('profile-photo').src = data.photo;
    
    // Save to localStorage
    StorageManager.set(StorageManager.keys.ABOUT_INFO, data);
    
    showNotification('About information updated!', 'success');
    closeAboutInfoModal();
}

// ============================================
// CONTACT INFO EDITING
// ============================================

function openContactInfoModal() {
    const modal = document.getElementById('edit-contact-modal');
    if (!modal) return;
    
    // Load current values from links
    const emailLink = document.getElementById('contact-email');
    const linkedinLink = document.getElementById('contact-linkedin');
    const githubLink = document.getElementById('contact-github');
    const twitterLink = document.getElementById('contact-twitter');
    
    document.getElementById('edit-contact-email').value = 
        emailLink ? emailLink.href.replace('mailto:', '') : '';
    document.getElementById('edit-contact-linkedin').value = 
        linkedinLink ? linkedinLink.href : '';
    document.getElementById('edit-contact-github').value = 
        githubLink ? githubLink.href : '';
    document.getElementById('edit-contact-twitter').value = 
        twitterLink ? twitterLink.href : '';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeContactInfoModal() {
    const modal = document.getElementById('edit-contact-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function saveContactInfo(e) {
    e.preventDefault();
    
    const data = {
        email: document.getElementById('edit-contact-email').value,
        linkedin: document.getElementById('edit-contact-linkedin').value,
        github: document.getElementById('edit-contact-github').value,
        twitter: document.getElementById('edit-contact-twitter').value
    };
    
    // Update DOM
    const emailLink = document.getElementById('contact-email');
    const linkedinLink = document.getElementById('contact-linkedin');
    const githubLink = document.getElementById('contact-github');
    const twitterLink = document.getElementById('contact-twitter');
    
    if (emailLink) emailLink.href = `mailto:${data.email}`;
    if (linkedinLink) linkedinLink.href = data.linkedin;
    if (githubLink) githubLink.href = data.github;
    if (twitterLink) twitterLink.href = data.twitter;
    
    // Save to localStorage
    StorageManager.set(StorageManager.keys.CONTACT_INFO, data);
    
    showNotification('Contact information updated!', 'success');
    closeContactInfoModal();
}

// ============================================
// EXPERIENCE MANAGEMENT
// ============================================

function openExperienceModal(experienceId = null) {
    const modal = document.getElementById('experience-modal');
    const modalTitle = document.getElementById('experience-modal-title');
    const deleteBtn = document.getElementById('delete-experience');
    const form = document.getElementById('experience-form');
    
    if (!modal) return;
    
    currentEditingExperience = experienceId;
    
    if (experienceId !== null) {
        //Editing existing
        modalTitle.textContent = 'Edit Experience';
        deleteBtn.style.display = 'block';
        
        const experience = portfolioData.experience.find(exp => exp.id === experienceId);
        if (experience) {
            document.getElementById('experience-id').value = experience.id;
            document.getElementById('exp-role').value = experience.role;
            document.getElementById('exp-company').value = experience.company;
            document.getElementById('exp-company-link').value = experience.companyLink || '';
            document.getElementById('exp-date').value = experience.date;
            document.getElementById('exp-description').value = experience.description;
            document.getElementById('exp-technologies').value = experience.technologies.join(', ');
            document.getElementById('exp-achievements').value = experience.achievements.join('\n');
        }
    } else {
        // Adding new
        modalTitle.textContent = 'Add Experience';
        deleteBtn.style.display = 'none';
        form.reset();
        document.getElementById('experience-id').value = '';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeExperienceModal() {
    const modal = document.getElementById('experience-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    currentEditingExperience = null;
}

function saveExperience(e) {
    e.preventDefault();
    
    const experienceId = document.getElementById('experience-id').value;
    const techArray = document.getElementById('exp-technologies').value
        .split(',').map(t => t.trim()).filter(t => t);
    const achievementsArray = document.getElementById('exp-achievements').value
        .split('\n').map(a => a.trim()).filter(a => a);
    
    const experienceData = {
        id: experienceId || Date.now(),
        role: document.getElementById('exp-role').value,
        company: document.getElementById('exp-company').value,
        companyLink: document.getElementById('exp-company-link').value || '#',
        date: document.getElementById('exp-date').value,
        description: document.getElementById('exp-description').value,
        technologies: techArray,
        achievements: achievementsArray
    };
    
    if (experienceId) {
        // Update existing
        const index = portfolioData.experience.findIndex(exp => exp.id == experienceId);
        if (index !== -1) {
            portfolioData.experience[index] = experienceData;
        }
    } else {
        // Add new
        portfolioData.experience.push(experienceData);
    }
    
    // Save to localStorage
    StorageManager.set(StorageManager.keys.EXPERIENCE, portfolioData.experience);
    
    // Re-render
    renderExperience();
    showNotification('Experience saved!', 'success');
    closeExperienceModal();
}

function deleteExperience() {
    if (!confirm('Are you sure you want to delete this experience?')) return;
    
    const experienceId = document.getElementById('experience-id').value;
    portfolioData.experience = portfolioData.experience.filter(exp => exp.id != experienceId);
    
    // Save to localStorage
    StorageManager.set(StorageManager.keys.EXPERIENCE, portfolioData.experience);
    
    // Re-render
    renderExperience();
    showNotification('Experience deleted!', 'success');
    closeExperienceModal();
}

// Update renderExperience to include edit buttons
function renderExperienceWithEditButtons() {
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
            <div class="item-actions admin-only">
                <button class="item-action-btn" onclick="openExperienceModal(${exp.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="item-action-btn danger" onclick="deleteExperienceDirectly(${exp.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

function deleteExperienceDirectly(experienceId) {
    if (!confirm('Are you sure you want to delete this experience?')) return;
    
    portfolioData.experience = portfolioData.experience.filter(exp => exp.id !== experienceId);
    StorageManager.set(StorageManager.keys.EXPERIENCE, portfolioData.experience);
    renderExperienceWithEditButtons();
    showNotification('Experience deleted!', 'success');
}

// ============================================
// SKILLS MANAGEMENT
// ============================================

function openSkillModal(skillName = null) {
    const modal = document.getElementById('skill-modal');
    const modalTitle = document.getElementById('skill-modal-title');
    const deleteBtn = document.getElementById('delete-skill');
    const form = document.getElementById('skill-form');
    
    if (!modal) return;
    
    currentEditingSkill = skillName;
    
    if (skillName) {
        // Editing existing
        modalTitle.textContent = 'Edit Skill';
        deleteBtn.style.display = 'block';
        
        const skill = portfolioData.skills.find(s => s.name === skillName);
        if (skill) {
            document.getElementById('skill-old-name').value = skill.name;
            document.getElementById('skill-name').value = skill.name;
            document.getElementById('skill-icon').value = skill.icon;
            document.getElementById('skill-level').value = skill.level;
            document.getElementById('skill-level-display').textContent = skill.level;
            document.getElementById('skill-color').value = skill.color;
        }
    } else {
        // Adding new
        modalTitle.textContent = 'Add Skill';
        deleteBtn.style.display = 'none';
        form.reset();
        document.getElementById('skill-old-name').value = '';
        document.getElementById('skill-level-display').textContent = '50';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSkillModal() {
    const modal = document.getElementById('skill-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    currentEditingSkill = null;
}

function saveSkill(e) {
    e.preventDefault();
    
    const oldName = document.getElementById('skill-old-name').value;
    
    const skillData = {
        name: document.getElementById('skill-name').value,
        icon: document.getElementById('skill-icon').value,
        level: parseInt(document.getElementById('skill-level').value),
        color: document.getElementById('skill-color').value
    };
    
    if (oldName) {
        // Update existing
        const index = portfolioData.skills.findIndex(s => s.name === oldName);
        if (index !== -1) {
            portfolioData.skills[index] = skillData;
        }
    } else {
        // Add new
        portfolioData.skills.push(skillData);
    }
    
    // Save to localStorage
    StorageManager.set(StorageManager.keys.SKILLS, portfolioData.skills);
    
    // Re-render
    renderSkillsWithEditButtons();
    showNotification('Skill saved!', 'success');
    closeSkillModal();
}

function deleteSkill() {
    if (!confirm('Are you sure you want to delete this skill?')) return;
    
    const skillName = document.getElementById('skill-old-name').value;
    portfolioData.skills = portfolioData.skills.filter(s => s.name !== skillName);
    
    // Save to localStorage
    StorageManager.set(StorageManager.keys.SKILLS, portfolioData.skills);
    
    // Re-render
    renderSkillsWithEditButtons();
    showNotification('Skill deleted!', 'success');
    closeSkillModal();
}

function renderSkillsWithEditButtons() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-item" data-skill="${skill.name}">
            <i class="${skill.icon} skill-icon" style="color: ${skill.color}"></i>
            <span class="skill-name">${skill.name}</span>
            <div class="skill-level">
                <div class="skill-level-bar" style="width: ${skill.level}%"></div>
            </div>
            <div class="item-actions admin-only" style="margin-top: 0.5rem;">
                <button class="item-action-btn" onclick="openSkillModal('${skill.name}')" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="item-action-btn danger" onclick="deleteSkillDirectly('${skill.name}')" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    // Animate skill bars
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

function deleteSkillDirectly(skillName) {
    if (!confirm('Are you sure you want to delete this skill?')) return;
    
    portfolioData.skills = portfolioData.skills.filter(s => s.name !== skillName);
    StorageManager.set(StorageManager.keys.SKILLS, portfolioData.skills);
    renderSkillsWithEditButtons();
    showNotification('Skill deleted!', 'success');
}

// Update renderProjects to include edit/delete buttons
function renderProjectsWithEditButtons(projects = state.filteredProjects) {
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
                <div class="item-actions admin-only">
                    <button class="item-action-btn" onclick="event.stopPropagation(); editProject(${project.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="item-action-btn danger" onclick="event.stopPropagation(); deleteProject(${project.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
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

function editProject(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;
    
    // Populate add project modal with existing data
    document.getElementById('p-title').value = project.title;
    document.getElementById('p-subtitle').value = project.subtitle;
    document.getElementById('p-image').value = project.image;
    document.getElementById('p-desc').value = project.description;
    document.getElementById('p-tech').value = project.technologies.join(', ');
    document.getElementById('p-demo').value = project.demoLink;
    document.getElementById('p-github').value = project.githubLink;
    
    // Store ID for update
    document.getElementById('add-project-form').dataset.editId = projectId;
    
    openAddProjectModal();
}

function deleteProject(projectId) {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    // Remove from array
    const projectIndex = portfolioData.projects.findIndex(p => p.id === projectId);
    if (projectIndex !== -1) {
        const isStored = portfolioData.projects[projectIndex].stored === true;
        portfolioData.projects.splice(projectIndex, 1);
        
        // Update localStorage if it was a stored project
        if (isStored) {
            const storedProjects = portfolioData.projects.filter(p => p.stored === true);
            StorageManager.set(StorageManager.keys.PROJECTS, storedProjects);
        }
    }
    
    // Re-filter and render
    state.filteredProjects = [...portfolioData.projects];
    renderProjectsWithEditButtons();
    showNotification('Project deleted!', 'success');
}

// Update handleAddProjectSubmit to support edit mode
function handleAddProjectSubmitWithEdit(e) {
    e.preventDefault();
    
    const form = e.target;
    if (!form.checkValidity()) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }

    const editId = form.dataset.editId;
    
    const projectData = {
        id: editId ? parseInt(editId) : Date.now(),
        title: document.getElementById('p-title').value,
        subtitle: document.getElementById('p-subtitle').value,
        image: document.getElementById('p-image').value,
        description: document.getElementById('p-desc').value,
        technologies: document.getElementById('p-tech').value.split(',').map(t => t.trim()),
        demoLink: document.getElementById('p-demo').value || '#',
        githubLink: document.getElementById('p-github').value || '#',
        features: ["User generated project"],
        challenges: "N/A",
        solutions: "N/A",
        impact: ["N/A"],
        stored: true
    };

    if (editId) {
        // Update existing
        const index = portfolioData.projects.findIndex(p => p.id == editId);
        if (index !== -1) {
            portfolioData.projects[index] = projectData;
        }
        delete form.dataset.editId;
    } else {
        // Add new
        portfolioData.projects.push(projectData);
    }

    // Save stored projects to localStorage
    const storedProjects = portfolioData.projects.filter(p => p.stored === true);
    StorageManager.set(StorageManager.keys.PROJECTS, storedProjects);

    // Re-render
    state.filteredProjects = [...portfolioData.projects];
    renderProjectsWithEditButtons();
    
    showNotification(editId ? 'Project updated!' : 'Project added!', 'success');
    form.reset();
    closeAddProjectModal();
}

// ============================================
// DATA IMPORT/EXPORT
// ============================================

function exportPortfolioData() {
    const data = StorageManager.exportAll();
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Data exported successfully!', 'success');
}

function importPortfolioData(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result);
            
            if (confirm('This will replace all your current portfolio data. Are you sure?')) {
                StorageManager.importAll(data);
                loadStoredData();
                
                // Re-render everything
                renderProjectsWithEditButtons();
                renderExperienceWithEditButtons();
                renderSkillsWithEditButtons();
                
                showNotification('Data imported successfully! Refreshing...', 'success');
                setTimeout(() => location.reload(), 1500);
            }
        } catch (error) {
            showNotification('Error importing data: Invalid file format', 'error');
            console.error('Import error:', error);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    e.target.value = '';
}

function resetToDefaults() {
   if (!confirm('This will reset all your portfolio data to defaults. This cannot be undone. Are you sure?')) {
        return;
    }
    
    StorageManager.clearAll();
    showNotification('Resetting to defaults...', 'info');
    setTimeout(() => location.reload(), 1000);
}

// ============================================
// LOAD STORED DATA
// ============================================

function loadStoredData() {
    // Load personal info
    const personalInfo = StorageManager.get(StorageManager.keys.PERSONAL_INFO);
    if (personalInfo) {
        if (document.getElementById('hero-title')) {
            document.getElementById('hero-title').textContent = personalInfo.heroTitle;
        }
        if (document.getElementById('hero-tagline')) {
            document.getElementById('hero-tagline').textContent = personalInfo.heroTagline;
        }
        if (document.getElementById('hero-description')) {
            document.getElementById('hero-description').textContent = personalInfo.heroDescription;
        }
    }
    
    // Load about info
    const aboutInfo = StorageManager.get(StorageManager.keys.ABOUT_INFO);
    if (aboutInfo) {
        if (document.getElementById('about-name')) {
            document.getElementById('about-name').textContent = aboutInfo.name;
        }
        if (document.getElementById('about-title')) {
            document.getElementById('about-title').textContent = aboutInfo.title;
        }
        if (document.getElementById('about-bio')) {
            document.getElementById('about-bio').textContent = aboutInfo.bio;
        }
        if (document.getElementById('about-drive')) {
            document.getElementById('about-drive').textContent = aboutInfo.drive;
        }
        if (document.getElementById('about-goals')) {
            document.getElementById('about-goals').textContent = aboutInfo.goals;
        }
        if (document.getElementById('profile-photo')) {
            document.getElementById('profile-photo').src = aboutInfo.photo;
        }
    }
    
    // Load contact info
    const contactInfo = StorageManager.get(StorageManager.keys.CONTACT_INFO);
    if (contactInfo) {
        const emailLink = document.getElementById('contact-email');
        const linkedinLink = document.getElementById('contact-linkedin');
        const githubLink = document.getElementById('contact-github');
        const twitterLink = document.getElementById('contact-twitter');
        
        if (emailLink) emailLink.href = `mailto:${contactInfo.email}`;
        if (linkedinLink) linkedinLink.href = contactInfo.linkedin;
        if (githubLink) githubLink.href = contactInfo.github;
        if (twitterLink) twitterLink.href = contactInfo.twitter;
    }
    
    // Load experience
    const storedExperience = StorageManager.get(StorageManager.keys.EXPERIENCE);
    if (storedExperience && storedExperience.length > 0) {
        portfolioData.experience = storedExperience;
    }
    
    // Load skills
    const storedSkills = StorageManager.get(StorageManager.keys.SKILLS);
    if (storedSkills && storedSkills.length > 0) {
        portfolioData.skills = storedSkills;
    }
    
    // Projects are already loaded in the main initialization
}

// ============================================
// MODAL CLOSE HANDLERS
// ============================================

function setupEditModalCloseHandlers() {
    // Personal Info Modal
    const closePersonalBtn = document.getElementById('close-personal-modal');
    if (closePersonalBtn) {
        closePersonalBtn.addEventListener('click', closePersonalInfoModal);
    }
    document.getElementById('edit-personal-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'edit-personal-modal') closePersonalInfoModal();
    });
    
    // About Info Modal
    const closeAboutBtn = document.getElementById('close-about-modal');
    if (closeAboutBtn) {
        closeAboutBtn.addEventListener('click', closeAboutInfoModal);
    }
    document.getElementById('edit-about-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'edit-about-modal') closeAboutInfoModal();
    });
    
    // Contact Info Modal
    const closeContactBtn = document.getElementById('close-contact-modal');
    if (closeContactBtn) {
        closeContactBtn.addEventListener('click', closeContactInfoModal);
    }
    document.getElementById('edit-contact-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'edit-contact-modal') closeContactInfoModal();
    });
    
    // Experience Modal
    const closeExpBtn = document.getElementById('close-experience-modal');
    if (closeExpBtn) {
        closeExpBtn.addEventListener('click', closeExperienceModal);
    }
    document.getElementById('experience-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'experience-modal') closeExperienceModal();
    });
    
    // Skill Modal
    const closeSkillBtn = document.getElementById('close-skill-modal');
    if (closeSkillBtn) {
        closeSkillBtn.addEventListener('click', closeSkillModal);
    }
    document.getElementById('skill-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'skill-modal') closeSkillModal();
    });
    
    // ESC key to close all modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePersonalInfoModal();
            closeAboutInfoModal();
            closeContactInfoModal();
            closeExperienceModal();
            closeSkillModal();
        }
    });
}

// ============================================
// FORM SUBMIT HANDLERS
// ============================================

function setupEditFormHandlers() {
    // Personal Info Form
    const personalForm = document.getElementById('edit-personal-form');
    if (personalForm) {
        personalForm.addEventListener('submit', savePersonalInfo);
    }
    
    // About Info Form
    const aboutForm = document.getElementById('edit-about-form');
    if (aboutForm) {
        aboutForm.addEventListener('submit', saveAboutInfo);
    }
    
    // Contact Info Form
    const contactForm = document.getElementById('edit-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', saveContactInfo);
    }
    
    // Experience Form
    const experienceForm = document.getElementById('experience-form');
    if (experienceForm) {
        experienceForm.addEventListener('submit', saveExperience);
    }
    
    // Skill Form
    const skillForm = document.getElementById('skill-form');
    if (skillForm) {
        skillForm.addEventListener('submit', saveSkill);
    }
    
    // Delete buttons
    const deleteExpBtn = document.getElementById('delete-experience');
    if (deleteExpBtn) {
        deleteExpBtn.addEventListener('click', deleteExperience);
    }
    
    const deleteSkillBtn = document.getElementById('delete-skill');
    if (deleteSkillBtn) {
        deleteSkillBtn.addEventListener('click', deleteSkill);
    }
    
    // Override the existing add project form handler
    const addProjectForm = document.getElementById('add-project-form');
    if (addProjectForm) {
        addProjectForm.removeEventListener('submit', handleAddProjectSubmit);
        addProjectForm.addEventListener('submit', handleAddProjectSubmitWithEdit);
    }
}

// Override render functions to use edit-enabled versions
const originalRenderProjects = renderProjects;
const originalRenderExperience = renderExperience;
const originalRenderSkills = renderSkills;

renderProjects = renderProjectsWithEditButtons;
renderExperience = renderExperienceWithEditButtons;
renderSkills = renderSkillsWithEditButtons;

// Initialize admin system when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAdminMode);
} else {
    initializeAdminMode();
}
