import React, { Component } from 'react';
import './Portfolio.css';
import Section from '../../components/Section/Section';
import Divider from '../../components/Section/Divider/Divider';
import Bio from '../../components/Content/Bio/Bio';
import Projects from '../../components/Content/Projects/Projects';
import Contact from '../../components/Content/Contact/Contact';

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <Divider />
                <Section>
                    <Bio />
                </Section>
                <Section>
                    <Projects />
                </Section>
                <Section>
                    <Contact />
                </Section>
            </div>
        );
    }
}

export default Portfolio;