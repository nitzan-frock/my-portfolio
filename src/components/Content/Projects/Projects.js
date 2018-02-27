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
            <Project image={images["memory-game.JPG"]} >Memory Game</Project>
            <Project />
        </div>
    );
};

export default Projects;