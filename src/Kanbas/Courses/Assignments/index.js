import React from 'react';
import { Link } from 'react-router-dom';
import db from '../../Database';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import './Assignments.css';

function Assignments() {
    const assignments = db.assignments;

    return (
        <div className="col-md-9 col-12" style={{ marginTop: '20px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search for Assignment"
                />
                <div>
                    <button className="btn btn-secondary">Group</button>
                    <button className="btn btn-danger ms-1">Assignment</button>
                    <Button variant="secondary" className="ms-1">
                        <BiDotsVerticalRounded />
                    </Button>
                </div>
            </div>

            <ul className="list-group">
                <li className="list-group-item list-group-item-secondary">
                    <div className="row align-items-center">
                        <div className="col">
                            <span className="font-sec">Assignments</span>
                        </div>
                        <div className="col-auto">
                            <i className="fa fa-plus custom-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                </li>

                {assignments.map((assignment) => (
                    <li
                        key={assignment._id}
                        className="list-group-item d-flex align-items-center"
                        style={{ borderLeft: '5px solid green' }}
                    >
                        <div className="flex-grow-1">
                            <Link
                                className="custom-link text-decoration-none text-dark"
                                to={`/Kanbas/Courses/${assignment.courseId}/Assignments/${assignment._id}`}
                            >
                                {assignment.course} - {assignment.title}
                            </Link>
                            <p className="mb-0">{assignment.description}</p>
                            <p className="mb-0">{`Due ${assignment.dueDate} | ${assignment.points} pts`}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Assignments;