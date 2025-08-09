# NT.GOV.AU Bootstrap Theme

A Bootstrap 5.3+ compatible theme built with NT.GOV.AU design tokens. This theme maintains full Bootstrap compatibility while applying the NT Government visual identity through CSS custom properties.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Build the theme
npm run build

# Preview the theme
npm run build:dev
# Then open examples/preview.html in your browser
```

## 📦 Installation in React Projects

```bash
npm install design-tokens-ntgovau
```

```jsx
// Import the theme in your React app
import "design-tokens-ntgovau/dist/ntgovau-theme.css";

function App() {
  return (
    <div>
      <h1>Welcome to NT.GOV.AU</h1>
      <button className="btn btn-primary">Get Started</button>
    </div>
  );
}
```

## 🎨 Features

- **Bootstrap Compatible**: All standard Bootstrap classes work unchanged
- **Design Token Driven**: Built from NT.GOV.AU design tokens
- **CSS Custom Properties**: Easy runtime theme switching
- **Component Focused**: Systematic component customization
- **Multi-Theme Ready**: Designed for theme switching applications

## 🏗️ Project Structure

```
design-tokens-ntgovau/
├── _variables.scss          # Generated design tokens (read-only)
├── _root.scss              # CSS custom properties mapping
├── src/
│   ├── index.scss          # Main theme entry point
│   ├── _buttons.scss       # Button customizations
│   └── _*.scss            # Other component customizations
├── dist/
│   └── ntgovau-theme.css   # Compiled theme
├── examples/              # Usage examples and previews
└── package.json          # Build configuration
```

## 🔧 Development

### Available Scripts

- `npm run build` - Production build (compressed)
- `npm run build:dev` - Development build (expanded)
- `npm run watch` - Watch mode for development
- `npm run build:all` - Build both dev and production

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
<button class="btn btn-outline-primary">Outline</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
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

- `examples/preview.html` - Complete theme preview
- `examples/react-example.jsx` - Basic React integration
- `examples/ThemeSwitcher.jsx` - Theme switching implementation

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
