import React from 'react';
import './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => {
    return (
        <ul className="NavItems">
            <NavItem {...props} name="bio" >Bio</NavItem>
            <NavItem {...props} name="projects" >Projects</NavItem>
            <NavItem {...props} name="contact" >Contact</NavItem>
        </ul>
    );
};

export default NavItems;