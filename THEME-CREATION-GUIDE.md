# NT.GOV.AU Bootstrap Theme Creation Guide

This guide will walk you through creating a Bootstrap theme based on your NT.GOV.AU design tokens that can be used in a React application with theme switching capabilities.

## Overview

This repository contains a single Bootstrap theme implementation that:
- Uses Bootstrap 5.3+ CSS custom properties for theming
- Overrides Bootstrap's default design tokens with NT.GOV.AU values
- Provides a compiled CSS file for React applications
- Maintains compatibility with Bootstrap's utility classes
- Supports theme switching through CSS custom property updates

## Project Structure

```
design-tokens-ntgovau/
├── _variables.scss          # Generated design tokens (read-only)
├── _root.scss              # CSS custom properties mapping
├── src/
│   ├── index.scss          # Main theme compilation entry
│   ├── _buttons.scss       # Button component customization
│   └── _utilities.scss     # Utility class customizations
├── dist/
│   └── ntgovau-theme.css   # Compiled theme CSS
├── package.json            # Build dependencies
└── examples/
    ├── preview.html        # Theme preview
    └── react-example.jsx   # React integration example
```

## Step 1: Set up the Build Environment

First, initialize the project with the necessary dependencies:

```bash
# Initialize npm project
npm init -y

# Install dependencies
npm install --save-dev sass
npm install bootstrap@^5.3.0

# Update package.json scripts
```

Create the build configuration in `package.json`:

```json
{
  "scripts": {
    "build": "sass src/index.scss dist/ntgovau-theme.css --style=compressed",
    "build:dev": "sass src/index.scss dist/ntgovau-theme.css --style=expanded",
    "watch": "sass src/index.scss dist/ntgovau-theme.css --watch --style=expanded",
    "build:all": "npm run build:dev && npm run build"
  }
}
```

## Step 2: Create CSS Custom Properties Mapping

Create `_root.scss` to map your design tokens to Bootstrap CSS custom properties:

```scss
// Map NT.GOV.AU design tokens to Bootstrap CSS custom properties
:root {
  // Colors - Primary
  --bs-blue: #{$nt-gov-au-brand-colours-primary-blue-default};
  --bs-primary: #{$nt-gov-au-brand-colours-primary-blue-default};
  
  // Colors - Semantic
  --bs-info: #{$semantic-colours-info-blue-default};
  --bs-success: #{$semantic-colours-success-green-default};
  --bs-warning: #{$semantic-colours-warning-orange-default};
  --bs-danger: #{$semantic-colours-danger-red-default};
  
  // Typography
  --bs-font-sans-serif: #{$nt-gov-au-brand-typography-font-family-primary}, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  
  // Spacing (Bootstrap uses rem, convert from px)
  --bs-spacer: 1rem; // Base spacer
}
```

## Step 3: Create Button Component Customization

Create `src/_buttons.scss` to customize Bootstrap buttons:

```scss
// Button base styles using Bootstrap CSS custom properties
.btn {
  // Override Bootstrap button CSS custom properties
  --bs-btn-padding-x: #{$spacing-16};
  --bs-btn-padding-y: #{$spacing-8};
  --bs-btn-font-family: #{$nt-gov-au-brand-typography-font-family-primary};
  --bs-btn-font-size: #{$typography-sizing-font-size-body-md};
  --bs-btn-font-weight: 600;
  --bs-btn-line-height: #{$typography-sizing-line-height-body-md};
  --bs-btn-border-radius: #{$nt-gov-au-brand-basic-branded-elements-corner-radius-md};
  
  // Apply the custom properties
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  border-radius: var(--bs-btn-border-radius);
}

// Primary button variant
.btn-primary {
  --bs-btn-color: #{$nt-gov-au-brand-colours-neutrals-grey-white};
  --bs-btn-bg: #{$nt-gov-au-brand-colours-primary-blue-default};
  --bs-btn-border-color: #{$nt-gov-au-brand-colours-primary-blue-default};
  --bs-btn-hover-color: #{$nt-gov-au-brand-colours-neutrals-grey-white};
  --bs-btn-hover-bg: #{$nt-gov-au-brand-colours-primary-blue-600};
  --bs-btn-hover-border-color: #{$nt-gov-au-brand-colours-primary-blue-600};
  --bs-btn-active-color: #{$nt-gov-au-brand-colours-neutrals-grey-white};
  --bs-btn-active-bg: #{$nt-gov-au-brand-colours-primary-blue-700};
  --bs-btn-active-border-color: #{$nt-gov-au-brand-colours-primary-blue-700};
}

// Secondary button variant
.btn-secondary {
  --bs-btn-color: #{$nt-gov-au-brand-colours-primary-blue-default};
  --bs-btn-bg: transparent;
  --bs-btn-border-color: #{$nt-gov-au-brand-colours-primary-blue-default};
  --bs-btn-hover-color: #{$nt-gov-au-brand-colours-neutrals-grey-white};
  --bs-btn-hover-bg: #{$nt-gov-au-brand-colours-primary-blue-default};
  --bs-btn-hover-border-color: #{$nt-gov-au-brand-colours-primary-blue-default};
}

// Size variants
.btn-sm {
  --bs-btn-padding-y: #{$spacing-4};
  --bs-btn-padding-x: #{$spacing-12};
  --bs-btn-font-size: #{$typography-sizing-font-size-body-sm};
}

.btn-lg {
  --bs-btn-padding-y: #{$spacing-12};
  --bs-btn-padding-x: #{$spacing-24};
  --bs-btn-font-size: #{$typography-sizing-font-size-body-lg};
}
```

