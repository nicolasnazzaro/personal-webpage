import React from 'react';
import { ContentContainer } from '../common/ContentContainer';
import { Segment, Button } from 'semantic-ui-react';
import Typical from 'react-typical';
import './about-styles.css';
import Pulse from 'react-reveal/Pulse';

const anchor = document.createElement('a');
anchor.target = '_blank';
anchor.rel = 'noopener';
anchor.href = 'mailto: nicolas.nazzaro@gmail.com';

const AboutComponent = () => {
    return (
        <ContentContainer>
           <Pulse>
           <h3>Hi, I'm Nicolas <span role='img' aria-label=''>👋</span></h3>
           </Pulse>    
                <Segment style={{marginTop: 30}}>
                    <div className='about-main-container'>
                        <img className='about-pic' src='/assets/avatar.png' alt='avatar'/> 
                        <div className='about-inner-container'>
                            <p><Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        1000,
                                        "I'm a full stack developer",
                                        1000,
                                        "I'm a business analyst"
                                    ]}/>
                            </p>
                            <Button 
                                primary size='tiny'
                                onClick={() => anchor.click()}
                            >
                                Contact me
                            </Button>
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