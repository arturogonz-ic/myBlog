## ADDED Requirements

### Requirement: Automatic blog post page generation from markdown files
The system SHALL automatically generate individual blog post pages from markdown files stored in `src/content/blog/` directory with parsed YAML frontmatter and rendered markdown content.

#### Scenario: Markdown file creates blog post page
- **WHEN** a markdown file with YAML frontmatter is placed in `src/content/blog/`
- **THEN** the system generates a static page at `/blog/[slug]` with rendered HTML content

#### Scenario: Frontmatter metadata is parsed
- **WHEN** a markdown file contains YAML frontmatter (title, author, date, description, tags, image)
- **THEN** the metadata is extracted and available as page properties for display

#### Scenario: Blog slug is derived from filename
- **WHEN** a markdown file named `my-first-post.md` is added
- **THEN** the post is accessible at `/blog/my-first-post`

#### Scenario: Markdown is rendered to HTML
- **WHEN** markdown content includes headings, lists, code blocks, and links
- **THEN** all markdown syntax is properly rendered as valid HTML in the post page

### Requirement: Blog post metadata schema
The system SHALL enforce a consistent YAML frontmatter schema for all blog posts with required and optional fields.

#### Scenario: Required metadata fields
- **WHEN** a markdown file lacks required fields (title, author, date, description, image)
- **THEN** the build fails with a clear error message indicating missing fields

#### Scenario: Optional metadata fields
- **WHEN** a blog post includes optional fields (tags, category)
- **THEN** these fields are parsed and available for display and filtering

#### Scenario: YAML frontmatter structure
- **WHEN** a markdown file contains frontmatter
- **THEN** it follows this structure:
  ```yaml
  ---
  title: Post Title
  author: Author Name
  date: YYYY-MM-DD
  description: Brief description
  tags: [tag1, tag2]
  image: /images/post-image.jpg
  ---
  ```

### Requirement: Draft post support via HTML comment
The system SHALL support marking posts as drafts using an HTML comment at the beginning of the content (after frontmatter), excluding them from production builds while keeping them accessible via direct URL during development.

#### Scenario: Draft post with comment is excluded from listings
- **WHEN** a markdown file has `<!-- draft -->` immediately after the YAML frontmatter
- **THEN** it does not appear in blog listings but the page still generates at `/blog/[slug]`

#### Scenario: Draft comment must be at content start
- **WHEN** `<!-- draft -->` appears anywhere except immediately after the frontmatter
- **THEN** it is ignored and the post is treated as published

#### Scenario: Draft post is accessible via direct URL
- **WHEN** a post is marked as draft with `<!-- draft -->` comment
- **THEN** the page is still generated and accessible at `/blog/[slug]` if you know the URL

#### Scenario: Publishing a draft
- **WHEN** the `<!-- draft -->` comment is removed from the file
- **THEN** the post is immediately included in blog listings on the next build

#### Scenario: Draft comment remains in rendered content
- **WHEN** a draft post is accessed, the `<!-- draft -->` comment is rendered in the HTML
- **THEN** the comment is visible in the page source as a visual indicator

### Requirement: Recommended posts on individual blog post pages
The system SHALL display related blog posts on individual post pages to encourage readers to explore more content.

#### Scenario: Recommended posts appear on post page
- **WHEN** user views a blog post page
- **THEN** a "Recommended Posts" section displays related posts below or beside the main content

#### Scenario: Recommended posts are selected by matching tags
- **WHEN** a blog post has tags (e.g., `[astro, webdev]`)
- **THEN** the system shows other published posts that share any of those tags

#### Scenario: Recent posts fill when tag matches insufficient
- **WHEN** a blog post has tags but fewer than 3 matching posts exist
- **THEN** the system fills the remaining slots with the most recent published posts (excluding the current post)

#### Scenario: Draft posts excluded from recommendations
- **WHEN** selecting recommended posts
- **THEN** only published (non-draft) posts are included in recommendations

#### Scenario: Recommended posts display with metadata
- **WHEN** recommended posts are shown
- **THEN** each post displays title, author, date, featured image, and description
