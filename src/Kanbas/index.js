import React from 'react';
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Kanbas.css"; 
import Courses from "./Courses";


function Kanbas() {
  return (
    <div className="d-flex" style={{ width: '100%' }}> 
      <div className="kanbas-navigation">
        <KanbasNavigation />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;
