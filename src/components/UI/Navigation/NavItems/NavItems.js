import React from 'react';
import './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => {
    return (
        <ul className="NavItems">
            <NavItem clicked={props.clicked} name="bio" >Bio</NavItem>
            <NavItem clicked={props.clicked} name="projects" >Projects</NavItem>
            <NavItem clicked={props.clicked} name="contact" >Contact</NavItem>
        </ul>
    );
};

export default NavItems;