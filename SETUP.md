# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit: **http://localhost:3000**

## ✏️ Edit Content

All content is in the `/data` folder:

- **`site-config.json`** - Site title, navigation, hero section, about, contact
- **`projects.json`** - All your projects
- **`experience.json`** - Work experience
- **`skills.json`** - Technical skills

**Just edit the JSON files and see changes instantly!**

## 📝 Example: Add a Project

1. Open `data/projects.json`
2. Add a new project object:
```json
{
  "id": 5,
  "title": "My New Project",
  "subtitle": "Project Type",
  "description": "Description here...",
  "image": "https://your-image-url.com/image.jpg",
  "technologies": ["React", "Node.js"],
  "demoLink": "https://demo.com",
  "githubLink": "https://github.com/user/project",
  "features": ["Feature 1", "Feature 2"],
  "challenges": "Challenge...",
  "solutions": "Solution...",
  "impact": ["Impact 1"],
  "order": 5
}
```
3. Save - changes appear automatically!

## 🔌 Connect to CMS

See `CMS-INTEGRATION.md` for:
- Sanity CMS setup
- Strapi CMS setup
- Contentful setup
- Webflow CMS setup
- Custom API integration

## 🎨 Design

All original design is preserved:
- ✅ Glassmorphism effects
- ✅ Liquid animations
- ✅ Dark black background
- ✅ All button effects

## 📚 More Info

- `README-CMS.md` - Full CMS documentation
- `CMS-INTEGRATION.md` - CMS integration guides
- Component files - All are fully documented

---

**That's it! Your portfolio is ready to customize.** 🎉
