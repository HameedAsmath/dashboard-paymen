import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import type { Theme } from "../types";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "light";
  });

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const antdThemeConfig = {
    algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: "#6366F1",
      colorBgContainer: isDark ? "#1C1C1C" : "#FFFFFF",
      colorBgElevated: isDark ? "#374151" : "#FFFFFF",
      colorBgLayout: isDark ? "#1C1C1C" : "#F9FAFB",
      colorText: isDark ? "#F9FAFB" : "#1C1C1C",
      colorTextSecondary: isDark ? "#9CA3AF" : "#6B7280",
      colorBorder: isDark ? "#374151" : "#E5E7EB",
      borderRadius: 8,
      fontSize: 14,
      fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    },
    components: {
      Layout: {
        siderBg: isDark ? "#1C1C1C" : "#FFFFFF",
        bodyBg: isDark ? "#1C1C1C" : "#FFFFFF",
        headerBg: isDark ? "#1C1C1C" : "#FFFFFF",
      },
      Menu: {
        itemBg: "transparent",
        itemSelectedBg: isDark ? "#374151" : "#F3F4F6",
        itemHoverBg: isDark ? "#374151" : "#F3F4F6",
        itemSelectedColor: "#6366F1",
        itemColor: isDark ? "#D1D5DB" : "#6B7280",
      },
      Card: {
        colorBgContainer: isDark ? "#1C1C1C" : "#FFFFFF",
      },
      Table: {
        colorBgContainer: isDark ? "#1C1C1C" : "#FFFFFF",
        headerBg: isDark ? "#374151" : "#F9FAFB",
      },
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
