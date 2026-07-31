document.addEventListener("DOMContentLoaded", () => {
  const config = window.PORTFOLIO_CONFIG || {};
  const githubUsername = (config.githubUsername || "").trim();
  const hasGithub = githubUsername && githubUsername !== "YOUR_GITHUB_USERNAME";

  document.querySelectorAll("[data-repo]").forEach((link) => {
    if (hasGithub) {
      link.href = `https://github.com/${githubUsername}/${link.dataset.repo}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else if (!link.getAttribute("href")) {
      link.dataset.disabled = "true";
      link.textContent = "Repository coming soon";
    }
  });

  document.querySelectorAll(".config-github").forEach((link) => {
    if (hasGithub) {
      link.href = `https://github.com/${githubUsername}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

  const email = (config.email || "").trim();
  document.querySelectorAll(".config-email").forEach((link) => {
    if (email) link.href = `mailto:${email}`;
  });

  const optionalLinks = [
    [".config-linkedin", config.linkedInUrl],
    [".config-resume", config.resumeUrl],
  ];

  optionalLinks.forEach(([selector, url]) => {
    if (!url) return;
    document.querySelectorAll(selector).forEach((link) => {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.hidden = false;
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
