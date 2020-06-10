import React from 'react';
import { ContentContainer } from '../common/ContentContainer';
import { Item, Label, Segment } from 'semantic-ui-react';
import { projects } from '../../repository/projects';
import './projects-styles.css';

const ProjectsComponent = () => {
    return (
        <ContentContainer>
           <h3>Projects <span role='img' aria-label=''>🚀</span></h3>
           <p>Here are some of my favourite open-source projects I've worked on lately.</p>
           {projects.map(((p, i) => (
                <Item key={i} style={{marginBottom: 45, marginTop: 30}}>
                    <Item.Content>
                        <Segment.Group>
                            <Segment>
                                    <h3>{p.title}</h3>
                                    <a href={p.url} target='_blank' rel="noopener noreferrer">
                                        <div className='div-img' style={{backgroundImage: `url(${p.image})`}}></div>
                                    </a>
                                <Item.Extra>
                                    {p.tags.map((t, i) => (
                                            <Label key={i} style={{marginBottom: 5}}>{t}</Label>
                                    ))}
                                </Item.Extra>
                            </Segment>
                            <Segment>
                                <Item.Description>
                                    <p>description</p>
                                </Item.Description>
                            </Segment>
                            <Segment secondary style={{display: 'flex'}}>
                                {!!p.url && 
                                    <a href={p.url} target='_blank' rel="noopener noreferrer">
                                        <div className='link-container'>
                                                <img src='/assets/link.svg' alt='link to linkedin' className='link-icon'/>
                                            <span className='text'>Website</span>
                                        </div>
                                    </a>
                                } 
                                {!!p.github &&
                                    <a href={p.github} target='_blank' rel="noopener noreferrer">
                                        <div className='link-container'>
                                                <img src='/assets/github.svg' alt='link to linkedin' className='github-icon-r'/>
                                            <span className='text'>Repository</span>
                                        </div>
                                    </a>  
                                }               
                            </Segment>
                        </Segment.Group>
                    </Item.Content>
                </Item>
           )))}
        </ContentContainer>
    );
}

export default ProjectsComponent;