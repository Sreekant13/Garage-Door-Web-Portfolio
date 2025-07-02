import { useState, useEffect } from "react";

export default function LiveDate() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      setCurrentDate(now.toLocaleDateString('en-US', options));
    };

    updateDate();
    // Update every hour
    const interval = setInterval(updateDate, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
      <i className="fas fa-calendar-alt mr-2"></i>
      <span className="font-semibold">{currentDate}</span>
    </div>
  );
}
