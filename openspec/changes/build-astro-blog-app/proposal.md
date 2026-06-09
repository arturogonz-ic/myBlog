## Why

Transform the Astro blog from a template into a fully-featured blog platform with markdown-based content generation, essential pages (home, blog list, contact), and theme switching capabilities. This enables content creators to publish blog posts by simply adding markdown files while providing readers with a modern, accessible interface with theme preferences.

## What Changes

- Add automatic blog post generation from markdown files in a content directory
- Create a blog listing page that displays all published posts
- Build a dedicated home page with blog introduction and featured content
- Add a contact page for reader inquiries
- Implement light and dark mode theme switching with user preference persistence

## Capabilities

### New Capabilities
- `blog-post-generation`: Automatically generate blog post pages from markdown files in a content directory, including metadata parsing (title, date, description, tags)
- `blog-list-page`: Display all published blog posts with filtering, sorting, and pagination options
- `home-page`: Landing page featuring blog introduction, featured posts, and call-to-action to blog section
- `contact-page`: Contact form and information page for reader inquiries
- `theme-switcher`: Light/dark mode toggle with client-side persistence of user preference

### Modified Capabilities

## Impact

- Affects: Site structure, routing, component organization, styling approach
- Dependencies: Astro's static generation, markdown processing libraries, CSS variables for theming
- New directories: `src/content/blog/`, `src/pages/blog/`, `src/components/`
- Updates to: `src/pages/`, global styles for theme support, layout components
