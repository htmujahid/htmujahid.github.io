import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark")
  window.localStorage.setItem("theme", isDark ? "dark" : "light")
  window.dispatchEvent(new Event("themechange"))
}

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative"
    >
      <SunIcon className="scale-100 transition-transform dark:scale-0" />
      <MoonIcon className="absolute scale-0 transition-transform dark:scale-100" />
    </Button>
  )
}
