import React from 'react';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import './Project.css';

const Project = (props) => {
    return (
        <Auxiliary>
            <div className="Project">
                <a href={props.link}>
                    <div 
                        className="ProjectImg"
                        style={{backgroundImage: "url("+props.image+")"}} >
                    </div>
                </a>
                <div className="Title">
                    <p>{props.children}</p>
                </div>
            </div>
        </Auxiliary>  
    );
};

export default Project;