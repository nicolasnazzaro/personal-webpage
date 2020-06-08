import React from 'react';
import { ProjectsContainer } from './ProjectsContainer';
import { Item, Label, Segment } from 'semantic-ui-react';
import { projects } from '../../repository/projects';
import './projects-styles.css';

const ProjectsComponent = () => {
    return (
        <ProjectsContainer>
           <h3>Projects <span role='img' aria-label=''>🚀</span></h3>
           <p>Here some of my favourite open-source projects I've worked on lately.</p>
           {projects.map(((p, i) => (
                <Item key={i} style={{marginBottom: 45, marginTop: 30}}>
                    <Item.Content>
                        <Segment.Group>
                            <Segment>
                                    <h3>{p.title}</h3>
                                    <a href={p.url} target='_blank' rel="noopener noreferrer">
                                        <div style={{
                                            width: '100%', 
                                            height: 250,
                                            marginBottom: 10,
                                            borderRadius: 5, 
                                            backgroundImage: `url(${p.image})`,
                                            backgroundPosition: 0,
                                            backgroundRepeat: 'no-repeat',
                                            cursor: 'pointer'
                                        }}
                                        ></div>
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
                            <Segment secondary>
                                {!!p.url && 
                                    <a href={p.url} target='_blank' rel="noopener noreferrer">
                                        <img src='/assets/link.svg' alt='link to project' className='logo' id='link'/>
                                    </a>
                                } 
                                {!!p.github &&
                                    <a href={p.github} target='_blank' rel="noopener noreferrer">
                                        <img src='/assets/github.svg' alt='link to github repository' className='logo'/>
                                    </a>
                                }               
                            </Segment>
                        </Segment.Group>
                    </Item.Content>
                </Item>
           )))}
        </ProjectsContainer>
    );
}

export default ProjectsComponent;