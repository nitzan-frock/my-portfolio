import React from 'react';
import './Divider.css';

const Divider = (props) => {
    return (
        <div className="Divider">
            <div>
                <hr />
            </div>
            <h3>{props.children}</h3>
            <div>
                <hr />
            </div>
        </div>
    );
};

export default Divider;