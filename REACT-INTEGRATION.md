# React Integration Guide

Complete guide for integrating NT.GOV.AU Bootstrap theme with React applications.

## 🚀 Quick Setup

### Installation

```bash
npm install bootstrap design-tokens-ntgovau
# or
yarn add bootstrap design-tokens-ntgovau
```

### Basic Integration

```jsx
// In your main App.js or index.js
import "bootstrap/dist/css/bootstrap.min.css";
import "design-tokens-ntgovau/dist/ntgovau-theme.css";

// Optional: Import Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <h1>NT.GOV.AU React Application</h1>
      <button className="btn btn-primary">Primary Button</button>
    </div>
  );
}

export default App;
```

## 🔧 Component Examples

### Accordion Component

```jsx
import { useState } from "react";

function AccordionExample() {
  const [openItems, setOpenItems] = useState(["item1"]);

  const toggleItem = (itemId) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${
              !openItems.includes("item1") ? "collapsed" : ""
            }`}
            type="button"
            onClick={() => toggleItem("item1")}
            aria-expanded={openItems.includes("item1")}
          >
            Government Services
          </button>
        </h2>
        <div
          className={`accordion-collapse collapse ${
            openItems.includes("item1") ? "show" : ""
          }`}
        >
          <div className="accordion-body">
            <strong>Find government services and information.</strong> Access
            online services, forms, and resources for Northern Territory
            residents and businesses.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${
              !openItems.includes("item2") ? "collapsed" : ""
            }`}
            type="button"
            onClick={() => toggleItem("item2")}
            aria-expanded={openItems.includes("item2")}
          >
            Business Resources
          </button>
        </h2>
        <div
          className={`accordion-collapse collapse ${
            openItems.includes("item2") ? "show" : ""
          }`}
        >
          <div className="accordion-body">
            Information and resources for businesses operating in the Northern
            Territory.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionExample;
```

### Button Components

```jsx
function ButtonExamples() {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {/* Primary Buttons */}
      <button className="btn btn-primary">Primary Action</button>
      <button className="btn btn-primary btn-sm">Small Primary</button>
      <button className="btn btn-primary btn-lg">Large Primary</button>

      {/* Secondary Buttons */}
      <button className="btn btn-secondary">Secondary Action</button>
      <button className="btn btn-tertiary">Tertiary Action</button>

      {/* Special Components */}
      <button className="btn back-to-top">Back to Top</button>

      {/* Button States */}
      <button className="btn btn-primary" disabled>
        Disabled
      </button>
    </div>
  );
}
```

### Form Components

```jsx
function FormExample() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <div className="invalid-feedback">Please provide a valid email.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
```

## 🎨 Theme Switching

### Theme Context Provider

```jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const switchTheme = (newTheme) => {
    setTheme(newTheme);

    // Update CSS custom properties
    const root = document.documentElement;

    if (newTheme === "dark") {
      root.style.setProperty("--bs-primary", "#4a90c2");
      root.style.setProperty("--bs-secondary", "#6c757d");
      root.style.setProperty("--bs-accordion-bg", "#212529");
      root.style.setProperty("--bs-accordion-color", "#ffffff");
    } else {
      // Reset to NT.GOV.AU defaults
      root.style.setProperty("--bs-primary", "#1f1f5f");
      root.style.setProperty("--bs-secondary", "#6c757d");
      root.style.setProperty("--bs-accordion-bg", "#ffffff");
      root.style.setProperty("--bs-accordion-color", "#3b3b3a");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

### Theme Switcher Component

```jsx
import { useTheme } from "./ThemeProvider";

