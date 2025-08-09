// ThemeSwitcher.jsx - Example of how to implement theme switching in React
import React, { createContext, useContext, useEffect, useState } from "react";

// Theme configuration
const THEMES = {
  ntgovau: {
    name: "NT.GOV.AU",
    cssFile: "/themes/ntgovau-theme.css",
    description: "Primary NT Government branding",
  },
  central: {
    name: "NT Central",
    cssFile: "/themes/central-theme.css",
    description: "Central Australia theme variant",
  },
  // Add more themes as they are created
};

// Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export function ThemeProvider({ children, defaultTheme = "ntgovau" }) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadTheme(currentTheme);
  }, [currentTheme]);

  const loadTheme = async (themeName) => {
    if (!THEMES[themeName]) {
      console.warn(`Theme "${themeName}" not found`);
      return;
    }

    setIsLoading(true);

    try {
      // Remove existing theme
      const existingThemeLink = document.querySelector("link[data-theme]");
      if (existingThemeLink) {
        existingThemeLink.remove();
      }

      // Create and load new theme
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = THEMES[themeName].cssFile;
      link.setAttribute("data-theme", themeName);

      // Wait for CSS to load
      await new Promise((resolve, reject) => {
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
      });

      // Store theme preference
      localStorage.setItem("preferred-theme", themeName);
    } catch (error) {
      console.error(`Failed to load theme "${themeName}":`, error);
    } finally {
      setIsLoading(false);
    }
  };

  const switchTheme = (themeName) => {
    if (themeName !== currentTheme && THEMES[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    currentTheme,
    themes: THEMES,
    switchTheme,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Theme Switcher Component
export function ThemeSwitcher({ className = "" }) {
  const { currentTheme, themes, switchTheme, isLoading } = useTheme();

  return (
    <div className={`theme-switcher ${className}`}>
      <label htmlFor="theme-select" className="form-label">
        Choose Theme:
      </label>
      <select
        id="theme-select"
        className="form-select"
        value={currentTheme}
        onChange={(e) => switchTheme(e.target.value)}
        disabled={isLoading}
      >
        {Object.entries(themes).map(([key, theme]) => (
          <option key={key} value={key}>
            {theme.name}
          </option>
        ))}
      </select>
      {isLoading && <small className="text-muted">Loading theme...</small>}
    </div>
  );
}

// Example App component showing usage
export function App() {
  return (
    <ThemeProvider defaultTheme="ntgovau">
      <div className="container-fluid">
        <header className="bg-primary text-white p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3 mb-0">Multi-Theme Application</h1>
            <ThemeSwitcher />
          </div>
        </header>

        <main className="p-4">
          <div className="row">
            <div className="col-md-8">
              <h2>Theme Demonstration</h2>
              <p>
                This application demonstrates how to switch between different
                Bootstrap themes at runtime. Each theme uses the same
                HTML/Bootstrap classes but applies different design tokens.
              </p>

              <div className="mb-4">
                <h3>Buttons</h3>
                <div className="d-flex gap-2 mb-3">
                  <button className="btn btn-primary">Primary</button>
                  <button className="btn btn-secondary">Secondary</button>
                  <button className="btn btn-outline-primary">Outline</button>
                </div>
              </div>

              <div className="mb-4">
                <h3>Alerts</h3>
                <div className="alert alert-info">
                  This is an info alert that will change colors based on the
                  selected theme.
                </div>
                <div className="alert alert-success">
                  This is a success alert demonstrating theme consistency.
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-light p-3 rounded">
                <h4>Theme Information</h4>
                <ThemeInfo />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

// Helper component to show current theme info
function ThemeInfo() {
  const { currentTheme, themes } = useTheme();
  const theme = themes[currentTheme];

  return (
    <div>
      <h5>{theme.name}</h5>
      <p className="small text-muted">{theme.description}</p>
      <p className="small">
        <strong>CSS File:</strong> <code>{theme.cssFile}</code>
      </p>
    </div>
  );
}

export default App;
