import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLs.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
const API_BASE = process.env.REACT_APP_LABS_API_BASE;
const URL = `${API_BASE}`;

function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${URL}/welcome`} 
             className="list-group-item">
            Welcome
          </a>
        </div>
        <EncodingParametersInURLs />
        <WorkingWithObjects />  
        <WorkingWithArrays />   
      </div>
    );
}
export default Assignment5;
