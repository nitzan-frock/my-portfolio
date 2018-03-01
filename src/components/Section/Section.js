import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import './Section.css';

const Section = (props) => {
    return (
        <Auxiliary>
            <span className="Anchor" id={props.section}></span>
            <section className="Section">{props.children}</section>
        </Auxiliary>
    );
};

export default Section;