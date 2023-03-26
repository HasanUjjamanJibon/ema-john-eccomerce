/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d63199",

          secondary: "#0de294",

          accent: "#9d6ff2",

          neutral: "#1B252C",

          "base-100": "#F6EDF7",

          info: "#829AF7",

          success: "#6FDCCA",

          warning: "#C17606",

          error: "#E12333",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
