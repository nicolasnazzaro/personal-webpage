import React from 'react';
import { ContentContainer } from '../common/ContentContainer';
import { Segment } from 'semantic-ui-react';
import Flip from 'react-reveal/Flip';

const StackComponent = () => {
    return (
        <ContentContainer>
            <h3>My favourite tech stack <span role='img' aria-label=''>🛠️</span></h3>
            <p>I'm always excited to learn new technologies, however 
                whenever possible I'd rather work with the following stack:
            </p>
            <Flip bottom>
            <Segment style={{marginTop: 30}}>
            <table>
                <tbody>
                    <tr style={{height: 30}}>
                        <th style={{verticalAlign: 'top'}}>Database:</th>
                        <td style={{verticalAlign: 'top'}}>MySql (or Sqlite in development) with Entity Framework</td>
                    </tr>
                    <tr style={{height: 30}}>
                        <th style={{verticalAlign: 'top'}}>Back-end:</th>
                        <td style={{verticalAlign: 'top'}}>.NET Core</td>
                    </tr>
                    <tr style={{height: 30}}>
                        <th style={{verticalAlign: 'top'}}>Front-end:</th>
                        <td style={{verticalAlign: 'top'}}>React (better with Typescript)</td>
                    </tr>
                    <tr style={{height: 30}}>
                        <th style={{verticalAlign: 'top'}}>State management:</th>
                        <td style={{verticalAlign: 'top'}}>MobX over Redux</td>
                    </tr>
                </tbody>
            </table>
            </Segment>
            </Flip>
            <p style={{marginTop: 45}}>I'm also familiar with Angular, ASP .NET Framework and .NET Core MVC</p>
        </ContentContainer>
    );
}

export default StackComponent;