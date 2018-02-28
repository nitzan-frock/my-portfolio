import React from 'react';
import Project from './Project/Project';
import './Projects.css';

const Projects = (props) => {
    const importImages = (r) => {
        let images = {};
        r.keys().map((item, index) => {
            console.log(images[item.replace('./', '')] = r(item));
            return images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const images = importImages(
        require.context(
            '../../../assets/images', 
            false, /\.(png|jpe?g|JPG|svg)$/
        )
    );

    return (
        <div className="Projects">
            <Project 
                link="https://nitzanf.github.io/memory-game"
                image={images["memory-game.JPG"]} >
                    Memory Game
            </Project>
            <Project
                link="https://nitzanf.github.io/calendar-basic"
                image={images["calendar.JPG"]} >
                    Calendar
            </Project>
        </div>
    );
};

export default Projects;