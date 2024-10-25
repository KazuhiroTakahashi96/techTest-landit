import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import EstateTransactionProvider from "./providers/EstateTransactionProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EstateTransactionProvider>
      <App />
    </EstateTransactionProvider>
  </StrictMode>
);
