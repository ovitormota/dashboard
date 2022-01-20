import React from "react";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import "./app.css";

export default function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others"></div>
      </div>
    </div>
  );
}
