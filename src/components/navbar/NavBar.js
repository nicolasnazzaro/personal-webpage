import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const NavBar = ({location}) => {
    return (
        <div>
        <Menu pointing secondary>
          <Menu.Item active={location.pathname === "/"}>
              <NavLink to='/'>About</NavLink>
          </Menu.Item>
          <Menu.Item active={location.pathname === "/projects"}>
              <NavLink to='/projects'>Projects</NavLink>
          </Menu.Item>
          <Menu.Item active={location.pathname === "/stack"}>
              <NavLink to='/stack'>Stack</NavLink>
          </Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item active={location.pathname === "/contacts"}>
              <NavLink to='/contacts'>Contacts</NavLink>
          </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
}

export default withRouter(NavBar);