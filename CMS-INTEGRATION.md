# CMS Integration Guide

This portfolio is fully CMS-ready and can be integrated with any headless CMS. All content is stored in JSON files by default, but can easily be connected to a CMS.

## 🎯 CMS-Ready Architecture

### Current Structure
- **Data Files**: All content in `/data` folder (JSON format)
- **Components**: Fully prop-driven React components
- **No Hard-coded Content**: Everything comes from data files or props

### Supported CMS Platforms

#### 1. Sanity CMS
```typescript
// lib/cms-sanity.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

export async function getProjectsFromSanity() {
  return await client.fetch(`
    *[_type == "project"] | order(order asc) {
      id,
      title,
      subtitle,
      description,
      "image": image.asset->url,
      technologies,
      demoLink,
      githubLink,
      features,
      challenges,
      solutions,
      impact,
      order
    }
  `);
}
```

#### 2. Strapi CMS
```typescript
// lib/cms-strapi.ts
export async function getProjectsFromStrapi() {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/projects?populate=*`,
    {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );
  return response.json();
}
```

#### 3. Contentful CMS
```typescript
// lib/cms-contentful.ts
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getProjectsFromContentful() {
  const entries = await client.getEntries({
    content_type: 'project',
    order: 'fields.order',
  });
  return entries.items;
}
```

#### 4. Webflow CMS
Use Webflow's REST API or export to JSON:
```typescript
// lib/cms-webflow.ts
export async function getProjectsFromWebflow() {
  const response = await fetch(
    `https://api.webflow.com/v2/collections/${COLLECTION_ID}/items`,
    {
      headers: {
        'Authorization': `Bearer ${process.env.WEBFLOW_API_TOKEN}`,
      },
    }
  );
  return response.json();
}
```

## 📝 Content Structure

### Site Configuration (`site-config.json`)
- Site metadata (title, logo, description)
- Navigation items
- Hero section content
- About section content
- Contact section content
- Section titles and settings

### Projects (`projects.json`)
- Project details
- Images (URLs or CMS asset references)
- Technologies array
- Links (demo, GitHub)
- Features, challenges, solutions, impact

### Experience (`experience.json`)
- Job roles and companies
- Dates and descriptions
- Technologies used
- Achievements list

### Skills (`skills.json`)
- Skill names
- Icons (Font Awesome classes)
- Proficiency levels (0-100)
- Colors
- Display order

## 🔄 Migration Steps

### Step 1: Choose Your CMS
1. Set up your CMS account (Sanity, Strapi, Contentful, etc.)
2. Create collections/schemas matching the JSON structure

### Step 2: Update Data Fetching
1. Open `/lib/cms.ts`
2. Replace JSON imports with CMS API calls
3. Update function implementations

### Step 3: Environment Variables
Create `.env.local`:
```env
CMS_TYPE=sanity
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
# OR
STRAPI_API_URL=https://your-strapi-instance.com
STRAPI_API_TOKEN=your_token
```

### Step 4: Update Components (if needed)
Components are already CMS-ready! They accept props from any data source.

## ✅ CMS Requirements Checklist

- ✅ All text content editable via CMS
- ✅ All images replaceable via CMS
- ✅ Navigation items editable
- ✅ Projects as CMS collection
- ✅ Experience as CMS collection
- ✅ Skills as CMS collection
- ✅ Buttons and links configurable
- ✅ No hard-coded content
- ✅ Reorderable items (via `order` field)
- ✅ Add/Edit/Delete via CMS interface

## 🎨 Preserved Features

All design elements remain unchanged:
- ✅ Glassmorphism effects
- ✅ Liquid animations
- ✅ Button hover effects
- ✅ Modal interactions
- ✅ Responsive design
- ✅ Dark black background

## 📚 Example: Adding a New Project

### Via JSON (Current)
1. Edit `/data/projects.json`
2. Add new project object
3. Set `order` for display position

### Via CMS (After Integration)
1. Log into your CMS dashboard
2. Navigate to "Projects" collection
3. Click "Add New"
4. Fill in all fields
5. Upload image
6. Save and publish

The portfolio will automatically display the new project!

## 🔌 API Integration

For custom APIs, update the fetch functions in `/lib/cms.ts`:

```typescript
export async function getProjects(): Promise<Project[]> {
  // Replace with your API endpoint
  const response = await fetch(`${process.env.API_URL}/projects`);
  const data = await response.json();
  return data.projects;
}
```

## 🚀 Deployment

After CMS integration:
1. Set environment variables in your hosting platform
2. Build: `npm run build`
3. Deploy to Vercel, Netlify, or your preferred platform
4. Content updates automatically reflect on the live site!

---

**All content is now CMS-driven and fully editable without code changes!** 🎉
