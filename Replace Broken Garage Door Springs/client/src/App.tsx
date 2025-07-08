import { Router as WouterRouter, Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { useHashLocation } from "wouter/use-hash-location";
import GhostCursor from "./components/GhostCursor";
import HalloweenOverlay from "./components/HalloweenOverlay";
import {ThanksgivingOverlay} from "./components/ThanksgivingOverlay";

import Home from "@/pages/home";
import GarageDoorRepairArea from "@/pages/GarageDoorRepairArea";
import { useEffect } from "react";

// 🦃 Thanksgiving Season Logic
function isThanksgivingSeason() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return month === 11 && day >= 3 && day <= 30;
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />      
      {/* ✔ Match any URL like /Garage-Door-Repair-Agoura-Hills-91301 */}
      <Route path={/^\/Garage-Door-Repair-.+$/} component={GarageDoorRepairArea} />
      {/* fallback */}
      <Route>
        <div className="p-8 text-center">Not found</div>
      </Route>
    </Switch>
  );
}

export default function App() {
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
        <HelmetProvider>
          <Toaster />
          {/* ✅ Proper Wouter provider */}
          <WouterRouter hook={useHashLocation}>
            <ScrollToTop />
            <Routes />
            {isHalloween && <HalloweenOverlay />} {/* 🎃 Add this line */}
            {isThanksgiving && <ThanksgivingOverlay />}    {/* 🦃 new */}
            {/* <GhostCursor />  👻 Add this line */}
          </WouterRouter>
          
        </HelmetProvider>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
