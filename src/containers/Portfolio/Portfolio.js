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
            <div className="Portfolio" id="">
                <Section section="bio">
                    <Divider>Bio</Divider>
                    <Bio />
                </Section>
                <Section section="projects">
                    <Divider>Projects</Divider>
                    <Projects />
                </Section>
                <Section section="contact">
                    <Divider>Contact</Divider>
                    <Contact />
                </Section>
            </div>
        );
    }
}

export default Portfolio;