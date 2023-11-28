import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import './Kanbas.css';
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
  const [courses, setCourses] = useState([]);  
  const URL = `${API_BASE}/courses`;

  const updateCourse = async (updatedCourse) => {
    try {
      const response = await axios.put(`${URL}/${updatedCourse._id}`, updatedCourse);
      if (response.status === 204) {
        setCourses(courses.map((course) => course._id === updatedCourse._id ? updatedCourse : course));
        setCourse({ name: "", number: "", startDate: "", endDate: "" }); 
      }
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

    const deleteCourse = async (courseId) => {
    try {
      const response = await axios.delete(`${URL}/${courseId}`);
      if (response.status === 204) {
        setCourses(courses.filter((c) => c._id !== courseId));
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const addCourse = async () => {
    const response = await axios.post(URL, course);
    if (response.status === 200) { 
      await findAllCourses(); 
    }
    setCourse({ name: "", number: "", startDate: "", endDate: "" }); 
  };
  

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      
    number: "New Number",
    startDate: "2023-09-10", 
    endDate: "2023-12-15",
  });

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation className="kanbas-navigation" />
        <div className="kanbas-content">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
            } />
            <Route path="Courses/:courseId/*" element={<Courses />} />

          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;