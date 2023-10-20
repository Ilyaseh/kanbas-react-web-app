import ModuleList from "../Modules/ModuleList";
import React from 'react';
import { Button } from 'react-bootstrap';  
import { BiDotsVerticalRounded } from 'react-icons/bi';  

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
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
                </div>
                <div className="col-md-3">
                    <div className="d-flex flex-column mt-3">
                        <Button variant="secondary" className="mb-1">Import Existing Content</Button>
                        <Button variant="secondary" className="mb-1">Import from Commons</Button>
                        <Button variant="secondary" className="mb-1">Choose Home Page</Button>
                        <Button variant="secondary" className="mb-1">View Course Stream</Button>
                        <Button variant="secondary" className="mb-1">New Announcement</Button>
                        <Button variant="secondary" className="mb-1">New Analytics</Button>
                        <Button variant="secondary" className="mb-1">View Course Notification</Button>
                        <div style={{borderBottom: "1px solid #dcdcdc", paddingTop: "10px"}}>
              <p>To do</p>
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;