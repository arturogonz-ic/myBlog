# My Blog

A modern, feature-rich blog built with **Astro** featuring markdown-based content, dark mode support, tag filtering, and recommended posts.

## ✨ Features

- 📝 **Markdown Blog Posts** - Create posts using markdown files with YAML frontmatter
- 🌙 **Dark/Light Mode** - Automatic theme switching with system preference detection and localStorage persistence
- 🏷️ **Tag Filtering** - Client-side filtering of blog posts by tags with instant results
- 📱 **Responsive Design** - Mobile-friendly interface that works on all devices
- 💬 **Recommended Posts** - Smart post recommendations based on tag matching
- 📧 **Contact Form** - Integrated contact page with Netlify Forms support
- ⚡ **Fast Performance** - Static site generation with optimized assets
- ♿ **Accessible** - Semantic HTML and ARIA labels for accessibility

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:4321 in your browser
```

### Build for Production

```bash
# Build static site
pnpm build

# Preview production build
pnpm preview
```

## 📝 Creating Blog Posts

### File Structure
Create markdown files in `src/content/blog/`:

```
src/content/blog/
├── my-first-post.md
├── another-post.md
└── sample-post.md
```

### Post Format

```yaml
---
title: "Post Title"
author: "Your Name"
date: 2026-06-09
description: "A brief description for the blog list"
tags: ["tag1", "tag2"]
image: "/images/post-image.jpg"
---

# Your Post Content

Write your content in markdown here...
```

### Required Fields
- `title` - Post title
- `author` - Author name
- `date` - Publication date (YYYY-MM-DD)
- `description` - Short description for blog list and metadata
- `image` - Path to featured image (`/images/filename.jpg`)

### Optional Fields
- `tags` - Array of tag strings for filtering and recommendations

## 📋 Markdown Features

Your posts support all standard markdown syntax:
- **Bold** and *italic* text
- Headings (h1-h6)
- Lists and nested items
- Code blocks with syntax highlighting
- Blockquotes
- Links and images
- Tables
- Horizontal rules

## 🎨 Dark/Light Mode

### Theme Features
- Toggle with sun/moon icon in header
- Automatic system preference detection
- Saves preference to browser localStorage
- Smooth transitions between themes

### Customizing Colors
Edit CSS variables in `src/styles/global.css`:

```css
:root {
  /* Light mode colors */
  --bg-primary: #ffffff;
  --text-primary: #1f2937;
  --border-color: #e5e7eb;
}

html.dark {
  /* Dark mode colors */
  --bg-primary: #1f2937;
  --text-primary: #f9fafb;
  --border-color: #374151;
}
```

## 🏷️ Tag Filtering

- Browse posts by tag: Click any tag button to filter
- Tag buttons appear in the filter section and on individual posts
- Results update instantly without page reload
- URL updates to reflect selected tag (e.g., `/blog?tag=astro`)

## 📸 Images

### Adding Images
1. Place images in `public/images/`
2. Reference in frontmatter: `image: "/images/filename.jpg"`
3. Images display at full width with automatic responsive sizing

### Supported Formats
- JPG/JPEG
- PNG
- WebP (recommended for better compression)

## ✍️ Draft Posts

### Marking Posts as Drafts
Add a comment at the very beginning of your post content:

```markdown
---
title: "Draft Post"
author: "You"
date: 2026-06-09
description: "Work in progress"
tags: ["draft"]
image: "/images/draft.jpg"
---

<!-- draft -->

# This post won't appear in listings...
```

### Draft Behavior
- ✅ Accessible via direct URL `/blog/slug`
- ❌ Won't appear in blog list
- ❌ Won't appear on home page
- ✅ Comment visible in page source

## 📖 Pages

- **Home** (`/`) - Introduction with 5 latest posts
- **Blog** (`/blog`) - All published posts with tag filtering
- **Blog Post** (`/blog/[slug]`) - Individual post with recommended posts
- **Contact** (`/contact`) - Contact form and information
- **About** (`/about`) - About page

## 🔗 Site Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ThemeSwitcher.astro
│   ├── FormattedDate.astro
│   └── BaseHead.astro
├── content/
│   └── blog/           # Blog post markdown files
├── layouts/
│   ├── BlogPost.astro  # Blog post layout
│   └── ...
├── pages/              # Page routes
│   ├── index.astro     # Home page
│   ├── blog/
│   │   ├── index.astro # Blog list
│   │   └── [...slug].astro # Individual posts
│   ├── contact.astro   # Contact page
│   └── about.astro     # About page
├── styles/
│   └── global.css      # Global styles and theme variables
├── utils/
│   └── draft.ts        # Draft detection utility
└── consts.ts           # Site configuration
```

## 🛠️ Configuration

### Site Settings
Edit `src/consts.ts`:
```typescript
export const SITE_TITLE = "My Blog";
export const SITE_DESCRIPTION = "Welcome to my blog";
```

### Contact Form
The contact page uses **Netlify Forms** for submissions:
1. Deploy to Netlify for automatic form handling
2. Update email address in `src/pages/contact.astro`
3. Form submissions appear in Netlify dashboard

## 🌐 Deployment

### Netlify (Recommended)
1. Connect GitHub repository to Netlify
2. Build command: `pnpm build`
3. Publish directory: `dist/`
4. Forms work automatically

### Vercel
1. Connect GitHub repository to Vercel
2. Vercel auto-detects Astro
3. Deploy with one click

### GitHub Pages
1. Update `astro.config.mjs` with repository name
2. Enable GitHub Pages in repository settings
3. Deploy via GitHub Actions

## 📚 Technology Stack

- **Astro** - Static site generator
- **Markdown** - Content format
- **TypeScript** - Type safety
- **CSS Custom Properties** - Theme system
- **Netlify Forms** - Contact form backend

## 🎯 Performance

- ⚡ **100/100 Lighthouse** - Optimized for speed
- 📦 **Static Generation** - Pre-built HTML for instant loading
- 🎨 **CSS Variables** - Minimal CSS with theme switching
- 📄 **No JavaScript** - Optional client-side features

## 📖 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Markdown Guide](https://www.markdownguide.org/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 📄 License

MIT - Feel free to use this blog template for your own projects!

---

**Ready to start blogging?** Create your first post in `src/content/blog/` and run `pnpm dev` to see it live! 🚀
