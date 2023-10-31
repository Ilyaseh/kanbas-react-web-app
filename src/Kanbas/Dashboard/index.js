import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  const editCourse = (courseId) => {
    const courseToEdit = courses.find((course) => course._id === courseId);
    setCourse(courseToEdit);
  };

  return (
    <div>
      <h1 style={{ borderBottom: '1px solid lightgrey', padding: '10px 0' }}>Dashboard</h1>
      <h2 style={{ borderBottom: '1px solid lightgrey', padding: '10px 0' }}>Published Courses ({courses.length})</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <input value={course.name} className="form-control"
               onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
               onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
               onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
               onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button onClick={addNewCourse} className="btn btn-success">
          Add
        </button>
        <button onClick={updateCourse} className="btn btn-primary">
          Update
        </button>
      </div>

      <div className="list-group">
        {courses.map((course) => (
          <div key={course._id} className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to={`/Kanbas/Courses/${course._id}`} style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>
              {course.name}
            </Link>
            <div>
              <button onClick={() => editCourse(course._id)} className="btn btn-warning" style={{ marginRight: '10px' }}>
                Edit
              </button>
              <button onClick={() => deleteCourse(course._id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;