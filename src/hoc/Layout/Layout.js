import React, { Component } from 'react';
import './Layout.css';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';
import Auxiliary from '../Auxiliary/Auxiliary';

class Layout extends Component {
    render() {
        return (
            <Auxiliary>
                <Toolbar />
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;