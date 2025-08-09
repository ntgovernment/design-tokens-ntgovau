# Changelog

All notable changes to the NT.GOV.AU Bootstrap Theme project.

## [1.0.0] - 2025-08-10

### ✅ Completed Features

#### Build System
- Modern Sass compilation with `@use` syntax (no deprecation warnings)
- Multiple build scripts: `dev`, `build`, `watch`, `all`, `preview`
- Clean CSS output with sourcemaps
- Bootstrap CDN integration in examples

#### Components Implemented
- **Button System** - Complete Bootstrap button component override
  - Primary, secondary, tertiary variants
  - Small, default, large sizes
  - All Bootstrap states (normal, hover, active, disabled)
  - Uses CSS custom properties for theme switching
  
- **Back-to-Top Button** - Special component using NT.GOV.AU ochre
  - Class: `.btn.back-to-top`
  - Color: Secondary ochre (`#c33826`)
  - Hover state: Darker ochre (`#a22f20`)

#### Design Token Integration
- Complete mapping of NT.GOV.AU design tokens to Bootstrap CSS variables
- CSS custom properties for runtime theme switching
- Color system: Primary blue, secondary gray, semantic colors
- Typography: Lato font family with proper weights and sizes

#### Documentation
- Updated README.md with current project state
- Updated GETTING-STARTED.md with working instructions
- Complete examples in `examples/preview.html`
- React integration examples and theme switcher

### 🔧 Technical Improvements

#### Sass Architecture
- Fixed import paths using `@use` syntax
- Proper variable scope with `@use "../variables" as *`
- Modular component structure
- No build warnings or deprecation messages

#### CSS Output
- Development build: 240+ lines of expanded CSS
- Production build: Minified CSS with sourcemaps
- Proper CSS custom property cascade
- Bootstrap compatibility maintained

#### Examples and Testing
- Complete preview page with Bootstrap CDN
- All button variants and states demonstrated
- Color system showcase
- React integration code examples

### 📦 Project Structure

```
design-tokens-ntgovau/
├── _variables.scss              # NT.GOV.AU design tokens (read-only)
├── _root.scss                  # CSS custom properties mapping
├── src/
│   ├── index.scss              # Main theme entry point
│   ├── _buttons.scss           # Button component customizations
│   └── _backtotopbutton.scss   # Back-to-top button component
├── dist/
│   ├── ntgovau-theme.css       # Compiled theme CSS
│   └── ntgovau-theme.css.map   # Source map
├── examples/
│   ├── preview.html            # Complete theme preview
│   ├── react-example.jsx       # React integration example
│   └── ThemeSwitcher.jsx       # Theme switching implementation
├── package.json                # Build configuration
├── README.md                   # Project documentation
├── GETTING-STARTED.md          # Setup instructions
└── CHANGELOG.md               # This file
```

### 🎯 Ready for Production

This theme is now production-ready for:
- Integration into React applications
- Theme switching systems
- NT.GOV.AU web properties
- Bootstrap-based projects requiring NT.GOV.AU branding

### 🔄 Next Steps for Extension

To add more components, follow the established pattern:
1. Create new `_component.scss` file in `src/`
2. Use `@use "../variables" as *` for design tokens
3. Override Bootstrap CSS custom properties
4. Import in `src/index.scss`
5. Test in preview page
6. Rebuild with `npm run dev`

The foundation is solid and scalable for additional NT.GOV.AU components.
