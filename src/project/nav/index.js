import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProjectNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li>
          <Link className={`nav-link ${currentPath === "/project/home" ? "active" : ""}`} to="/project/home">
            Home
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/project/search" ? "active" : ""}`} to="/project/search">
            Search
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/project/signin" ? "active" : ""}`} to="/project/signin">
            Signin
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/project/signup" ? "active" : ""}`} to="/project/signup">
            Signup
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${currentPath === "/project/account" ? "active" : ""}`} to="/project/account">
            Account
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProjectNavigation;
