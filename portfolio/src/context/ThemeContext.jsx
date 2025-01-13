import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  const theme = {
    bg: isDark ? "bg-github-dark" : "bg-github-light",
    text: isDark ? "text-github-text-dark" : "text-github-text-light",
    border: isDark ? "border-github-border-dark" : "border-github-border-light",
    hover: isDark ? "hover:text-white" : "hover:text-gray-900",
    isDark,
    setIsDark,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
