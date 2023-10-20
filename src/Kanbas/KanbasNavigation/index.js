import React from 'react';
import { FaUser, FaTachometerAlt, FaBook, FaCalendarAlt, FaEnvelope, FaHistory, FaPhotoVideo, FaUsers, FaQuestionCircle } from 'react-icons/fa';
import './KanbasNavigation.css';
import logo from './NU_sidebar_logo.png';
import { Link, useLocation } from 'react-router-dom';

const KanbasNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>
      <ul className="nav flex-column">
        <li>
          <Link className={`nav-link ${currentPath === "/Kanbas/Profile" ? "active" : ""}`} to="/Kanbas/Profile">
            <div className="icon-container">
              <FaUser className="nav-icon account-icon" />
            </div>
            <span>Account</span>
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/Kanbas/Dashboard" ? "active" : ""}`} to="/Kanbas/Dashboard">
            <div className="icon-container">
              <FaTachometerAlt className="nav-icon" />
            </div>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/Kanbas/Courses" ? "active" : ""}`} to="/Kanbas/Courses">
            <div className="icon-container">
              <FaBook className="nav-icon" />
            </div>
            <span>Courses</span>
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/Kanbas/Calender" ? "active" : ""}`} to="/Kanbas/Calender">
            <div className="icon-container">
              <FaCalendarAlt className="nav-icon" />
            </div>
            <span>Calendar</span>
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/Kanbas/Inbox" ? "active" : ""}`} to="/Kanbas/Inbox">
            <div className="icon-container">
              <FaEnvelope className="nav-icon" />
            </div>
            <span>Inbox</span>
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/Kanbas/History" ? "active" : ""}`} to="/Kanbas/History">
            <div className="icon-container">
              <FaHistory className="nav-icon" />
            </div>
            <span>History</span>
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/Kanbas/Studio" ? "active" : ""}`} to="/Kanbas/Studio">
            <div className="icon-container">
              <FaPhotoVideo className="nav-icon" />
            </div>
            <span>Studio</span>
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/Kanbas/Commons" ? "active" : ""}`} to="/Kanbas/Commons">
            <div className="icon-container">
              <FaUsers className="nav-icon" />
            </div>
            <span>Commons</span>
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/Kanbas/Help" ? "active" : ""}`} to="/Kanbas/Help">
            <div className="icon-container">
              <FaQuestionCircle className="nav-icon" />
            </div>
            <span>Help</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default KanbasNavigation;