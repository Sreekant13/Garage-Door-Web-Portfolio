import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import {ThanksgivingOverlay} from "./components/ThanksgivingOverlay";

// 🦃 Thanksgiving Season Logic
function isThanksgivingSeason() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return month === 11 && day >= 3 && day <= 30;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const turkeyStyle: React.CSSProperties = {
      cursor: isThanksgivingSeason()
        ? 'url("/turkey-cursor.png") 16 16, auto'
        : "auto",
    };
  // const isHalloween = false; // 👻 set to false later or replace with environment variable
  const isThanksgiving = isThanksgivingSeason();  // 🦃 add this
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div style={turkeyStyle}>
        <Toaster />
        <Router />
        {isThanksgiving && <ThanksgivingOverlay />}    {/* 🦃 new */}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
