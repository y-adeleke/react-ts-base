import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HeadlessDemo from "./pages/Sidebar";

import "./assets/themes/mytheme/theme.scss"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/side-nav" element={<HeadlessDemo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
