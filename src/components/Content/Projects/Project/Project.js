import React from 'react';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import './Project.css';

const Project = (props) => {
    return (
        <Auxiliary>
            <div className="Project">
                <div 
                    className="ProjectImg"
                    style={{backgroundImage: "'"+props.image+"'"}} >
                </div>
                <div className="Title">
                    <p>{props.children}</p>
                </div>
            </div>
        </Auxiliary>  
    );
};

export default Project;