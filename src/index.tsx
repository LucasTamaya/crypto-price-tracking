import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/common/Header";

import App from "./pages/App";
import "./style/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
