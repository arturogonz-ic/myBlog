## ADDED Requirements

### Requirement: Light and dark mode theme switching
The system SHALL provide a toggle to switch between light and dark color themes across the entire site.

#### Scenario: Theme toggle is visible
- **WHEN** user views any page on the site
- **THEN** a theme toggle button (sun/moon icon or similar) is visible in the page header or navigation

#### Scenario: Theme toggle switches between light and dark
- **WHEN** user clicks the theme toggle button
- **THEN** the site color scheme changes from light to dark or vice versa

#### Scenario: Light theme displays
- **WHEN** light theme is active
- **THEN** background is light with dark text for optimal readability

#### Scenario: Dark theme displays
- **WHEN** dark theme is active
- **THEN** background is dark with light text to reduce eye strain in low-light environments

### Requirement: Theme preference persistence
The system SHALL remember the user's theme preference across page visits.

#### Scenario: User preference is saved to localStorage
- **WHEN** user changes the theme
- **THEN** the preference is stored in browser localStorage

#### Scenario: Theme preference is restored on subsequent visits
- **WHEN** user returns to the site
- **THEN** their previously selected theme is applied automatically

#### Scenario: First-time user sees system preference
- **WHEN** a new user visits with no saved preference
- **THEN** the theme matches their system preference (prefers-color-scheme)

### Requirement: All page components respect theme
The system SHALL ensure all colors, backgrounds, borders, and other styled elements adapt to the active theme.

#### Scenario: All text is readable in both themes
- **WHEN** switching between light and dark themes
- **THEN** all text maintains sufficient contrast and readability in both modes

#### Scenario: Links and interactive elements are visible in both themes
- **WHEN** switching themes
- **THEN** links, buttons, and form elements remain visible and interactive

#### Scenario: Code blocks adapt to theme
- **WHEN** viewing blog posts with code blocks in either theme
- **THEN** syntax highlighting and background colors adapt appropriately

### Requirement: CSS variables drive theme implementation
The system SHALL use CSS custom properties (variables) to manage theme colors for maintainability.

#### Scenario: Theme colors are defined as CSS variables
- **WHEN** the stylesheet is inspected
- **THEN** color values are defined as CSS custom properties (--color-bg, --color-text, etc.)

#### Scenario: Theme switching updates CSS variables
- **WHEN** user toggles theme
- **THEN** CSS variables are updated, causing colors to change site-wide without reloading
