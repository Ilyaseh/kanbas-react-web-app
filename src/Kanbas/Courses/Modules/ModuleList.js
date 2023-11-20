import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule as deleteModuleReducer, // Renamed to avoid conflict
  updateModule as updateModuleReducer, // Renamed for clarity
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client"; // Service functions
import './Modules.css';  
import { Button, Form, Row, Col } from 'react-bootstrap';

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModuleReducer(moduleId));
    });
  };

  // Implementing handleUpdateModule
  const handleUpdateModule = async () => {
    const updatedModule = await client.updateModule(module);
    dispatch(updateModuleReducer(updatedModule)); // Dispatching updated module
  };

  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) => {
      dispatch(setModules(modules));
    });
  }, [courseId]);

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <Form>
          <Row className="mb-2">
            <Col>
              <Form.Control 
                placeholder="New Module" 
                value={module.name}
                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
              />
            </Col>
            <Col xs="auto">
              <Button className="me-2" onClick={handleUpdateModule}> Update </Button>
              <Button variant="success" onClick={handleAddModule}>Add</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control 
                as="textarea" 
                placeholder="New Description" 
                value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
              />
            </Col>
          </Row>
        </Form>
      </li>
      {modules.filter((module) => module.course === courseId).map((module, index) => (
        <li key={index} className="list-group-item list-group-item-secondary list-group-item-custom mb-3 rounded-0" style={{ borderTop: "1px solid #c0c0c0", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 className="module-title">{module.name}</h3>
            <p className="module-no-margin">{module.description}</p>
            <p className="module-no-margin">{module._id}</p>
          </div>
          <div>
            <Button variant="danger" className="me-2" onClick={() => handleDeleteModule(module._id)}>Delete</Button> 
            <Button variant="success" onClick={() => dispatch(setModule(module))}> Edit</Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ModuleList;
