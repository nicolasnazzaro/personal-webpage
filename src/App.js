import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutComponent from './components/about/AboutComponent';
import ProjectsComponent from './components/projects/ProjectsComponent';
import ContactComponent from './components/contacts/ContactsComponent';
import NotFoundComponent from './components/not-found/NotFoundComponent';
import NavBar from './components/navbar/NavBar';
import StackComponent from './components/techStack/StackComponent';
import { AppContainer } from './components/common/AppContainer';

const App = () => {
  return (
      <Route render={() => (
        <Fragment>
          <AppContainer>
            <NavBar/>
            <Switch>
              <Route exact path='/' component={AboutComponent}/>
              <Route path='/projects' component={ProjectsComponent}/>
              <Route path='/contact' component={ContactComponent}/>
              <Route path='/stack' component={StackComponent}/>
              <Route path='/notfound' component={NotFoundComponent}/>
              <Route>
                <Redirect to='/notfound'/>
              </Route>
            </Switch>
          </AppContainer>
        </Fragment>
      )}/>
  );
}


export default App;
