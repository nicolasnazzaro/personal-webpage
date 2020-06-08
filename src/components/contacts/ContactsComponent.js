import React from 'react';
import { ContactsContainer } from './ContactsContainer';
import './styles.css'

const githubUrl = '';
const linkedinUrl = '';

const ContactsComponent = () => {
    return (
        <ContactsContainer>
            <h3>Contact me <span role='img' aria-label=''>☎️</span></h3>
            <p>If you are interested to know more about me, or you would like to give me a feedback about my work, I'll be thrilled to ear from you.</p>
            <p style={{marginBottom:25}}>You can reach me through the following media:</p>
            <a href={githubUrl} target='_blank' rel="noopener noreferrer">
                <div className='contact-container'>
                        <img src='/assets/email.svg' alt='email' className='contact-icon'/>
                    <span className='text'>Drop me an email</span>
                </div>
            </a>
            <a href={linkedinUrl} target='_blank' rel="noopener noreferrer">
            <div className='contact-container'>
                    <img src='/assets/linkedin.svg' alt='link to github' className='contact-icon'/>
                <span className='text'>Go to my Linkedin profile</span>
            </div>
            </a>
            <a href={githubUrl} target='_blank' rel="noopener noreferrer">
                <div className='contact-container'>
                        <img src='/assets/github.svg' alt='link to linkedin' className='github-icon'/>
                    <span className='text'>Find me on Github</span>
                </div>
            </a>  
        </ContactsContainer>
    );
}

export default ContactsComponent;