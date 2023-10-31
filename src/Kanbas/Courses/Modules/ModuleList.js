import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import './Modules.css';  
import { Button, Form, Row, Col } from 'react-bootstrap';

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <Form>
          <Row className="mb-2">
            <Col>
              <Form.Control placeholder="New Module" value={module.name}
                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
            </Col>
            <Col xs="auto">
              <Button className="me-2" onClick={() => dispatch(updateModule(module))}> Update </Button>
              <Button variant="success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control as="textarea" placeholder="New Description" value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
            </Col>
          </Row>
        </Form>
      </li>

      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-secondary list-group-item-custom mb-3 rounded-0" style={{ borderTop: "1px solid #c0c0c0", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 className="module-title">{module.name}</h3>
                <p className="module-no-margin">{module.description}</p>
                <p className="module-no-margin">{module._id}</p>
              </div>
              <div>
                <Button variant="danger" className="me-2" onClick={() => dispatch(deleteModule(module._id))}>Delete</Button> 
                <Button variant="success" onClick={() => dispatch(setModule(module))}> Edit</Button>
              </div>
            </li>
        ))
      }
    </ul>
  );
}

export default ModuleList;
