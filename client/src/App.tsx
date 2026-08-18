/**
 * Design reminder — The Scholarly Atelier, revised:
 * real routed pages, a shared bilingual shell, and an accessible reading rhythm across the full portfolio.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { SiteLayout } from "./components/SiteLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Expertise from "./pages/Expertise";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Learn from "./pages/Learn";
import NotFound from "./pages/NotFound";

function Router() {
  return <Switch><Route path="/" component={Home}/><Route path="/about" component={About}/><Route path="/expertise" component={Expertise}/><Route path="/journey" component={Journey}/><Route path="/learn" component={Learn}/><Route path="/contact" component={Contact}/><Route component={NotFound}/></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><SiteLayout><Router /></SiteLayout><Toaster /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
