import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './Modules.css';  
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <ul className="list-group">
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-secondary list-group-item-custom mb-3 rounded-0" style={{ borderTop: "1px solid #c0c0c0" }}>
              <h3 className="module-title">{module.name}</h3>
              <p className="module-description">{module.description}</p>
            </li>
        ))
      }
    </ul>
  );
}

export default ModuleList;