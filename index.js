// NOTE: Format <pre><code>...</code></pre> content for Hightlight.js
document.querySelectorAll("pre code").forEach((element) => {
  element.innerHTML = fixTextIndentation(element.innerHTML);
});
document.querySelectorAll("pre code.language-html").forEach((element) => {
  element.innerHTML = fixHtmlTags(element.innerHTML);
});

/**
 * Fix HTML indentation.
 * @param {string} text Initial HTML as a string.
 * @return {string} Correctly indented string.
 */
function fixTextIndentation(text) {
  const lines = text.split("\n").filter(Boolean);
  const space = lines[0].search(/\S/);
  return lines.map((line) => line.slice(space)).join("\n");
}

/**
 * Reflace `<` with `;lt` and `>` with `;gt`.
 * @param {*} text Initial HTML as a string.
 * @returns  {string} HTML stirng that are ready to use with Highlight.js.
 */
function fixHtmlTags(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// NOTE: Highlight examples
hljs.highlightAll();

// NOTE: Toggle Highlight.js and Tailwind.css color themes
const theme = document.getElementById("color-theme");
const [light, dark] = [
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css",
];

document.getElementById("color-mode").addEventListener("click", (e) => {
  e.preventDefault();
  document.documentElement.classList.toggle("dark");
  if (theme.getAttribute("href") === light) {
    theme.setAttribute("href", dark);
  } else {
    theme.setAttribute("href", light);
  }
});

// NOTE: Hamburger/sidebar behavior
document.getElementById("hamburger").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("sidebar").classList.toggle("sidebar-active");
});
document.getElementById("sidebar").addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("sidebar").classList.toggle("sidebar-active");
});
