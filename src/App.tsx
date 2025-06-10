
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QRCode from "./pages/QRCode";
import ZellePhone from "./pages/ZellePhone";
import ZelleEmail from "./pages/ZelleEmail";
import FloridaLocations from "./pages/FloridaLocations";
import FloridaLocationsEn from "./pages/FloridaLocationsEn";
import FloridaLocationsPt from "./pages/FloridaLocationsPt";
import FloridaLocationsEs from "./pages/FloridaLocationsEs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/zelle-phone" element={<ZellePhone />} />
          <Route path="/zelle-email" element={<ZelleEmail />} />
          <Route path="/florida-locations" element={<FloridaLocations />} />
          <Route path="/en/florida-locations" element={<FloridaLocationsEn />} />
          <Route path="/pt/florida-locations" element={<FloridaLocationsPt />} />
          <Route path="/es/florida-locations" element={<FloridaLocationsEs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
