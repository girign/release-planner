import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import localforage from "localforage";

localforage.config({
  driver: localforage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
  name: "release-planner",
  version: 1.0,
  // size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: "plannerDetails", // Should be alphanumeric, with underscores.
  description: "details for planner",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
