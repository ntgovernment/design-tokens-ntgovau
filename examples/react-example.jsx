// Example React component showing how to use the NT.GOV.AU Bootstrap theme
// Save this as ExampleComponent.jsx in your React project

import React from "react";
// Import the compiled theme CSS
import "design-tokens-ntgovau/dist/ntgovau-theme.css";

const ExampleComponent = () => {
  return (
    <div className="container-fluid">
      {/* Header section */}
      <header
        className="bg-primary text-white"
        style={{ padding: "40px 20px" }}
      >
        <h1 className="h2" style={{ marginBottom: "16px" }}>
          NT.GOV.AU Application
        </h1>
        <p style={{ marginBottom: 0 }}>
          Built with Bootstrap and NT.GOV.AU design tokens
        </p>
      </header>

      {/* Main content */}
      <main style={{ padding: "40px 20px" }}>
        <div style={{ marginBottom: "40px" }}>
          <h2 className="h3" style={{ marginBottom: "24px" }}>
            Welcome to Our Service
          </h2>

          <p style={{ marginBottom: "24px" }}>
            This is an example of how to use the NT.GOV.AU Bootstrap theme in a
            React application. All Bootstrap classes work as expected, but now
            they're styled with NT.GOV.AU design tokens.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            <button className="btn btn-primary">Primary Action</button>
            <button className="btn btn-secondary">Secondary Action</button>
            <button className="btn btn-outline-primary">Tertiary Action</button>
          </div>
        </div>

        {/* Button examples */}
        <div style={{ marginBottom: "40px" }}>
          <h3 className="h4" style={{ marginBottom: "16px" }}>
            Button Examples
          </h3>

          <div style={{ marginBottom: "16px" }}>
            <h4 className="h6">Different sizes:</h4>
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "16px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <button className="btn btn-primary btn-sm">Small</button>
              <button className="btn btn-primary">Default</button>
              <button className="btn btn-primary btn-lg">Large</button>
            </div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h4 className="h6">Button states:</h4>
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "16px",
                flexWrap: "wrap",
              }}
            >
              <button className="btn btn-primary">Normal</button>
              <button className="btn btn-primary active">Active</button>
              <button className="btn btn-primary" disabled>
                Disabled
              </button>
            </div>
          </div>
        </div>

        {/* Text utilities */}
        <div style={{ marginBottom: "40px" }}>
          <h3 className="h4" style={{ marginBottom: "16px" }}>
            Text Colors
          </h3>

          <p className="text-primary">This is primary text</p>
          <p className="text-secondary">This is secondary text</p>
          <p className="text-info">This is info text</p>
          <p className="text-success">This is success text</p>
          <p className="text-warning">This is warning text</p>
          <p className="text-danger">This is danger text</p>
          <p className="text-muted">This is muted text</p>
        </div>

        {/* Background examples */}
        <div style={{ marginBottom: "40px" }}>
          <h3 className="h4" style={{ marginBottom: "16px" }}>
            Background Colors
          </h3>

          <div
            className="bg-info"
            style={{
              padding: "16px",
              marginBottom: "8px",
              borderRadius: "4px",
            }}
          >
            Info background
          </div>
          <div
            className="bg-success"
            style={{
              padding: "16px",
              marginBottom: "8px",
              borderRadius: "4px",
            }}
          >
            Success background
          </div>
          <div
            className="bg-warning"
            style={{
              padding: "16px",
              marginBottom: "8px",
              borderRadius: "4px",
            }}
          >
            Warning background
          </div>
          <div
            className="bg-danger"
            style={{
              padding: "16px",
              marginBottom: "8px",
              borderRadius: "4px",
            }}
          >
            Danger background
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-light"
        style={{ padding: "20px", textAlign: "center" }}
      >
        <p className="text-muted" style={{ margin: 0 }}>
          Built with NT.GOV.AU Design Tokens
        </p>
      </footer>
    </div>
  );
};

export default ExampleComponent;
