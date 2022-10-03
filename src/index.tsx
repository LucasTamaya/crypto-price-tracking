import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/common/Header";
import Home from "./pages/Home";
import "./style/index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
    </QueryClientProvider>
  </React.StrictMode>
);
