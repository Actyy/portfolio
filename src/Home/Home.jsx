import React from 'react';
import StarfieldAnimation from 'react-starfield-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/fontawesome-free-solid"

import "./Home.css"

const Home = () => {
    return (
        <div className="background-image" style={{ backgroundImage: "url(/stars.jpg)" }}>
            <StarfieldAnimation
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }}
            />
            <div className="container-credentials">
                <p className="text-name">Hello, i'm Hugo Forestier</p>
                <p className="text-description">This website is in construction</p>
                <div className="container-icons">
                    <div className="icons-settings">
                        <a href="google.fr">TEst</a>
                        <a href="https://github.com/Actyy"><FontAwesomeIcon className="space-icons" icon={faGithub} size="2x" /></a>
                        <a href="mailto:hugo.forestier123@gmail.com"><FontAwesomeIcon className="space-icons" icon={faEnvelope} size="2x" /></a>
                        <a href="https://www.linkedin.com/in/hugo-forestier-0993a317b/"><FontAwesomeIcon className="space-icons" icon={faLinkedin} size="2x" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;