import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
    console.log(props.active);
    return (
        <li className="NavItem" onClick={() => {props.clicked(props.name)}}>
            <p className={props.active === props.name ? "NavActive" : null}>
                    {props.children}
            </p>
        </li>
    );
};

export default NavItem;