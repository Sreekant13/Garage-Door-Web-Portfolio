// src/App.tsx

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

import GhostCursor from "./components/GhostCursor";
import HalloweenOverlay from "./components/HalloweenOverlay";
import ChristmasOverlay from "@/components/ChristmasOverlay";
import SantaCursor from "./components/SantaCursor";

// 🎉 Seasonal function for Thanksgiving (Nov 03–30)
function isThanksgivingSeason() {
  const today = new Date();
  const month = today.getMonth() + 1; // 1–12
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
  // Toggle overlays if needed
  const isHalloween = false;

  // Apply turkey cursor ONLY during Thanksgiving season
  const cursorStyle: React.CSSProperties = {
    cursor: isThanksgivingSeason()
      ? 'url("/turkey-cursor.png") 16 16, auto'
      : "auto",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        {/* Entire site's cursor control happens here */}
        <div style={cursorStyle}>
          <Toaster />
          <Router />

          {/* Seasonal overlays or cursors (optional / commented out) */}
          {/* {isHalloween && <HalloweenOverlay />} */}
          {/* <ChristmasOverlay /> */}
          {/* <GhostCursor /> */}
          {/* <SantaCursor /> */}
        </div>

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

// import { Switch, Route } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import Home from "@/pages/home";
// import NotFound from "@/pages/not-found";
// import GhostCursor from "./components/GhostCursor";
// import HalloweenOverlay from "./components/HalloweenOverlay";
// import ChristmasOverlay from "@/components/ChristmasOverlay";
// import SantaCursor from "./components/SantaCursor";

// function Router() {
//   return (
//     <Switch>
//       <Route path="/" component={Home} />
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

// function App() {
//   const isHalloween = false; // 👻 set to false later or replace with environment variable
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Router />
//         {/* {isHalloween && <HalloweenOverlay />} 🎃 Add this line */}
//         {/* <ChristmasOverlay /> */}
//         {/* <ChristmasOverlay enabled autoEnable={false} flakes={160} glowScale={1.2} /> */}
//         {/* <ChristmasOverlay enabled autoEnable={false} respectReducedMotiSon={false} /> */}
//         {/* <ChristmasOverlay
//           enabled
//           autoEnable={false}
//           respectReducedMotion={false}     // keep ON while testing animations
//           navOffset={100}                  // desktop header height
//           mobileNavOffset={230}            // try ~132px if your mobile header is taller
//           // navSelector="#site-header"     // or provide a selector to auto-measure
//           flakes={80}
//           glowScale={0.9}
//         /> */}


//         {/* <ChristmasOverlay seasonStart="10-01" seasonEnd="01-10" /> */}
//         {/* <GhostCursor />  */}
//         {/* <SantaCursor/> */}
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }

// export default App;
