// Example React component using NT.GOV.AU Design Tokens
// Save this as ExampleComponent.jsx in your React project

import React from "react";
// Import the compiled CSS theme
import "design-tokens-ntgovau/dist/ntgovau-design-tokens.css";

const ExampleComponent = () => {
  return (
    <div className="container-fluid">
      {/* Header section */}
      <header className="bg-dark text-white p-5">
        <h1 className="h2 mb-3">NT.GOV.AU Bootstrap Theme</h1>
        <p className="mb-0">
          Using Bootstrap classes with NT.GOV.AU design tokens
        </p>
      </header>

      {/* Main content */}
      <main className="p-5">
        <div className="mb-5">
          <h2 className="h3 mb-4">Typography Examples</h2>

          <h3 className="h4 mb-3">Headings</h3>
          <h1 className="h1">Heading 1</h1>
          <h2 className="h2">Heading 2</h2>
          <h3 className="h3">Heading 3</h3>
          <h4 className="h4">Heading 4</h4>
          <h5 className="h5">Heading 5</h5>
          <h6 className="h6">Heading 6</h6>

          <h3 className="h4 mb-3">Body Text</h3>
          <p className="fs-5">Large body text for important content</p>
          <p>Medium body text for regular content</p>
          <p className="small">Small body text for secondary information</p>
        </div>

        {/* Button examples */}
        <div className="mb-5">
          <h2 className="h3 mb-4">Button Examples</h2>
          <div className="mb-4">
            <button className="btn btn-primary me-3">Primary Button</button>
            <button className="btn btn-secondary me-3">Secondary Button</button>
            <button className="btn btn-tertiary me-3">Tertiary Button</button>
          </div>

          <div className="mb-4">
            <button className="btn btn-primary btn-sm me-3">
              Small Button
            </button>
            <button className="btn btn-primary me-3">Default Button</button>
            <button className="btn btn-primary btn-lg me-3">
              Large Button
            </button>
          </div>

          <div className="mb-4">
            <button className="btn btn-primary me-3">Normal</button>
            <button className="btn btn-primary me-3" disabled>
              Disabled Button
            </button>
          </div>
        </div>

        {/* Color examples */}
        <div className="mb-5">
          <h2 className="h3 mb-4">Bootstrap Color Classes</h2>

          <div className="mb-4">
            <h3 className="h5 mb-3">Text Colors</h3>
            <p className="text-body mb-3">Default body text</p>
            <p className="text-primary mb-3">Primary text</p>
            <p className="text-info mb-3">Info text</p>
            <p className="text-success mb-3">Success text</p>
            <p className="text-warning mb-3">Warning text</p>
            <p className="text-danger mb-3">Danger text</p>
            <p className="text-muted mb-3">Muted text</p>
          </div>

          <div className="mb-4">
            <h3 className="h5 mb-3">Background Colors</h3>
            <div className="bg-info p-3 mb-3">Info background</div>
            <div className="bg-success p-3 mb-3">Success background</div>
            <div className="bg-warning p-3 mb-3">Warning background</div>
            <div className="bg-danger p-3 mb-3">Danger background</div>
            <div className="bg-light p-3 mb-3">Light background</div>
            <div className="bg-secondary p-3 mb-3">Secondary background</div>
          </div>
        </div>

        {/* Bootstrap Grid example */}
        <div className="mb-5">
          <h2 className="h3 mb-4">Bootstrap Grid System</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="bg-primary text-white p-3 mb-3">Column 1</div>
            </div>
            <div className="col-md-4">
              <div className="bg-secondary p-3 mb-3">Column 2</div>
            </div>
            <div className="col-md-4">
              <div className="bg-info p-3 mb-3">Column 3</div>
            </div>
          </div>
        </div>

        {/* CSS Custom Properties example */}
        <div className="mb-5">
          <h2 className="h3 mb-4">CSS Custom Properties</h2>
          <div
            style={{
              backgroundColor: "var(--bs-primary)",
              color: "var(--bs-white)",
              padding: "1rem",
              borderRadius: "0.375rem",
            }}
          >
            This div uses Bootstrap CSS custom properties with NT.GOV.AU values
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary p-4 text-center">
        <p className="small mb-0">
          Built with Bootstrap classes and NT.GOV.AU Design Tokens
        </p>
      </footer>
    </div>
  );
};

export default ExampleComponent;
