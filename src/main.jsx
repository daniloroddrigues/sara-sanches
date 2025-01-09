import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";

import "./index.css";
import App from "./App.jsx";
import MetaTags from "./components/MetaTags";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MetaTags />
    <App />
  </StrictMode>
);

injectSpeedInsights();
inject();
