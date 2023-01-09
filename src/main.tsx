import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProducProvider } from "./context/ProductContext";
import { SidebarProvider } from "./context/SidebarContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProducProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ProducProvider>
  </React.StrictMode>
);
