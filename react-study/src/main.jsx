import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppCount, LiveTextPreview, TextCounter } from "./App";
import LoginPage from "./App";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppCount />
    <LiveTextPreview />
    <TextCounter />
    <LoginPage />
  </StrictMode>,
);
