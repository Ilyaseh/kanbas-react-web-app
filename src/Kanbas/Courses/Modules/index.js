import React from 'react';
import ModuleList from "./ModuleList";
import { Button } from 'react-bootstrap';  
import './Modules.css'; 
import { BiDotsVerticalRounded } from 'react-icons/bi'; 

function Modules() {
  return (
    <div className="centered-container">
      <div className="content">
        <div className="d-flex justify-content-end mb-2"> 
          <Button variant="secondary" className="me-1">Collapse All</Button> 
          <Button variant="secondary" className="me-1">View Progress</Button> 
          <Button variant="secondary" className="me-1">Publish All</Button> 
          <Button variant="danger" className="me-1">Module</Button>
          <Button variant="secondary"><BiDotsVerticalRounded /></Button>
        </div>
        <div className="mb-4" style={{borderBottom: "2px solid #e9e9e9"}}></div>
        <ModuleList />
      </div>
    </div>
  );
}

export default Modules;
