module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode : 'class',
  theme: {
    extend: {
      backgroundImage: {
        profile : "linear-gradient(90deg,rgba(0, 0, 10, 0.5),rgba(255, 255, 255, 0.007)), url('https://images.unsplash.com/photo-1422207258071-70754198c4a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80')",
        hero: "linear-gradient(90deg,rgba(0, 0, 10, 0.5),rgba(255, 255, 255, 0.007)), url('https://source.unsplash.com/1200x400?school')",
        banner : "linear-gradient(90deg,rgba(1, 1, 1, 0.8),rgba(255, 255, 255, 0.007))" ,
    
      },
      colors: {
        primary : "#413F42",
        secondary : "#f5f5f5",
        dark_1 : "#171717",
        dark_2 : "#27272a"
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
