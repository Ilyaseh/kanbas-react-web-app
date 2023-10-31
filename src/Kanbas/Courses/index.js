import React from 'react';
import { useLocation, useParams, Route, Routes, Navigate } from 'react-router-dom';
import CourseNavigation from "./CourseNavigation";
import "./Courses.css";
import { Breadcrumb } from "react-bootstrap";
import { FaBars } from 'react-icons/fa'; 
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses({ courses }) {
  const { courseId } = useParams(); 
  const location = useLocation();

  const pathSegments = location.pathname.split('/');
  const currentPage = pathSegments[pathSegments.length - 1] || 'Home'; 

  const course = courses.find((c) => c._id === courseId);

  return (
    <div>
      <header className="course-header">
        <div className="d-flex align-items-center">
          <FaBars className="red-text-breadcrumb me-2 red-icon" size={20} /> 
          <Breadcrumb style={{ "--bs-breadcrumb-divider": "'>'" }}>
            <Breadcrumb.Item className="red-text-breadcrumb">
              {course ? `${course._id} ${course.name}` : 'Course not found'}
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-black" active>
              {currentPage}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </header>

      <CourseNavigation />

      <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{ left: "320px", top: "50px" }}>
        <Routes>
          <Route path="/" element={<Navigate to="Home" replace />} />
          <Route path="Home" element={<Home/>} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments/>} />
          <Route path="Assignments/:assignmentId" 
                element={<AssignmentEditor/>} />
          <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default Courses;