# CMS-Driven Portfolio - Setup Guide

## 🎯 Overview

This portfolio has been converted to a **fully CMS-driven** Next.js/React application. **ALL content is editable** through JSON files (development) or any headless CMS (production) without touching code.

## ✅ CMS Requirements Met

- ✅ **All text content** editable via CMS/props
- ✅ **All images** replaceable via CMS
- ✅ **Navigation items** editable
- ✅ **Projects** as CMS collection
- ✅ **Experience** as CMS collection  
- ✅ **Skills** as CMS collection
- ✅ **Buttons and links** configurable
- ✅ **No hard-coded content** - everything is data-driven
- ✅ **Reorderable items** via `order` field
- ✅ **Add/Edit/Delete** via CMS interface

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Edit Content

All content is in `/data` folder:
- `site-config.json` - Site settings, navigation, hero, about, contact
- `projects.json` - All projects
- `experience.json` - Work experience
- `skills.json` - Technical skills

**Edit any JSON file and see changes instantly!**

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page (fetches CMS data)
│   └── styles.css          # All styles (preserved)
├── components/             # React components (all prop-driven)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── ...
├── data/                   # CMS Data (JSON files)
│   ├── site-config.json
│   ├── projects.json
│   ├── experience.json
│   └── skills.json
├── lib/
│   └── cms.ts             # CMS data fetching utilities
└── package.json
```

## 📝 Editing Content

### Edit Site Configuration

Open `data/site-config.json`:

```json
{
  "site": {
    "title": "Your Portfolio Title",
    "logo": "Your Logo"
  },
  "hero": {
    "title": "Welcome to My Portfolio",
    "tagline": "Your Tagline",
    "description": "Your description..."
  }
}
```

### Add a New Project

Edit `data/projects.json`:

```json
{
  "projects": [
    {
      "id": 5,
      "title": "My New Project",
      "subtitle": "Project Type",
      "description": "Project description...",
      "image": "https://your-image-url.com/image.jpg",
      "technologies": ["React", "Node.js"],
      "demoLink": "https://demo-url.com",
      "githubLink": "https://github.com/username/project",
      "features": ["Feature 1", "Feature 2"],
      "challenges": "Challenge description",
      "solutions": "Solution description",
      "impact": ["Impact 1", "Impact 2"],
      "order": 5
    }
  ]
}
```

### Update Experience

Edit `data/experience.json`:

```json
{
  "experience": [
    {
      "id": 1,
      "role": "Your Role",
      "company": "Company Name",
      "companyLink": "https://company.com",
      "date": "2020 - Present",
      "description": "Job description...",
      "technologies": ["Tech 1", "Tech 2"],
      "achievements": ["Achievement 1", "Achievement 2"],
      "order": 1
    }
  ]
}
```

### Modify Skills

Edit `data/skills.json`:

```json
{
  "skills": [
    {
      "id": 1,
      "name": "Skill Name",
      "icon": "fab fa-icon-class",
      "level": 90,
      "color": "#HEXCOLOR",
      "order": 1
    }
  ]
}
```

## 🔌 CMS Integration

### Connect to Headless CMS

1. **Choose your CMS**: Sanity, Strapi, Contentful, Webflow, etc.

2. **Update `/lib/cms.ts`**:
   - Replace JSON imports with CMS API calls
   - See `CMS-INTEGRATION.md` for examples

3. **Set Environment Variables**:
   ```env
   CMS_TYPE=sanity
   SANITY_PROJECT_ID=your_id
   SANITY_DATASET=production
   ```

4. **Deploy**: Content updates automatically!

See `CMS-INTEGRATION.md` for detailed integration guides.

## 🎨 Design Preserved

All original design elements are **100% preserved**:
- ✅ Glassmorphism effects
- ✅ Liquid animations
- ✅ Button hover effects
- ✅ Dark black background
- ✅ All visual effects and transitions

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Other Platforms

Any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 🔄 Content Updates

### Via JSON (Development)
1. Edit JSON files in `/data`
2. Save file
3. Changes appear instantly (hot reload)

### Via CMS (Production)
1. Log into CMS dashboard
2. Edit content through UI
3. Changes reflect on live site automatically

## 📚 Component Props

All components accept props - no hard-coded values:

```tsx
<Header
  logo="Your Logo"
  navigationItems={navItems}
  showSearch={true}
  searchPlaceholder="Search..."
  resumeButton={resumeBtn}
/>

<Projects
  title="My Projects"
  projects={projectsArray}
  showControls={true}
  showAddButton={true}
  showPreviewButton={true}
/>
```

## ✅ CMS Compliance Checklist

- ✅ No static text in components
- ✅ All images from props/data
- ✅ All links configurable
- ✅ All buttons editable
- ✅ Collections for projects/experience/skills
- ✅ Reorderable via `order` field
- ✅ Add/Edit/Delete via CMS
- ✅ Fully responsive
- ✅ SEO-friendly

## 🆘 Troubleshooting

### Styles not loading?
- Ensure `styles.css` is in root directory
- Check import in `app/layout.tsx`

### Components not rendering?
- Run `npm install` to ensure dependencies are installed
- Check browser console for errors

### CMS integration issues?
- Verify environment variables are set
- Check API endpoints and authentication
- See `CMS-INTEGRATION.md` for platform-specific guides

## 📖 Additional Resources

- `CMS-INTEGRATION.md` - Detailed CMS integration guides
- `README.md` - Original portfolio documentation
- Component files in `/components` - All are fully documented

---

**Your portfolio is now 100% CMS-driven!** 🎉

Edit content through JSON files or connect to any headless CMS. All design and effects are preserved.
