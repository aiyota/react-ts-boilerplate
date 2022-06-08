import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Views/App";
import "./style/site.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
