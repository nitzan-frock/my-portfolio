import React from 'react';
import './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => {
    return (
        <ul className="NavItems">
            <NavItem name="Bio" >Bio</NavItem>
            <NavItem name="Projects" >Projects</NavItem>
            <NavItem name="Contact" >Contact</NavItem>
        </ul>
    );
};

export default NavItems;