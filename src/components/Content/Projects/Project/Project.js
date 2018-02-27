import React from 'react';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const Project = (props) => {
    return (
        <Auxiliary>
            <div className="Project">
                <img src={props.image} alt={props.children} />
                <p>{props.children}</p>
            </div>
        </Auxiliary>  
    );
};

export default Project;