import { useLayoutEffect } from "react";
import { useThemeStore } from "./store/useThemeStore";
import { Theme } from "@radix-ui/themes";


function App({ children }: { children: React.ReactNode } ) {
  const isDarkMode = useThemeStore((s) => s.isDarkMode);

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [isDarkMode]);

  return (
    <Theme appearance={isDarkMode ? "dark" : "light"} accentColor="iris">
      {children}
    </Theme>
  );
}

export default App;
