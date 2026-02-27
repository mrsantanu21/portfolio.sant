# Liquid Glass Portfolio

A modern, premium portfolio website featuring **Liquid Glass + Android 16** design aesthetics with glassmorphism effects, smooth animations, and a fully responsive layout.

## ✨ Features

### Design
- **Glassmorphism UI** - Semi-transparent panels with realistic glass optics
- **Liquid Animations** - Smooth, fluid transitions and hover effects
- **Android 16 Inspired** - Modern color palette with neon accents
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark Mode** - Beautiful dark theme with adaptive transparency

### Sections
- ✅ **Header/Navigation** - Sticky navigation with active section highlighting
- ✅ **Hero Section** - Professional introduction with CTA buttons
- ✅ **Featured Projects** - Interactive project cards with modals
- ✅ **Technical Skills** - Visual skill bars with icons
- ✅ **Work Experience** - Timeline-style experience showcase
- ✅ **About Section** - Personal bio, goals, and motivations
- ✅ **Contact Section** - Multiple contact methods and message form

### Interactive Features
- Smooth scrolling navigation
- Project modal with detailed information
- Contact form with validation
- Search functionality (UI ready)
- Project carousel controls
- Keyboard shortcuts (ESC to close modals)
- Ripple effects on interactions

## 🚀 Quick Start

1. **Open the portfolio**
   - Simply open `index.html` in your web browser
   - Or use a local server for best experience:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

2. **Customize your content**
   - Edit `script.js` to update your projects, experience, and skills
   - Replace placeholder images with your own
   - Update contact links and social media profiles

## 📝 Customization Guide

### 1. Update Personal Information

Edit the following in `index.html`:
- **Name**: Line ~150 (`about-name`)
- **Title**: Line ~151 (`about-title`)
- **Bio**: Lines ~152-156 (`about-bio`, `about-drive`, `about-goals`)
- **Profile Photo**: Line ~144 (update `src` attribute)

### 2. Add Your Projects

Edit `portfolioData.projects` in `script.js`:

```javascript
{
    id: 1,
    title: "Your Project Name",
    subtitle: "Project Type",
    description: "Detailed description...",
    image: "path/to/image.jpg", // Use your own images
    technologies: ["React", "Node.js", "PostgreSQL"],
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/yourusername/project",
    features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
    ],
    challenges: "Challenge description...",
    solutions: "Solution description...",
    impact: [
        "Improved performance by 40%",
        "Reduced load time by 2 seconds"
    ]
}
```

### 3. Update Work Experience

Edit `portfolioData.experience` in `script.js`:

```javascript
{
    role: "Your Job Title",
    company: "Company Name",
    companyLink: "https://company-website.com",
    date: "2020 - Present",
    description: "Job description...",
    technologies: ["React", "Node.js"],
    achievements: [
        "Achievement 1",
        "Achievement 2"
    ]
}
```

### 4. Customize Skills

Edit `portfolioData.skills` in `script.js`:

```javascript
{
    name: "Skill Name",
    icon: "fab fa-icon-class", // Font Awesome icon class
    level: 85, // 0-100 percentage
    color: "#HEXCOLOR" // Icon color
}
```

### 5. Update Contact Links

Edit contact links in `index.html` (around line 200):
- Email: `mailto:your.email@example.com`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourusername`
- Twitter: `https://twitter.com/yourhandle`

### 6. Add Resume Download

Update the resume button link in `index.html` (line ~50):
```html
<a href="path/to/your-resume.pdf" class="resume-btn glass-button" download>
```

### 7. Customize Colors

Edit CSS variables in `styles.css` (lines 5-20):

```css
:root {
    --primary-blue: #4A9EFF;
    --primary-purple: #9C27B0;
    --accent-cyan: #00BCD4;
    /* ... more colors */
}
```

## 🎨 Design Customization

### Glassmorphism Effects
The glass effect is controlled by:
- `backdrop-filter: blur(20px)` - Adjust blur intensity
- `background: rgba(30, 30, 50, 0.4)` - Adjust transparency
- `border: 1px solid rgba(255, 255, 255, 0.1)` - Adjust border opacity

### Animations
- Hover effects: `transform: translateY(-2px)`
- Smooth transitions: `transition: all 0.3s ease`
- Liquid effects: Ripple animations on click

### Typography
- Primary font: **Inter** (modern, clean)
- Headings: **Libre Baskerville** (elegant serif)
- Font sizes are responsive and scale with viewport

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (2-column layout)
- **Tablet**: 768px - 1199px (1-column with sidebar grid)
- **Mobile**: < 768px (Stacked layout)

## 🔧 Advanced Features

### Backend Integration

To make the contact form functional:

1. **Using a service like Formspree**:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using your own backend**:
   - Update `handleFormSubmit()` in `script.js`
   - Send POST request to your API endpoint

### Adding More Sections

1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add JavaScript functionality in `script.js` if needed

### Performance Optimization

- Images: Use optimized formats (WebP, AVIF) and lazy loading
- Fonts: Already using Google Fonts CDN
- Animations: Use `will-change` for frequently animated elements
- Minify CSS/JS for production

## 📦 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactivity and data
└── README.md          # This file
```

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Contributing

Feel free to fork, modify, and customize this portfolio to fit your needs!

## 📧 Support

For questions or issues, please open an issue on GitHub or contact through the portfolio contact form.

---

**Built with ❤️ using modern web technologies**
