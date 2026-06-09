# My Blog - Setup Guide

A modern blog built with [Astro](https://astro.build), featuring markdown-based content, dark mode support, and tag filtering.

## Features

- 📝 **Markdown Blog Posts** - Create posts using markdown files with YAML frontmatter
- 🌙 **Dark Mode** - Automatic theme switching with system preference detection
- 🏷️ **Tag Filtering** - Filter blog posts by tags
- 📱 **Responsive Design** - Mobile-friendly interface
- 💬 **Recommended Posts** - Smart post recommendations based on tags
- 📧 **Contact Form** - Integrated contact form with Netlify Forms support

## Creating Blog Posts

### Post File Format

Create a new `.md` file in `src/content/blog/` with this structure:

```yaml
---
title: "Your Post Title"
author: "Your Name"
date: 2026-06-09
description: "A brief description of your post"
tags: ["tag1", "tag2"]
image: "/images/post-image.jpg"
---

Your markdown content here...
```

### Required Frontmatter Fields
- `title` - Post title
- `author` - Author name
- `date` - Publication date (YYYY-MM-DD format)
- `description` - Short description for blog list
- `image` - Path to featured image (`/images/filename.jpg`)

### Optional Fields
- `tags` - Array of tag strings for filtering and recommendations

## Draft Posts

Mark a post as a draft by adding this comment immediately after the frontmatter:

```
<!-- draft -->
```

Draft posts won't appear in listings but remain accessible via direct URL at `/blog/[slug]`.

## Images

- Place images in `public/images/`
- Reference in frontmatter: `image: "/images/your-image.jpg"`
- Images display responsively with flexible sizing

## Pages

- **Home** (`/`) - Shows 5 latest posts with intro
- **Blog** (`/blog`) - All published posts with tag filtering
- **Contact** (`/contact`) - Contact form and information
- **Individual Post** (`/blog/[slug]`) - Full post with recommended posts

## Theme Customization

### Colors

CSS variables in `src/styles/global.css`:

**Light Mode:**
- `--bg-primary` - Main background
- `--text-primary` - Main text color
- `--text-secondary` - Secondary text
- `--border-color` - Borders
- `--code-bg` - Code blocks

**Dark Mode:** Automatically switches based on system preference or user toggle

### Site Settings

Edit `src/consts.ts`:
- `SITE_TITLE`
- `SITE_DESCRIPTION`

## Development

```bash
npm install
npm run dev        # Start at localhost:3000
npm run build      # Build to dist/
```

## Deployment

### Netlify
1. Connect GitHub repo to Netlify
2. Build: `npm run build`
3. Publish directory: `dist/`
4. Forms work automatically

### Vercel
1. Connect GitHub repo
2. Auto-detects Astro config
3. One-click deploy

## Tag System

Tags appear on:
- Individual post pages (for navigation)
- Blog list page (for filtering)
- Recommended posts (for similarity)

Example URL: `/blog?tag=astro` shows all posts tagged "astro"

## Contact Form

Uses Netlify Forms. To use:
1. Deploy to Netlify
2. Update email in `src/pages/contact.astro`
3. Form submissions auto-save in Netlify dashboard

For other platforms, integrate Formspree or custom backend.
