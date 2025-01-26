import React from "react";
import "./Sidebar.css";
import homeIcon from "../../assets/icons/home.png";
import TimetableIcon from "../../assets/icons/calendar.png"
import HelpIcon from "../../assets/icons/question-sign.png"
import SettingIcon from "../../assets/icons/settings.png"
import AboutIcon from "../../assets/icons/globe.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">NucesCalendar<span className="dot">•</span></h2>
      <nav className="sidebar-nav">
        <a href="#" className="sidebar-link">
          <img src={homeIcon} alt="Home" className="icon" /> Home
        </a>
        <a href="#" className="sidebar-link">
          <img src={TimetableIcon} alt="Timetable" className="icon" /> Timetable
        </a>
        <a href="#" className="sidebar-link">
          <img src={HelpIcon} alt="Get Help" className="icon" /> Get Help
        </a>
        <a href="#" className="sidebar-link">
          <img src={SettingIcon} alt="Settings" className="icon" /> Settings
        </a>
        <a href="#" className="sidebar-link">
          <img src={AboutIcon} alt="About" className="icon" /> About
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
