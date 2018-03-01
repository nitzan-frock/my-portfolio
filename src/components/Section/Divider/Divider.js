import React from 'react';
import './Divider.css';

const Divider = (props) => {
    return (
        <div className="Divider">
            <div>
                <hr />
            </div>
            <h2>{props.children}</h2>
            <div>
                <hr />
            </div>
        </div>
    );
};

export default Divider;