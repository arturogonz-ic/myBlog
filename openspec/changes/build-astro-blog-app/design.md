## Context

The Astro blog project is a newly initialized blog starting from the Astro template. We need to build out core features: content management via markdown, multiple landing pages, and theme switching. Astro provides excellent static generation and file-based routing which are well-suited to this use case.

## Goals / Non-Goals

**Goals:**
- Enable content creation through simple markdown files with frontmatter metadata
- Provide essential pages (home, blog list, contact) with clean navigation
- Implement persistent theme switching that respects user preferences
- Build a scalable architecture that makes adding new posts trivial

**Non-Goals:**
- Comment systems or user authentication
- SEO optimization (can be added later with middleware)
- Analytics integration or backend database
- Blog post editing UI or admin dashboard

## Decisions

**1. Content Management: File-based with Astro Collections**
- Use Astro's Content Collections API for markdown blog posts
- Store posts in `src/content/blog/` with `.md` files
- Parse YAML frontmatter with required fields: title, author, date, description, tags, image
- Rationale: Type-safe, integrates natively with Astro's build system, no external CMS needed

**1a. Draft Post Detection: HTML Comment at Content Start**
- Mark drafts with `<!-- draft -->` immediately after YAML frontmatter (at content start)
- Draft posts generate pages but exclude from blog listings and home featured posts
- Comment is rendered in HTML source as visual indicator while editing
- Rationale: Simple, human-readable, no frontmatter field pollution, comment serves as visual marker

**2. Routing: File-based dynamic routes**
- Blog posts at `/blog/[slug]` using Astro's dynamic routing
- Home page at `/`, blog list at `/blog`, contact at `/contact`
- Rationale: Leverages Astro's built-in routing, no configuration needed

**3. Theming: CSS Variables with localStorage persistence**
- Use CSS custom properties (variables) for light/dark mode colors
- Store user preference in browser localStorage
- Switch theme on client-side with a theme toggle button
- Rationale: Works without JavaScript initially, simple persistence, no build-time generation needed

**4. Styling: Global CSS with component scoping**
- Base styles in `src/styles/globals.css` with CSS variables
- Component-specific styles using Astro's scoped styling
- Utility classes for common patterns
- Rationale: Keeps styles maintainable and theme changes work globally

**5. Components: Reusable layout structure**
- Create `src/components/` for Header, Footer, Navigation, BlogCard, etc.
- Share common layout in `src/layouts/BaseLayout.astro`
- Rationale: Reduces duplication, makes updates easier across pages

**6. Featured Posts: Recent-only MVP, visit tracking for future**
- Home page displays 3-5 most recent published posts
- Visit tracking (popularity) deferred to future phase
- Rationale: Simple initial implementation, visit tracking requires analytics infrastructure

**7. Recommended Posts: Tag-based with recent fallback**
- On individual post pages, show related posts matching post tags
- If fewer than 3 tag matches, fill remaining slots with most recent posts
- Exclude draft posts from recommendations
- Rationale: Encourages content discovery, tag-based is easy to implement, recent provides fallback

**8. Images: Public directory with flexible sizing**
- Store images in `public/images/` directory
- Featured image referenced in frontmatter (e.g., `image: /images/post-title.jpg`)
- Use flexible sizing (CSS handles responsiveness), no fixed aspect ratio
- Rationale: Simpler than asset pipeline, easy to manage, flexible for various content

## Risks / Trade-offs

- **Scalability**: File-based content works well up to ~1000 posts. Beyond that, consider moving to a database. Mitigation: Document when migration needed, keep schema flexible.
- **SEO**: No server-side rendering means SEO features must be added manually. Mitigation: Can add meta tags and sitemaps in static generation phase.
- **Formatting**: Markdown is limited; complex layouts require MDX or component integration. Mitigation: Start simple, add MDX support if needed.
- **Contact form**: No backend means contact form requires external service (Formspree, Netlify Forms). Mitigation: Use form providers for now, plan backend if needed.
