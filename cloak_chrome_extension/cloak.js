// Create a fullscreen white overlay
const cloak = document.createElement("div");
cloak.id = "cloak-extension-overlay";
cloak.style.cssText = `
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: #353535;
  z-index: 999999;
`;

// Inject as early as possible
document.documentElement.appendChild(cloak);
