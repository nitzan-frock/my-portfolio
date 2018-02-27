import React from 'react';
import './Bio.css';

const PROFILE_PICTURE = "https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAf0AAAAJDViYjU0M2RjLWE1MWEtNGZhOS04MDAwLWMzMTI3OGFhYjUwNA.jpg";

const Bio = (props) => {
    return (
        <div className="Bio">
            <div className="ProfileImg">
                <img src={PROFILE_PICTURE} alt="profile" />
            </div>
            <div className="Text">
                <p> I am a self-taught developer with a background in chemical engineering. 
                    I am able to apply engineering problem solving principles that I have
                    learned in order to create effective processes to solve problems. I enjoy
                    front-end web application design as well as developing back-end services.</p>
            </div>
        </div>

    );
};

export default Bio;