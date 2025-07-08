import { getDailyContent } from "@/lib/daily-content";

export default function DailyBanner() {
  const dailyContent = getDailyContent();

  return (
    <div className="sticky inset-x-0  bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm font-medium">
          ⭐ <span>{dailyContent}</span>
        </p>
      </div>
    </div>
  );
}
