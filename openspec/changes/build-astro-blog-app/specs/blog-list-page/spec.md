## ADDED Requirements

### Requirement: Blog listing page displays all published posts
The system SHALL provide a dedicated blog listing page at `/blog` that displays all published (non-draft) blog posts with their metadata in a scannable format.

#### Scenario: Blog list page renders
- **WHEN** user visits `/blog`
- **THEN** a page is displayed showing all published (non-draft) blog posts

#### Scenario: Draft posts are excluded from listing
- **WHEN** a blog post has `<!-- draft -->` at the beginning of its content
- **THEN** it does not appear in the blog listing page

#### Scenario: Blog posts are displayed with metadata and image
- **WHEN** the blog listing page loads
- **THEN** each post card shows title, publication date, description/excerpt, author, and featured image

#### Scenario: Blog posts are sorted by date
- **WHEN** multiple blog posts are listed
- **THEN** posts are sorted by publication date in descending order (newest first)

#### Scenario: Blog post links navigate to full post
- **WHEN** user clicks on a blog post in the listing
- **THEN** user is taken to the full blog post page at `/blog/[slug]`

#### Scenario: Draft post in list displays as blank
- **WHEN** a draft post accidentally appears in the query (system error)
- **THEN** the post card displays as blank/empty without crashing the page

### Requirement: Post preview or excerpt display
The system SHALL display a preview of each blog post on the listing page using either the description field or an excerpt from the content.

#### Scenario: Description field is displayed
- **WHEN** a blog post has a description in its frontmatter
- **THEN** the description is displayed as the post preview on the listing

#### Scenario: Fallback excerpt from content
- **WHEN** a blog post lacks a description field
- **THEN** the first 160 characters of the markdown content are displayed as a preview

### Requirement: Blog post filtering by tags
The system SHALL allow users to filter blog posts by tags selected from the listing page.

#### Scenario: Available tags are displayed
- **WHEN** viewing the blog listing page
- **THEN** all unique tags from published posts are displayed as filter options

#### Scenario: Filtering by tag narrows results
- **WHEN** user clicks on a tag filter
- **THEN** only blog posts with that tag are displayed in the list

### Requirement: Empty blog handling
The system SHALL handle the case when no blog posts have been published yet.

#### Scenario: Empty blog displays helpful message
- **WHEN** no published blog posts exist
- **THEN** the page displays a message indicating no posts are available yet
