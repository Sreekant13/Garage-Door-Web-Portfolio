import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface NavigationProps {
  activeKey: string
  onSelect: (key: string) => void
}

const tabs = [
  { key: "overview",       label: "Overview" },
  { key: "specifications", label: "Specifications" },
  { key: "features",       label: "Features" },
  { key: "installation",   label: "Installation" },
  { key: "support",        label: "Support" },
] as const

export default function Navigation({ activeKey, onSelect }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleClick(key: string) {
    onSelect(key)
    // Overview scrolls to the hero; any other tab scrolls to the specs wrapper
    const scrollId = key === "overview" ? "overview" : "specifications"
    const el = document.getElementById(scrollId)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    setMobileOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-gray-900">Crusader Garage Door Opener/Repair</h1>

        <div className="hidden md:flex space-x-4">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeKey === key
                  ? "border-b-2 border-brand-blue text-brand-blue"
                  : "text-gray-700 hover:text-brand-blue"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-500"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-brand-blue"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
