import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import GhostCursor from "./components/GhostCursor";
import HalloweenOverlay from "./components/HalloweenOverlay";
import {ThanksgivingOverlay} from "./components/ThanksgivingOverlay";

// 🦃 Thanksgiving Season Logic
function isThanksgivingSeason() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return month === 11 && day >= 3 && day <= 30;
}

// 🎃 Halloween Season Logic: Sept 18 – Nov 2
// function isHalloweenSeason() {
//   const today = new Date();
//   const month = today.getMonth() + 1; // 1–12
//   const day = today.getDate();

//   return (
//     // September 18–30
//     (month === 9 && day >= 18) ||
//     // All of October
//     month === 10 ||
//     // November 1–2
//     (month === 11 && day <= 2)
//   );
// }


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

function App() {
  const turkeyStyle: React.CSSProperties = {
      cursor: isThanksgivingSeason()
        ? 'url("/turkey-cursor.png") 16 16, auto'
        : "auto",
    };
  const isHalloween = false; // 👻 set to false later or replace with environment variable
  const isThanksgiving = isThanksgivingSeason();  // 🦃 add this
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div style={turkeyStyle}>
        <Toaster />
        <Router />
        {/* {isHalloween && <HalloweenOverlay />} 🎃 Add this line */}
        {isThanksgiving && <ThanksgivingOverlay />}    {/* 🦃 new */}
        {/* <GhostCursor />  👻 Add this line */}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
