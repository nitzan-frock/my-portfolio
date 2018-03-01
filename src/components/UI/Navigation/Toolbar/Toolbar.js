import React, { Component } from 'react';
import './Toolbar.css';
import NavItems from '../NavItems/NavItems';

class Toolbar extends Component {
    state = {
        activeNav: null
    }

    navClickedHandler =(id) => {
        console.log("id: " + id + ", typeof: " + typeof id);
        this.setState({activeNav: id})
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({block: 'start', behavior: 'smooth'});
    }

    render () {
        return (
            <header className="Toolbar">
                <h2 className="Name">Nitzan Frock</h2>
                <nav>
                    <NavItems clicked={this.navClickedHandler} active={this.state.activeNav}/>
                </nav>
            </header>
        );
    }
}

export default Toolbar;