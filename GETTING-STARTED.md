# 🎯 INSTRUCTIONS: Creating Your First NT.GOV.AU Bootstrap Theme

## ✅ What We've Created

Your project now has the complete structure for creating a Bootstrap theme from NT.GOV.AU design tokens:

```
design-tokens-ntgovau/
├── 📄 _variables.scss          # Your design tokens (read-only)
├── 🎨 _root.scss              # CSS custom properties mapping
├── 📁 src/
│   ├── 🎯 index.scss          # Main theme entry point
│   ├── 🔘 _buttons.scss       # Button component customization
│   └── 🔙 _backtotopbutton.scss # Back-to-top button component
├── 📁 examples/              # Preview files and React examples
├── 📄 package.json           # Build configuration
└── 📚 README.md              # Complete documentation
```

## 🚀 Your Theme is Complete and Working!

### ✅ Build Process Fixed

The SCSS compilation now works without deprecation warnings:
- Uses modern `@use` syntax instead of deprecated `@import`
- Proper variable imports in all component files
- Clean build output with no warnings

### ✅ Available Build Commands

```bash
# Install dependencies
npm install

# Development build (expanded CSS for debugging)
npm run dev

# Production build (minified CSS)
npm run build

# Watch mode for development
npm run watch

# Build both versions
npm run all

# Quick preview
npm run preview
```
npm run build:dev

### ✅ Test Your Theme

Open `examples/preview.html` in your browser to see your theme in action.

### ✅ Current Components Implemented

1. **Button Components** (`src/_buttons.scss`)
   - Primary, secondary, tertiary variants
   - All Bootstrap button states (hover, active, disabled)
   - Small, default, and large sizes
   - Uses Bootstrap CSS custom properties (`--bs-btn-*`)

2. **Back-to-Top Button** (`src/_backtotopbutton.scss`)
   - Special ochre-colored component
   - Usage: `<button class="btn back-to-top">Back to Top</button>`
   - Uses NT.GOV.AU secondary ochre color

3. **Typography System**
   - NT.GOV.AU Lato font family
   - Proper color mapping from design tokens

### 🔄 Adding More Components

Follow this pattern for new components:

```scss
// Example: src/_forms.scss
@use "../variables" as *;

.form-control {
  --bs-form-control-color: #{$nt-gov-au-brand-typography-text-colours-text-body-default};
  --bs-form-control-bg: #{$nt-gov-au-brand-basic-branded-elements-surface-colours-page-primary};
  --bs-form-control-border-color: #{$nt-gov-au-brand-basic-branded-elements-border-accent-colours-border-subtle};
}
```

Then import it in `src/index.scss`:
```scss
@use "forms";
```

## 🎨 Theme Switching Setup

### For React Applications

```jsx
// 1. Install Bootstrap and your theme
npm install bootstrap design-tokens-ntgovau

// 2. Import Bootstrap first, then your theme
import 'bootstrap/dist/css/bootstrap.min.css';
import 'design-tokens-ntgovau/dist/ntgovau-theme.css';

// 3. Use standard Bootstrap classes
<button className="btn btn-primary">NT.GOV.AU Button</button>
```

### For Multiple Themes

1. **Clone this repository** for each theme variant
2. **Replace `_variables.scss`** with different design tokens
3. **Keep same structure** and build process
4. **Build each theme** to create different CSS files
5. **Use theme switcher** (see `examples/ThemeSwitcher.jsx`)

## 🔧 Key Technical Decisions Made

### ✅ Bootstrap CSS Custom Properties Approach

- Uses Bootstrap 5.3+ `--bs-*` custom properties
- Allows runtime theme switching
- Maintains 100% Bootstrap compatibility
- Future-proof as Bootstrap evolves

### ✅ Design Token Integration

- Maps your `_variables.scss` to Bootstrap variables
- Preserves design token naming convention
- Read-only approach prevents accidental edits

### ✅ Component-by-Component Strategy

- Start with buttons (most commonly used)
- Add components systematically
- Each component in separate file for maintainability

## 🎯 Success Criteria

✅ **Your theme is complete and working!**

- [x] `npm run dev` and `npm run build` complete without errors
- [x] `dist/ntgovau-theme.css` contains 240+ lines of actual CSS
- [x] `examples/preview.html` displays NT.GOV.AU styled components
- [x] Buttons show correct NT.GOV.AU colors, fonts, and spacing
- [x] All Bootstrap classes work as expected
- [x] No deprecation warnings during build
- [x] Back-to-top button component implemented

## ✅ What Works Now

### Build System
- Modern Sass with `@use` syntax (no warnings)
- Multiple build targets (dev, production, watch)
- Clean CSS output with sourcemaps

### Components
- **Primary buttons**: NT.GOV.AU blue (`#1f1f5f`)
- **Secondary buttons**: White with blue border
- **Tertiary buttons**: Outline style
- **Back-to-top buttons**: Ochre color (`#c33826`)
- **All button sizes**: sm, default, lg

### Integration
- Bootstrap CDN + theme override pattern
- React-ready with theme switching capability
- Complete documentation and examples

## 🚨 Common Issues & Solutions

### Issue: Empty CSS Output

**Solution:** Check import paths in `src/index.scss`

### Issue: Variables Not Resolving

**Solution:** Ensure `_variables.scss` is properly imported

### Issue: Colors Not Applying

**Solution:** Verify color values don't have extra `ff` suffix in CSS output

### Issue: Build Errors

**Solution:** Check SCSS syntax, especially CSS custom property declarations

## 📚 Documentation Created

- `README.md` - Complete project documentation
- `THEME-CREATION-GUIDE.md` - Detailed theme creation process
- `examples/` - Working code examples for React integration
- `examples/ThemeSwitcher.jsx` - Complete theme switching implementation

## 🎉 What You've Achieved

You now have:

1. **Production-ready Bootstrap theme infrastructure**
2. **Design token-driven development process**
3. **Multi-theme switching capability**
4. **Complete React integration examples**
5. **Scalable component customization system**
6. **Full Bootstrap compatibility**

## 🔄 Iteration Process

For each new theme:

1. Clone this repository structure
2. Replace design tokens
3. Run build process
4. Test components
5. Deploy theme CSS file
6. Update theme switcher configuration

This approach scales to unlimited theme variants while maintaining consistency and Bootstrap compatibility.
