# NT.GOV.AU Bootstrap Theme

A Bootstrap 5.3+ compatible theme built with NT.GOV.AU design tokens. This theme maintains full Bootstrap compatibility while applying the NT Government visual identity through CSS custom properties.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Build development version (expanded CSS)
npm run dev

# Build production version (minified CSS)
npm run build

# Watch for changes during development
npm run watch

# Build both versions
npm run all

# Preview the theme
npm run preview
# Then open examples/preview.html in your browser
```

## 📦 Installation in React Projects

```bash
npm install design-tokens-ntgovau
```

```jsx
// Import Bootstrap CSS first, then your theme
import "bootstrap/dist/css/bootstrap.min.css";
import "design-tokens-ntgovau/dist/ntgovau-theme.css";

// For interactive components (accordion, modal, etc.),
// also import Bootstrap JavaScript
import * as bootstrap from "bootstrap";
// OR import specific components:
// import { Collapse } from 'bootstrap';

function App() {
  return (
    <div>
      <h1>Welcome to NT.GOV.AU</h1>
      <button className="btn btn-primary">Primary Action</button>
      <button className="btn btn-secondary">Secondary Action</button>
      <button className="btn back-to-top">Back to Top</button>

      {/* Accordion Example */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 📋 JavaScript Dependencies

For interactive components like accordions, modals, dropdowns, etc., you'll need to include Bootstrap's JavaScript:

### CDN (HTML)

```html
<!-- Include before closing </body> tag -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### NPM/Webpack

```javascript
// Import all Bootstrap JS
import * as bootstrap from "bootstrap";

// Or import specific components
import { Collapse, Modal, Dropdown } from "bootstrap";
```

### React with Bootstrap

```jsx
// For React projects, consider using react-bootstrap instead
npm install react-bootstrap bootstrap
```

## 🎨 Features

- **Bootstrap Compatible**: All standard Bootstrap classes work unchanged
- **Design Token Driven**: Built from NT.GOV.AU design tokens
- **CSS Custom Properties**: Easy runtime theme switching
- **Component Focused**: Systematic component customization
- **Multi-Theme Ready**: Designed for theme switching applications
- **Modern Sass**: Uses @use syntax (no deprecation warnings)

## 🏗️ Project Structure

```
design-tokens-ntgovau/
├── _variables.scss          # Generated design tokens (read-only)
├── _root.scss              # CSS custom properties mapping
├── src/
│   ├── index.scss          # Main theme entry point
│   ├── _buttons.scss       # Button customizations (primary, secondary, tertiary)
│   ├── _backtotopbutton.scss # Back-to-top button component (ochre styling)
│   ├── _accordion.scss     # Complete accordion with NT.GOV.AU styling
│   └── _*.scss            # Other component customizations (as added)
├── dist/
│   └── ntgovau-theme.css   # Compiled theme CSS
├── examples/
│   └── preview.html        # Complete preview with working components
├── package.json            # Build configuration and scripts
└── README.md              # This documentation
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Development build (expanded CSS)
- `npm run build` - Production build (compressed CSS)
- `npm run watch` - Watch mode for development
- `npm run all` - Build both dev and production versions
- `npm run preview` - Build dev version and show preview instructions

### Available Components

Currently implemented components:

- **Buttons** - Primary, secondary, tertiary variants with all Bootstrap states
- **Back-to-Top Button** - Special ochre-colored button using `.btn.back-to-top`
- **Accordion** - Complete Bootstrap 5.2+ accordion implementation with:
  - NT.GOV.AU color scheme (primary blue default, ochre hover/focus)
  - Bottom-border-only styling (no full borders)
  - Enhanced focus states with orange border (`$effect-nt-gov-focus-state-border`)
  - Proper icon rotation (down when collapsed, up when expanded)
  - Hover states with ochre text and icon colors
  - Responsive padding and typography
- **Typography** - NT.GOV.AU font family and color system
- **Color Utilities** - Text, background, and border color classes

### Adding New Components

1. Create a new SCSS file in `src/` (e.g., `_forms.scss`)
2. Import it in `src/index.scss`
3. Use Bootstrap CSS custom properties pattern
4. Test with examples

### Design Token Updates

The `_variables.scss` file is generated from `design-tokens.json` and should not be edited directly. When design tokens are updated:

1. Regenerate `_variables.scss`
2. Run `npm run build`
3. Test components in examples

## 🎛️ Theme Switching

This theme is designed to work with runtime theme switching:

```jsx
import { ThemeProvider, ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <header>
        <h1>My App</h1>
        <ThemeSwitcher />
      </header>
      <main>
        <button className="btn btn-primary">Themed Button</button>
      </main>
    </ThemeProvider>
  );
}
```

See `examples/ThemeSwitcher.jsx` for a complete implementation.

## 🎨 Components

### Buttons

All Bootstrap button classes are supported with NT.GOV.AU styling:

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-tertiary">Tertiary</button>
<button class="btn btn-outline-primary">Outline</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- Special Components -->
<button class="btn back-to-top">Back to Top</button>
```

### Back-to-Top Button

A specialized button component using NT.GOV.AU ochre color:

```html
<button class="btn back-to-top">Back to Top</button>
```

Features:

- Uses secondary ochre color (`#c33826`)
- White text for accessibility
- Darker hover state (`#a22f20`)
- Inherits all Bootstrap button behaviors

### Accordion

A complete Bootstrap 5.2+ accordion implementation with NT.GOV.AU styling:

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong>
        Content goes here with proper NT.GOV.AU typography styling.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        This content is hidden by default until the user expands it.
      </div>
    </div>
  </div>
</div>
```

#### Accordion Features

- **Color Scheme**:
  - Default: Primary blue text and icons (`#1f1f5f`)
  - Hover: Ochre text and icons (`#c33826`)
  - Focus: Orange border with proper box-shadow
- **Border Styling**: Only bottom borders for a clean, minimal look
- **Icon Behavior**:
  - Collapsed state: Chevron pointing down
  - Expanded state: Chevron pointing up with smooth rotation
  - Hover state: Icons change to ochre color
- **Accessibility**:
  - Enhanced focus states with `$effect-nt-gov-focus-state-border`
  - Complete border focus indicator (not just bottom border)
  - Proper ARIA attributes maintained
- **Typography**: Uses NT.GOV.AU font family and sizing
- **Interactive States**:
  - Default: Blue text and icon
  - Hover: Ochre text and icon
  - Expanded: Default active styling
  - Expanded + Hover: Ochre text and icon

#### JavaScript Requirement

Accordions require Bootstrap JavaScript for collapse functionality:

```html
<!-- Bootstrap Bundle includes Collapse component -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

Or import specifically in JavaScript:

```javascript
import { Collapse } from "bootstrap";
```

### Typography

Bootstrap typography classes with NT.GOV.AU fonts and sizing:

```html
<h1>Heading 1</h1>
<h2 class="h3">Heading with class</h2>
<p class="text-primary">Primary text</p>
<p class="text-muted">Muted text</p>
```

### Colors

Bootstrap color utilities with NT.GOV.AU palette:

```html
<div class="bg-primary text-white">Primary background</div>
<div class="bg-info">Info background</div>
<p class="text-success">Success text</p>
```

## 🔄 Creating Additional Themes

To create additional themes (e.g., Central Australia variant):

1. **Clone this repository** with new name: `design-tokens-central`
2. **Replace design tokens**: Update `design-tokens.json` and regenerate `_variables.scss`
3. **Keep same structure**: Use identical file structure and build process
4. **Build new theme**: Run `npm run build` to create `central-theme.css`
5. **Integrate with switcher**: Add to theme configuration

## 📖 Examples

- `examples/preview.html` - Complete theme preview with working accordion and Bootstrap JavaScript
- `examples/react-example.jsx` - Basic React integration (if available)
- `examples/ThemeSwitcher.jsx` - Theme switching implementation (if available)

The preview file includes:

- All button variants and states
- Working accordion with Bootstrap JavaScript
- Typography examples
- Color system demonstrations
- Interactive component examples

## 🛠️ CSS Custom Properties

This theme uses Bootstrap 5.3+ CSS custom properties for theming:

```css
/* Buttons use custom properties */
.btn {
  --bs-btn-color: #ffffff;
  --bs-btn-bg: #1f1f5f;
  --bs-btn-border-color: #1f1f5f;
}

/* Override in JavaScript for runtime changes */
document.documentElement.style.setProperty('--bs-primary', '#new-color');
```

## 🎯 Bootstrap Compatibility

This theme maintains 100% compatibility with Bootstrap:

- ✅ All utility classes work unchanged
- ✅ Component markup is identical
- ✅ JavaScript behavior is preserved
- ✅ Grid system works as expected
- ✅ Responsive breakpoints maintained

## 📋 Browser Support

Supports all modern browsers that support CSS custom properties:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 16+

## 🤝 Contributing

1. Follow the established component pattern
2. Use Bootstrap CSS custom properties
3. Test with examples
4. Update documentation

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Related

- [NT.GOV.AU Design System](https://designsystem.nt.gov.au/)
- [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
