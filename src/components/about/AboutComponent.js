import React from 'react';
import { ContentContainer } from '../common/ContentContainer';
import { Segment, Button } from 'semantic-ui-react';
import Typical from 'react-typical';
import './about-styles.css';

const AboutComponent = () => {
    return (
        <ContentContainer>
           <h3>Hi, I'm <span>Nicolas </span><span role='img' aria-label=''>👋</span></h3>
                <Segment style={{marginTop: 30}}>
                    <div className='about-main-container'>
                        <img className='about-pic' src='/assets/avatar.png' alt='avatar'/> 
                        <div className='about-inner-container'>
                            <p><Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        1000,
                                        "I'm a full-stack developer",
                                        1000,
                                        "I'm a digital business expert"
                                    ]}/>
                            </p>
                            <Button primary size='tiny'>Contact me</Button>
                        </div>
                    </div>
                    <p style={{padding: 10, textAlign: 'justify'}}>
                        Having previously worked as a business consultant 
                        for some of the most important european tech start-ups, I discovered the need to 
                        combine business logics with technical know-how to build innovative and disruptive platforms.  
                        Therefore, I decided to learn web development. Doing so I realized that I really enjoy coding and developed a 
                        passion for creating functional and business efficient web applications.
                    </p>
                </Segment>
        </ContentContainer>
    );
}

export default AboutComponent;