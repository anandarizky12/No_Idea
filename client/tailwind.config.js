module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(90deg,rgba(0, 0, 10, 0.5),rgba(255, 255, 255, 0.007)), url('https://source.unsplash.com/1200x400?school')",
      },
      color: {
        primary: "#00bcd4",
        secondary: "#ff9800",
      },
      fontFamily: {
        header: ["Nunito"],
      },
      minWidth: {
        11: "18.75rem",
      },
    },
  },
  plugins: [],
};
