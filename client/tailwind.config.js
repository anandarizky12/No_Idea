module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(90deg,rgba(0, 0, 10, 0.5),rgba(255, 255, 255, 0.007)), url('https://source.unsplash.com/1200x400?school')",
        login : "linear-gradient(50deg,rgba(255, 255, 255, 255),rgba(255, 255, 255, 0.5),url('https://images.unsplash.com/photo-1540387517454-e881631cf830?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
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
