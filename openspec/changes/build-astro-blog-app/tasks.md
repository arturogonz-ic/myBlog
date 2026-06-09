## 1. Project Setup and Structure

- [x] 1.1 Create content directory structure (`src/content/blog/`)
- [x] 1.2 Set up Astro Content Collections configuration in `astro.config.mjs`
- [x] 1.3 Create TypeScript schema for blog post frontmatter in `src/content/config.ts`
- [x] 1.4 Create `src/components/` directory for reusable components
- [x] 1.5 Create `src/layouts/` directory for shared layouts
- [x] 1.6 Create global styles directory and structure (`src/styles/`)

## 2. Global Theming System

- [x] 2.1 Set up CSS custom properties (variables) for light and dark themes in `src/styles/globals.css`
- [x] 2.2 Create theme variables for colors (background, text, borders, accents)
- [x] 2.3 Create `src/components/ThemeSwitcher.astro` component with light/dark toggle
- [x] 2.4 Add JavaScript for theme toggle and localStorage persistence
- [x] 2.5 Add system preference detection (prefers-color-scheme) for first-time users
- [x] 2.6 Import global styles in layout and ensure theme CSS is loaded

## 3. Layout and Navigation

- [x] 3.1 Create `src/layouts/BaseLayout.astro` with header, nav, and footer
- [x] 3.2 Create `src/components/Header.astro` with logo and site title
- [x] 3.3 Create `src/components/Navigation.astro` with links to Home, Blog, Contact
- [x] 3.4 Create `src/components/Footer.astro` with copyright and social links
- [x] 3.5 Add responsive styles and mobile menu support
- [x] 3.6 Integrate ThemeSwitcher into Header

## 4. Blog Post Generation

- [x] 4.1 Create sample blog post markdown files in `src/content/blog/` with proper frontmatter
- [x] 4.2 Implement dynamic route at `src/pages/blog/[slug].astro` for individual posts
- [x] 4.3 Generate static paths from Content Collection entries
- [x] 4.4 Render blog post metadata (title, date, author, tags) at top of post
- [x] 4.5 Render markdown content using Astro's Content API
- [x] 4.6 Add styling for blog post typography (headings, paragraphs, lists, code blocks)
- [x] 4.7 Implement draft post filtering (exclude draft: true from builds)

## 5. Blog List Page

- [x] 5.1 Create `src/pages/blog/index.astro` for blog listing
- [x] 5.2 Query all published blog posts from Content Collection
- [x] 5.3 Sort posts by date in descending order
- [x] 5.4 Create `src/components/BlogCard.astro` component for post previews
- [x] 5.5 Display post title, date, description/excerpt, and author on each card
- [x] 5.6 Add links from blog cards to individual post pages
- [x] 5.7 Implement tag filtering system with clickable tag buttons
- [x] 5.8 Add "no posts" message for empty blog state
- [x] 5.9 Add styling for blog grid/list layout

## 6. Home Page

- [x] 6.1 Create `src/pages/index.astro` as home page
- [x] 6.2 Add welcome section with blog introduction and description
- [x] 6.3 Query recent blog posts (latest 3-5) from Content Collection
- [x] 6.4 Create featured posts section (query posts with featured flag)
- [x] 6.5 Display recent/featured posts using BlogCard component
- [x] 6.6 Add call-to-action button/link to full blog at `/blog`
- [x] 6.7 Add hero section styling and imagery
- [x] 6.8 Ensure responsive design for mobile and desktop

## 7. Contact Page

- [x] 7.1 Create `src/pages/contact.astro` page
- [x] 7.2 Add contact information section (email, social links)
- [x] 7.3 Create `src/components/ContactForm.astro` with form fields (name, email, subject, message)
- [x] 7.4 Add client-side form validation
- [x] 7.5 Implement honeypot or CAPTCHA field for spam protection
- [x] 7.6 Set up form submission to external service (Formspree, Netlify Forms, or similar)
- [x] 7.7 Add success/error messages after form submission
- [x] 7.8 Style contact form and page
- [x] 7.9 Ensure form is keyboard accessible and has proper labels

## 8. Testing and Polish

- [x] 8.1 Test blog post creation workflow (add markdown, verify page generation)
- [x] 8.2 Test blog list page with multiple posts
- [x] 8.3 Test theme switching and localStorage persistence
- [x] 8.4 Test responsive design on mobile, tablet, and desktop
- [x] 8.5 Test contact form submission and validation
- [x] 8.6 Test navigation between pages
- [x] 8.7 Verify all links work correctly
- [x] 8.8 Check color contrast and accessibility compliance
- [x] 8.9 Optimize images and performance
- [x] 8.10 Build for production and test static site generation

## 9. Documentation and Deployment

- [x] 9.1 Create README with instructions for adding new blog posts
- [x] 9.2 Document frontmatter schema and required/optional fields
- [x] 9.3 Document theme customization (CSS variables)
- [x] 9.4 Document contact form configuration (external service setup)
- [x] 9.5 Test production build and deployment
- [x] 9.6 Verify site works correctly after deployment
