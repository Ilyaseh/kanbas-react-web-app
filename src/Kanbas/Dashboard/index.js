import React from 'react';
import { Link } from "react-router-dom";
import db from "../Database";
import cardImage from '../Dashboard/blue_card_image.png';
import './Dashboard.css'; 

function Dashboard() {
    const courses = db.courses;
  
    return (
      <div className="dashboard-container"> 
        <div className="section-header">Dashboard</div>
        <hr/>
        <h3>Published Courses ({courses.length})</h3>
        <hr/>
        <div className="courses-wrapper d-flex flex-row flex-wrap justify-content-start"> 
          {courses.map((course) => (
            <div className="card course-card" key={course._id}>
              <img className="card-img-top" src={cardImage} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p>{course.number}<br />
                  {course.startDate} - {course.endDate}
                </p>
                <Link to={`/Kanbas/Courses/${course._id}`} className="stretched-link">
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
  
export default Dashboard;