function ThemeSwitcher() {
  const { theme, switchTheme } = useTheme();

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        Theme: {theme}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            onClick={() => switchTheme("light")}
          >
            Light Theme
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => switchTheme("dark")}>
            Dark Theme
          </button>
        </li>
      </ul>
    </div>
  );
}
```

## 📱 Responsive Design

### Using Bootstrap Grid with NT.GOV.AU Theme

```jsx
function ResponsiveLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9">
          <main>
            <h1>Main Content</h1>
            <AccordionExample />
          </main>
        </div>
        <div className="col-12 col-md-4 col-lg-3">
          <aside>
            <h2>Sidebar</h2>
            <div className="d-grid gap-2">
              <button className="btn btn-primary">Quick Action</button>
              <button className="btn btn-secondary">Secondary Action</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
```

## 🔧 Advanced Integration

### Custom Hooks for Bootstrap Components

```jsx
import { useEffect, useRef } from "react";
import { Collapse } from "bootstrap";

function useBootstrapCollapse(targetId) {
  const collapseRef = useRef(null);

  useEffect(() => {
    const element = document.getElementById(targetId);
    if (element) {
      collapseRef.current = new Collapse(element, {
        toggle: false,
      });
    }

    return () => {
      if (collapseRef.current) {
        collapseRef.current.dispose();
      }
    };
  }, [targetId]);

  const show = () => collapseRef.current?.show();
  const hide = () => collapseRef.current?.hide();
  const toggle = () => collapseRef.current?.toggle();

  return { show, hide, toggle };
}

// Usage
function CustomAccordion() {
  const { show, hide, toggle } = useBootstrapCollapse("collapseExample");

  return (
    <div>
      <button className="btn btn-primary" onClick={toggle}>
        Toggle Content
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component.
        </div>
      </div>
    </div>
  );
}
```

### TypeScript Support

```typescript
// types/bootstrap.d.ts
declare module "design-tokens-ntgovau" {
  export interface NTGovTheme {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
  }
}

// Component with TypeScript
interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
}

const NTButton: React.FC<ButtonProps> = ({
  variant = "primary",
  size,
  children,
  onClick,
}) => {
  const className = ["btn", `btn-${variant}`, size && `btn-${size}`]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
```

## 🧪 Testing

### Testing NT.GOV.AU Themed Components

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccordionExample from "./AccordionExample";

test("accordion toggles content visibility", async () => {
  const user = userEvent.setup();
  render(<AccordionExample />);

  const button = screen.getByRole("button", { name: /government services/i });
  const content = screen.getByText(/find government services/i);

  // Content should be visible initially
  expect(content).toBeVisible();

  // Click to collapse
  await user.click(button);
  expect(content).not.toBeVisible();

  // Click to expand
  await user.click(button);
  expect(content).toBeVisible();
});

test("applies NT.GOV.AU button styles", () => {
  render(<button className="btn btn-primary">Test Button</button>);
  const button = screen.getByRole("button");

  expect(button).toHaveClass("btn", "btn-primary");
  // Test that CSS custom properties are applied
  const styles = getComputedStyle(button);
  expect(styles.getPropertyValue("--bs-btn-color")).toBeTruthy();
});
```

## 📚 Best Practices

### Component Organization

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── Accordion/
│   │   └── Form/
│   └── layout/
│       ├── Header/
│       ├── Footer/
│       └── Sidebar/
├── hooks/
│   ├── useTheme.js
│   └── useBootstrap.js
└── styles/
    └── custom-overrides.css
```

### Performance Optimization

1. **Import only what you need** from Bootstrap JavaScript
2. **Use CSS custom properties** for theme switching instead of class swapping
3. **Lazy load** Bootstrap JavaScript components
4. **Minimize CSS** in production builds

### Accessibility Guidelines

1. **Always include proper ARIA attributes** for interactive components
2. **Test with screen readers** and keyboard navigation
3. **Ensure sufficient color contrast** meets WCAG guidelines
4. **Use semantic HTML** structure for all components
5. **Enhanced focus indicators** - All interactive elements include visible focus rings with border and box-shadow for optimal keyboard navigation
6. **Test focus states** - Accordion buttons and other interactive elements show complete focus outlines using NT.GOV.AU colors

This integration guide ensures your React application properly implements NT.GOV.AU design standards while maintaining Bootstrap's functionality and accessibility features.
