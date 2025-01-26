import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">PlaceHolder<span className="dot">•</span></h2>
      <nav className="sidebar-nav">
        <a href="#" className="sidebar-link">
          <span className="icon">🏠</span> Home
        </a>
        <a href="#" className="sidebar-link">
          <span className="icon">📅</span> Timetable
        </a>
        <a href="#" className="sidebar-link">
          <span className="icon">❓</span> Get Help
        </a>
        <a href="#" className="sidebar-link">
          <span className="icon">⚙️</span> Settings
        </a>
        <a href="#" className="sidebar-link">
          <span className="icon">🌐</span> About
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
