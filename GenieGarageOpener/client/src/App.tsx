import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import GhostCursor from "./components/GhostCursor";
import HalloweenOverlay from "./components/HalloweenOverlay";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const isHalloween = true; // 👻 set to false later or replace with environment variable
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        {isHalloween && <HalloweenOverlay />} {/* 🎃 Add this line */}
        <GhostCursor />  {/* 👻 Add this line */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
