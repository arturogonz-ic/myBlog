---
title: "Welcome to My Blog"
author: "Arturo Gonzalez"
date: 2026-06-09
description: "A sample blog post demonstrating the new blog structure with markdown content generation."
tags: ["astro", "blogging", "markdown"]
image: "/images/blog-post-sample.jpg"
---

# Welcome to My Blog

This is a sample blog post demonstrating the new blog structure. Each post is created from a markdown file with proper frontmatter containing:

- **title**: The post title
- **author**: Who wrote it
- **date**: Publication date
- **description**: Short description for the blog list
- **tags**: For categorization and recommendations
- **image**: Featured image path

## Creating Posts

To create a new blog post, simply add a markdown file to `src/content/blog/` with the frontmatter above. The system will automatically:

1. Generate a page at `/blog/[slug]`
2. Include it in the blog list at `/blog`
3. Show it on the home page (if it's one of the latest)
4. Link related posts based on tags

## Markdown Support

You can use all standard markdown syntax:

- **Bold text** and *italic text*
- Lists and nested items
- Code blocks with syntax highlighting
- Blockquotes and more

## Draft Posts

To mark a post as a draft, add this comment at the very beginning of the content:

```
<!-- draft -->
```

Draft posts will be accessible via direct URL but won't appear in listings or the home page.
