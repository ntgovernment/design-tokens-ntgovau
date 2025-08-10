# Component Usage Guide

This guide provides detailed usage instructions for all NT.GOV.AU Bootstrap theme components.

## 🔧 Accordion Component

The accordion component provides a fully customized Bootstrap 5.2+ accordion with NT.GOV.AU design tokens and styling.

### Basic Usage

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
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element.
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
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element.
      </div>
    </div>
  </div>
</div>
```

### Features

- **NT.GOV.AU Design Tokens**: All colors, typography, and spacing use official design tokens
- **Bottom Border Only**: Clean design with only bottom borders on accordion buttons
- **Enhanced Focus States**: Complete focus ring with border and box-shadow around entire button for better keyboard navigation
- **CSS Custom Properties**: Full `--bs-accordion-*` variable support for easy customization
- **Bootstrap 5.2+ Compatible**: Works with all Bootstrap accordion features and JavaScript
- **Theme Switching Ready**: All styles use CSS custom properties for runtime theme changes
- **Accessibility Optimized**: Proper focus indicators and ARIA support for screen readers

### Customization Options

The accordion component uses the following CSS custom properties that can be overridden:

```css
.accordion {
  --bs-accordion-color: /* Text color */
  --bs-accordion-bg: /* Background color */
  --bs-accordion-border-width: /* Border width */
  --bs-accordion-border-radius: /* Border radius */
  --bs-accordion-btn-padding-x: /* Horizontal padding */
  --bs-accordion-btn-padding-y: /* Vertical padding */
  --bs-accordion-btn-color: /* Button text color */
  --bs-accordion-btn-bg: /* Button background */
  --bs-accordion-btn-font-family: /* Font family */
  --bs-accordion-btn-font-size: /* Font size */
  --bs-accordion-btn-font-weight: /* Font weight */
  --bs-accordion-btn-focus-border-color: /* Focus border color */
  --bs-accordion-btn-focus-box-shadow: /* Focus box-shadow for accessibility */
  --bs-accordion-active-color: /* Active state text color */
  --bs-accordion-active-bg: /* Active state background */
}
```

### React Integration

```jsx
import { useState } from "react";
import { Collapse } from "bootstrap";

function AccordionExample() {
  const [activeItem, setActiveItem] = useState("collapseOne");

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${
              activeItem !== "collapseOne" ? "collapsed" : ""
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            onClick={() =>
              setActiveItem(activeItem === "collapseOne" ? "" : "collapseOne")
            }
          >
            Services
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`accordion-collapse collapse ${
            activeItem === "collapseOne" ? "show" : ""
          }`}
        >
          <div className="accordion-body">
            Information about NT.GOV.AU services and offerings.
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 🎨 Button Components

### Primary, Secondary, Tertiary Buttons

```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
<button class="btn btn-tertiary">Tertiary Action</button>
```

### Back-to-Top Button

```html
<button class="btn back-to-top">Back to Top</button>
```

### Button Sizes

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

## 🔤 Typography

The theme automatically applies NT.GOV.AU typography settings:

- **Font Family**: Lato (primary)
- **Heading Styles**: H1-H6 with appropriate weights and sizes
- **Body Text**: Optimized line heights and spacing

## 🎨 Color System

### Text Colors

```html
<p class="text-primary">Primary text color</p>
<p class="text-secondary">Secondary text color</p>
<p class="text-success">Success text color</p>
<p class="text-warning">Warning text color</p>
<p class="text-danger">Danger text color</p>
```

### Background Colors

```html
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-light">Light background</div>
```

## 🎛️ Theme Switching

All components support runtime theme switching through CSS custom properties:

```javascript
// Example: Switch to dark theme
document.documentElement.style.setProperty(
  "--bs-primary",
  "#your-dark-primary-color"
);
document.documentElement.style.setProperty(
  "--bs-secondary",
  "#your-dark-secondary-color"
);

// Accordion-specific theming
document.documentElement.style.setProperty(
  "--bs-accordion-bg",
  "#your-dark-background"
);
document.documentElement.style.setProperty(
  "--bs-accordion-color",
  "#your-dark-text-color"
);
```

## 📋 Best Practices

### Accordion Usage

1. **Always use proper semantic HTML** with `h2` elements for headers
2. **Include proper ARIA attributes** for accessibility
3. **Use unique IDs** for each accordion item
4. **Test with keyboard navigation** - accordion buttons show complete focus rings with border and box-shadow
5. **Focus states are automatic** - the theme provides enhanced focus indicators using NT.GOV.AU colors
6. **Consider content length** - avoid very long accordion bodies

### General Component Usage

1. **Import Bootstrap CSS first**, then the NT.GOV.AU theme
2. **Use standard Bootstrap classes** - no custom class names required
3. **Test theme switching** if implementing multiple themes
4. **Validate with accessibility tools** for government compliance
5. **Use semantic HTML** structure for all components

## 🔧 Development Tips

- All components are built using Bootstrap CSS custom properties
- Styles can be customized by overriding CSS custom properties
- No JavaScript modifications required - works with standard Bootstrap JS
- Components are designed to work in any framework (React, Vue, Angular, etc.)