## Step 4: Create Main Theme File

Create `src/index.scss` as the main compilation entry:

```scss
/*!
 * NT.GOV.AU Bootstrap Theme
 * Based on Bootstrap 5.3+ with NT.GOV.AU Design Tokens
 */

// Import design tokens (read-only)
@import "../variables";

// Import CSS custom properties mapping
@import "../root";

// Import component customizations
@import "buttons";

// Global theme styles
body {
  font-family: var(--bs-font-sans-serif);
  color: #{$nt-gov-au-brand-typography-text-colours-text-body-default};
}

// Additional component imports will go here
// @import "forms";
// @import "navigation";
// @import "cards";
```

## Step 5: Build the Theme

Run the build process:

```bash
# Development build (expanded CSS for debugging)
npm run build:dev

# Production build (compressed CSS)
npm run build

# Watch mode for development
npm run watch
```

This creates `dist/ntgovau-theme.css` containing your custom Bootstrap theme.

## Step 6: React Integration

### Installation in React Project

```bash
# In your React project
npm install design-tokens-ntgovau
```

### Basic Usage

```jsx
// Import the theme CSS
import 'design-tokens-ntgovau/dist/ntgovau-theme.css';

function MyComponent() {
  return (
    <div>
      <button className="btn btn-primary">NT.GOV.AU Button</button>
      <button className="btn btn-secondary btn-sm">Secondary Small</button>
    </div>
  );
}
```

### Theme Switching Implementation

For theme switching, you'll load different theme CSS files:

```jsx
// ThemeProvider.jsx
import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('ntgovau');

  useEffect(() => {
    // Remove existing theme
    const existingLink = document.querySelector('link[data-theme]');
    if (existingLink) {
      existingLink.remove();
    }

    // Add new theme
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/themes/${theme}-theme.css`;
    link.setAttribute('data-theme', theme);
    document.head.appendChild(link);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Usage
function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="ntgovau">NT.GOV.AU</option>
        <option value="other-theme">Other Theme</option>
      </select>
      
      <button className="btn btn-primary">Themed Button</button>
    </div>
  );
}
```

## Step 7: Creating Additional Themes

To create additional themes:

1. **Clone this repository** with a new name (e.g., `design-tokens-othertheme`)
2. **Replace `_variables.scss`** with new design tokens
3. **Keep the same structure** in `src/` folder
4. **Build with same process** to create `othertheme-theme.css`
5. **Use in theme switcher** by loading different CSS files

## Benefits of This Approach

- **Bootstrap Compatibility**: All Bootstrap utility classes work unchanged
- **CSS Custom Properties**: Easy runtime theme switching
- **Component Isolation**: Each theme is a separate package
- **Build Optimization**: Compiled CSS for production use
- **Design Token Driven**: Automatic updates when design tokens change

## Next Steps

1. **Expand Components**: Add more component customizations (forms, navigation, cards)
2. **Create Utilities**: Custom utility classes for NT.GOV.AU specific needs
3. **Add Documentation**: Component examples and usage guidelines
4. **Create Variants**: Different theme variations (dark mode, high contrast)
5. **Publish Package**: Make available via npm for easy consumption

## File Checklist

- [ ] `_variables.scss` (generated, read-only)
- [ ] `_root.scss` (CSS custom properties mapping)
- [ ] `src/index.scss` (main entry point)
- [ ] `src/_buttons.scss` (button customization)
- [ ] `package.json` (build configuration)
- [ ] `dist/ntgovau-theme.css` (compiled theme)

This approach gives you a scalable, maintainable theme system that integrates seamlessly with React applications and supports multiple themes through the same Bootstrap codebase.
