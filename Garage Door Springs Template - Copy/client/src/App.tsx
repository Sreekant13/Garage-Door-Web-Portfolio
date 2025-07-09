import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import BlogWeather from "@/pages/blog/weather-effects";
import BlogStyle from "@/pages/blog/modern-vs-rustic";
import BlogOpener from "@/pages/blog/top-opener-features";
import ServiceAreasPage from "@/pages/Service-Areas"; // ← add this
import BlogIndex from "@/pages/blog/index"; // add this

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={BlogIndex} /> 
      <Route path="/blog/weather-effects" component={BlogWeather} />
      <Route path="/blog/modern-vs-rustic" component={BlogStyle} />
      <Route path="/blog/top-opener-features" component={BlogOpener} />
      <Route path="/service-areas" component={ServiceAreasPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
