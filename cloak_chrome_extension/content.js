window.addEventListener("DOMContentLoaded", () => {
  // Apply base styles if body exists
  if (document.body) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#3ad9ff";

    // Style all anchors
    document.querySelectorAll("a").forEach((a) => {
      a.style.color = "#ff65dd";
    });
  }

  // Safe check for breadcrumbs
  const breadcrumbs = document.getElementById("breadcrumbs");
  if (breadcrumbs) breadcrumbs.style.backgroundColor = "black";

  // Style buttons if they exist
  const buttons = document.querySelectorAll(
    ".ic-Profile-layout__Primary .header-block .button-area-block button, .ic-Layout-contentMain .header-block .button-area-block button"
  );
  if (buttons.length > 0) {
    buttons.forEach((button) => {
      button.style.backgroundColor = "cyan";
      button.style.color = "#000000";
      button.style.height = "fit-content";
    });
  }
  let previouslyActiveLink = null;
  let previouslyActiveTextDiv = null;
  let previouslyActiveSvg = null;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const li = mutation.target;
        const isNowActive = li.classList.contains(
          "ic-app-header__menu-list-item--active"
        );

        if (isNowActive) {
          const link = li.querySelector("a");
          const textDiv = link?.querySelector("div.menu-item__text");
          const svgIcon = link?.querySelector("svg.ic-icon-svg");

          if (link) {
            // Reset previous
            if (previouslyActiveLink && previouslyActiveLink !== link) {
              previouslyActiveLink.style.backgroundColor = "black";
            }

            if (
              previouslyActiveTextDiv &&
              previouslyActiveTextDiv !== textDiv
            ) {
              previouslyActiveTextDiv.style.color = "white";
              previouslyActiveTextDiv.style.fontWeight = "";
            }

            if (previouslyActiveSvg && previouslyActiveSvg !== svgIcon) {
              previouslyActiveSvg.style.fill = "white";
            }

            // Set current active styles
            link.style.backgroundColor = "cyan";
            previouslyActiveLink = link;

            if (textDiv) {
              textDiv.style.color = "black";
              textDiv.style.fontWeight = "bold";
              previouslyActiveTextDiv = textDiv;
            }

            if (svgIcon) {
              svgIcon.style.fill = "black";
              previouslyActiveSvg = svgIcon;
            }
          }
        }
      }
    });
  });

  // Initial setup
  document
    .querySelectorAll("li.ic-app-header__menu-list-item")
    .forEach((li) => {
      observer.observe(li, { attributes: true, attributeFilter: ["class"] });

      const isActive = li.classList.contains(
        "ic-app-header__menu-list-item--active"
      );
      const link = li.querySelector("a");
      const textDiv = link?.querySelector("div.menu-item__text");
      const svgIcon = link?.querySelector("svg.ic-icon-svg");

      if (isActive) {
        if (link) {
          link.style.backgroundColor = "cyan";
          previouslyActiveLink = link;
        }

        if (textDiv) {
          textDiv.style.color = "black";
          textDiv.style.fontWeight = "bold";
          previouslyActiveTextDiv = textDiv;
        }

        if (svgIcon) {
          svgIcon.style.fill = "black";
          previouslyActiveSvg = svgIcon;
        }
      } else {
        if (textDiv) {
          textDiv.style.color = "white";
        }
        if (svgIcon) {
          svgIcon.style.fill = "white";
        }
      }
    });

  // Inject custom style overrides
  const style = document.createElement("style");
  style.textContent = `
    .css-1gto5tw-tray {
        background-color: black !important;
    }
    .css-jph4wy-view-link {
        color: rgb(255, 101, 221) !important;
    }
    .ic-app-header{
        background-color: #000000;
        border-right: solid;
    }
    tr: {
        background-color: #161616;
        color: white;
    }
          th{
        background-color: #181818 !important;
    }    
    td{
        background-color: #181818 !important;
    }

    tr:hover {
        background-color: #00ffff !important;
        color: rgb(255, 101, 221) !important;
    }
    tr:hover a.roster_user_name.student_context_card_trigger{
        color: rgb(255, 101, 221) !important;
    }
    .ic-Table td {
        border-bottom-color: #00ffff;
    }
    .ic-Table.ic-Table--striped tbody tr:nth-child(odd) td {
        background-color: #000000 !important;
        color: white !important;   
    }
    .ic-Table.ic-Table--hover-row tbody tr {
        background-color: #181818;  
    }
    .ui-tabs .ui-tabs-panel {
        border-color: #00ffff;
        padding: 14px;
        background-color: #eb005a;
        color: white;
    }
    .ui-tabs .ui-tabs-nav li a {
        color: #00ffff;
    }
    .ic-Table--striped tr:nth-child(odd) .roster_user_name {
        color:  #00ffff;
    }
    a:focus, a:hover {
        color: black;
    }
    a {
        color:  #00ffff;
    }
  
    
    .header-bar{
        background-color: black;
    }
  `;
  document.head.appendChild(style);

  // Remove loading cloak (if present)
  const cloak = document.getElementById("cloak-extension-overlay");
  if (cloak) cloak.remove();
});
