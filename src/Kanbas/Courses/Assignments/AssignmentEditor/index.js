import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import db from '../../../Database';
import './AssignmentEditor.css';

function AssignmentEditor() {
    const { courseId, assignmentId } = useParams();
    console.log("Debug courseId:", courseId); // Check if you are getting a value here

    
    const navigate = useNavigate();



    const assignment = db.assignments.find((a) => a._id === assignmentId);

    const [title, setTitle] = useState(assignment.title);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };


    const handleSave = () => {
        const updatedAssignment = { ...assignment, title };
        const index = db.assignments.findIndex((a) => a._id === assignmentId);
        db.assignments[index] = updatedAssignment;
        console.log('Updated assignment:', updatedAssignment);
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="centered-container">
            <div className="content border-bottom">
                <h5>Assignment Name</h5>
                <div style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
                <input value={title} className="form-control mb-2" onChange={handleTitleChange} />
                </div>
                <div className="d-flex justify-content-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignmentId}`} className="btn btn-secondary me-1">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-danger float-right" >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AssignmentEditor;