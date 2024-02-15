/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#a3e635",
        primary: "#0f172a",
        secondary: "#94a3b8",

        slate100: "#f1f5f9",
        slate300: "#cbd5e1",
        slate700: "#334155",
        slate800: "#1e293b",

        lime300: "#bef264",
      },
      fontFamily: {
        heading: "Inter_600SemiBold",
        subtitle: "Inter_500Medium",
        body: "Inter_400Regular",
        bold: "Inter_700Bold",
      },
    },
  },
  plugins: [],
};
