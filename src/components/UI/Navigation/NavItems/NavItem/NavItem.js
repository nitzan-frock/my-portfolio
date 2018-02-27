import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
    return (
        <li className="NavItem">
            <a 
                href={"#" + props.name}
                className={props.active ? "NavActive" : null}>
                    {props.children}
            </a>
        </li>
    );
};

export default NavItem;