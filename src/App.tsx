import { useLayoutEffect } from "react";
import { useThemeStore } from "./store/useThemeStore";
import { Theme, Button, Card, Text, Flex, Badge } from "@radix-ui/themes";
import {
  Moon,
  Sun,
  Rocket,
  CheckCircle2,
  Layout,
  Database,
} from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer
} from "recharts";
import { cn } from "./lib/utils";

const DATA_MOCK = [
  { name: "React", level: 95 },
  { name: "TanStack", level: 85 },
  { name: "Zustand", level: 80 },
];

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  useLayoutEffect(() => {
    const root = window.document.documentElement;
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
      <div
        className={cn(
          "min-h-screen p-8 transition-colors duration-500",
          "bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100",
        )}
      >
        <main className="max-w-4xl mx-auto space-y-8">
          {/* Header con Zustand y Lucide */}
          <Flex
            justify="between"
            align="center"
            className="border-b border-slate-200 dark:border-slate-800 pb-6"
          >
            <Flex align="center" gap="3">
              <Rocket className="text-iris-600 w-8 h-8" />
              <Text size="6" weight="bold">
                Vite + React Template
              </Text>
            </Flex>
            <Button variant="soft" onClick={toggleDarkMode} highContrast>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
            </Button>
          </Flex>

          {/* Grid de Componentes (Prueba de Tailwind v4 y Radix) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="surface" className="p-4">
              <Flex direction="column" gap="3">
                <Text
                  size="4"
                  weight="bold"
                  className="flex items-center gap-2"
                >
                  <Layout size={18} /> Routing & State
                </Text>
                <Text color="gray">
                  TanStack Router & Zustand configurados.
                </Text>
                <Flex gap="2">
                  <Badge color="green">Ready</Badge>
                  <Badge color="blue">v4 Tailwind</Badge>
                </Flex>
              </Flex>
            </Card>

            <Card variant="surface" className="p-4">
              <Flex direction="column" gap="3">
                <Text
                  size="4"
                  weight="bold"
                  className="flex items-center gap-2"
                >
                  <Database size={18} /> Data Fetching
                </Text>
                <Text color="gray">
                  React Query listo para cachear peticiones.
                </Text>
                <div className="w-full">
                  <ResponsiveContainer width="100%" height={94}>
                    <BarChart data={DATA_MOCK}>
                      <Bar
                        dataKey="level"
                        fill="#6e56cf"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Flex>
            </Card>
          </div>

          {/* Test de función cn */}
          <div
            className={cn(
              "p-6 rounded-2xl border transition-all",
              "bg-white dark:bg-slate-900",
              "border-slate-200 dark:border-slate-800",
              "hover:shadow-xl hover:border-iris-500",
            )}
          >
            <Flex align="center" gap="3">
              <CheckCircle2 className="text-green-500" />
              <Text size="3">
                Si ves este diseño limpio y la transición suave,{" "}
                <strong>Tailwind v4</strong>,<strong> Radix UI</strong> y tu{" "}
                <strong>Store</strong> funcionan correctamente.
              </Text>
            </Flex>
          </div>
        </main>
      </div>
    </Theme>
  );
}

export default App;
