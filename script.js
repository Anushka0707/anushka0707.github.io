document.addEventListener("DOMContentLoaded", () => {
  const config = window.PORTFOLIO_CONFIG || {};
  const githubUsername = (config.githubUsername || "").trim();
  const hasGithub = githubUsername && githubUsername !== "YOUR_GITHUB_USERNAME";

  document.querySelectorAll("[data-repo]").forEach((link) => {
    if (hasGithub) {
      link.href = `https://github.com/${githubUsername}/${link.dataset.repo}`;
      link.target = "_blank";
      link.rel = "noreferrer";
    } else {
      link.dataset.disabled = "true";
      link.textContent = "Add GitHub username in site-config.js";
      link.removeAttribute("href");
    }
  });

  document.querySelectorAll(".config-github").forEach((link) => {
    if (hasGithub) {
      link.href = `https://github.com/${githubUsername}`;
      link.target = "_blank";
      link.rel = "noreferrer";
    } else {
      link.hidden = true;
    }
  });

  const email = (config.email || "").trim();
  document.querySelectorAll(".config-email").forEach((link) => {
    if (email && email !== "your.email@example.com") {
      link.href = `mailto:${email}`;
    } else if (link.getAttribute("href")?.startsWith("mailto:")) {
      link.hidden = true;
    }
  });

  const optionalLinks = [
    [".config-linkedin", config.linkedInUrl],
    [".config-resume", config.resumeUrl],
  ];
  optionalLinks.forEach(([selector, url]) => {
    document.querySelectorAll(selector).forEach((link) => {
      if (url) {
        link.href = url;
        link.hidden = false;
        if (!url.startsWith("mailto:")) {
          link.target = "_blank";
          link.rel = "noreferrer";
        }
      }
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
