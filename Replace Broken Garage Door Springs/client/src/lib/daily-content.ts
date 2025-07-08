export function getDailyContent(): string {
  const dailyContent = [
    "Today's Special: Free Genie remote control with purchase of a Genie ½ HP garage door opener ordered today and installed this week!",
    "Professional Tip: Test your garage door balance and lubricate monthly for optimal garage door opener performance",
    "Service Update: Next-day installation available on a new automatic garage door opener in Los Angeles and surrounding areas",
    "Special Offer: $30 off ½ HP Chamberlain belt drive smart garage door openers this week only! Order yours today!",
    "Did You Know: Battery backup openers can operate up to 50 times during power outages. Buy yours today and get a remote control free",
    "Today's Focus: $10.00 off your garage door repair today only",
    "Weekend Special: Free Genie remote control with a purchase of a new 1¼ HP Genie garage door opener"
  ];
  
  const today = new Date().getDay();
  return dailyContent[today];
}

export function getBusinessHours(): string {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay();
  
  // Monday = 1, Saturday = 6, Sunday = 0
  const isBusinessDay = currentDay >= 0 && currentDay <= 6;
  const isBusinessHours = currentHour >= 6 && currentHour < 22;
  
  if (isBusinessDay && isBusinessHours) {
    return "We're Open Now! Sunday - Saturday: 6AM - 10PM";
  } else if (isBusinessDay) {
    return "Closed Now - Opens Tomorrow at 6AM";
  } else {
    return "Closed Sundays(after 10 PM) - Opens Monday at 6AM";
  }
}
