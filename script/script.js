document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.style.display = navLinks.classList.contains("active")
      ? "block"
      : "none";
  });

  // Close menu when clicking overlay
  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.style.display = "none";
  });

  // Close menu when clicking a nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      overlay.style.display = "none";
    });
  });

  // Add close button functionality
  const closeBtn = document.querySelector(".nav-close");
  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.style.display = "none";
  });

  // Toggle dropdowns in game cards
  document.querySelectorAll(".btn-toggle").forEach((button) => {
    button.addEventListener("click", function () {
      // Toggle active class on button
      this.classList.toggle("active");

      // Get the associated dropdown content
      const dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("active");

      // Close other dropdowns in the SAME card only
      const currentCard = this.closest(".game-buttons");
      currentCard.querySelectorAll(".btn-toggle").forEach((otherButton) => {
        if (otherButton !== this) {
          otherButton.classList.remove("active");
          otherButton.nextElementSibling.classList.remove("active");
        }
      });

      // Load content if not already loaded
      if (!dropdownContent.innerHTML.trim()) {
        const contentType = this.dataset.content;
        let content = "";

        if (contentType.includes("rules")) {
          content = getRulesContent(this.closest(".game-card").dataset.event);
        } else if (contentType.includes("time")) {
          content = getTimeDateContent(
            this.closest(".game-card").dataset.event
          );
        } else if (contentType.includes("labs")) {
          content = getLabsContent(this.closest(".game-card").dataset.event);
        }

        dropdownContent.innerHTML = content;
      }
    });
  });
});

// Dummy content retrieval functions (replace with your actual logic)
function getRulesContent(eventName) {
  switch (eventName) {
    case "project":
      return `• Inspiration: Present impactful ideas via PPT or soft copy.
      • Brainwave: Any software/hardware project with physical implementation allowed.
      • Rules: Team size 2-4, original project, live demo, any tech stack, documentation required.
      
      `;
    case "coding":
      return `• Individual participation only
• Three rounds: MCQ, Coding, DSA
• Languages: C++, Java, Python
• No external libraries allowed
• Time limit strictly enforced`;
    case "neoncricket":
      return `• 5 players per team
• 4 overs per match
• Played in dark room with neon equipment
• Special scoring rules apply
• Safety equipment mandatory`;
    case "roadies":
      return `• Teams of 2 members
• Multiple elimination rounds
• Physical and mental challenges
• Fair play rules enforced
• Registration deadline strict`;
    case "aiprompting":
      return `• Individual participation
• Three creative rounds
• Time limits per prompt
• Original content only
• Tools provided by organizers`;
    case "stumbleguys":
      return `• Single player tournament
• No mods or cheats allowed
• Multiple elimination rounds
• Fair play monitored
• Winners advance to finals`;
    default:
      return "Rules not available for this event.";
  }
}

function getTimeDateContent(eventName) {
  const dates = {
    project: "March 28, 2025",
    coding: "March 28, 2025",
    neoncricket: "March 29, 2025",
    roadies: "March 29, 2025",
    aiprompting: "March 29, 2025",
    stumbleguys: "March 28, 2025",
  };

  return `Date: ${dates[eventName]}
Time: 9:00 AM - 4:00 PM
Venue: Check Lab Assignment`;
}

// ############################## LABS CONTENT ############################## Kal logic dhekte 
function getLabsContent(eventName) {
  const venues = {
    project: "Library",
    coding: "Computer Lab 2",
    neoncricket: "LCS Hall",
    roadies: "Behind Canteen",
    aiprompting: "AI Research Lab",
    stumbleguys: "Gaming Arena",
  };

  return `Venue: ${venues[eventName]}
Systems: Latest Configuration
Software: Pre-installed
Internet: Available
Support: Technical team on-site`;
}
