const colors = require("tailwindcss/colors");

module.exports = {
  purge: { enabled: true, content: ["index.html"] },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
    },
  },
};
