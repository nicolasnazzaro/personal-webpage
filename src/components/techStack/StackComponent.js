import React from 'react';
import { StackContainer } from './StackContainer';

const StackComponent = () => {
    return (
        <StackContainer>
            <h3>My favourite tech stack:</h3>
            <table>
                <tr style={{height: 30}}>
                    <th style={{verticalAlign: 'top'}}>Database:</th>
                    <td style={{verticalAlign: 'top'}}>MySql (Sqlite in develepmnet) with Entity Framework</td>
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
            </table>
            <p style={{marginTop: 20}}>I'm also familiar with Angular, ASP .NET Framework, .NET Core MVC</p>
        </StackContainer>
    );
}

export default StackComponent;