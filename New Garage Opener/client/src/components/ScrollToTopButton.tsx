// src/components/ScrollToTopButton.tsx
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className="
        fixed bottom-24 right-6 z-50 
        bg-garage-orange hover:bg-orange-600 
        p-4 rounded-full shadow-lg 
        text-white
        transition-transform transform hover:scale-110
      "
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
