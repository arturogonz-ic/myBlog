## ADDED Requirements

### Requirement: Home page landing with blog introduction
The system SHALL provide a home page at `/` that introduces the blog and directs users to blog content.

#### Scenario: Home page loads successfully
- **WHEN** user visits the site root `/`
- **THEN** the home page is displayed with blog title and introduction

#### Scenario: Blog introduction is displayed
- **WHEN** the home page loads
- **THEN** a welcome message and description of the blog is prominently displayed

#### Scenario: Featured posts are shown
- **WHEN** viewing the home page
- **THEN** the most recent or featured blog posts are displayed as highlights

#### Scenario: Call-to-action links to blog section
- **WHEN** user views the home page
- **THEN** clear navigation or button linking to the full blog at `/blog` is visible

### Requirement: Home page displays recent blog posts
The system SHALL showcase the most recent published blog posts on the home page to engage visitors.

#### Scenario: Recent posts are listed
- **WHEN** the home page loads
- **THEN** the 3-5 most recent published blog posts are displayed with title, author, date, featured image, and description

#### Scenario: Draft posts are excluded from home display
- **WHEN** a blog post has `<!-- draft -->` at the beginning of its content
- **THEN** it does not appear in the home page featured posts section

#### Scenario: Posts are sorted by recency
- **WHEN** displaying featured posts on home page
- **THEN** posts are ordered by publication date in descending order (newest first)

### Requirement: Home page is responsive and accessible
The system SHALL ensure the home page is responsive across devices and meets accessibility standards.

#### Scenario: Home page is mobile-friendly
- **WHEN** user accesses home page on mobile device
- **THEN** content is readable and navigation is accessible without scrolling horizontally

#### Scenario: Home page has proper semantic HTML
- **WHEN** accessibility tools scan the home page
- **THEN** page uses proper heading hierarchy, alt text for images, and ARIA labels where needed
