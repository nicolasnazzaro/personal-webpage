import React from 'react';
import { AboutContainer } from './AboutContainer';

const AboutComponent = () => {
    return (
        <AboutContainer>
           <h3>Hi, I'm <span>Nicolas </span><span role='img' aria-label=''>👋</span></h3>
        </AboutContainer>
    );
}

export default AboutComponent;