import React from 'react';
import './Toolbar.css';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <h2 className="Name">Nitzan Frock</h2>
            <nav>
                <NavItems />
            </nav>
        </header>
    );
};

export default Toolbar;