import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, useParams, Route, Routes, Navigate } from 'react-router-dom';
import CourseNavigation from "./CourseNavigation";
import "./Courses.css";
import { Breadcrumb } from "react-bootstrap";
import { FaBars } from 'react-icons/fa'; 
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
  const { courseId } = useParams(); 
  const URL = `${API_BASE}/courses`;
  const [course, setCourse] = useState(null);

  const findCourseById = async (id) => {
      const response = await axios.get(`${URL}/${id}`);
      console.log("Course data received:", response.data);
      setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const currentPage = pathSegments[pathSegments.length - 1] || 'Home'; 

  return (
    <div>
      <header className="course-header">
        <div className="d-flex align-items-center">
          <FaBars className="red-text-breadcrumb me-2 red-icon" size={20} /> 
          <Breadcrumb style={{ "--bs-breadcrumb-divider": "'>'" }}>
            <Breadcrumb.Item className="red-text-breadcrumb">
              {course ? `${course._id.$oid} ${course.name}` : 'Course not found'}
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
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
          <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default Courses;
