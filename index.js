import React from 'react';
import ReactDOM from 'react-dom';
import {NavItem, Navbar, Dropdown, Button, Icon} from 'react-materialize';

class Nav extends React.Component {
  render() {
    return (
      <Navbar brand='logo' right>
        <NavItem href='#'>About</NavItem>
        <NavItem href='#'>Contact</NavItem>
      </Navbar>
    );
  }
}

class Paralax extends React.Component {
  render() {
    return (
      <div className="">
        <div className="section p-section no-pad-bot">
          <div className="container">
            
            <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div>
            <div className="row center">
              <a href="#" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
            </div>
          </div>

          <div className="parallax"><img src="images/parallax1.jpg" /></div>
          
        </div>
      </div>
    );
  }
}

class Dd extends React.Component {
  render() {
    return (
      <div className="row container">
        <Dropdown trigger={
          <Button>Drop me!</Button>
        }>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Bye</p>
        </Dropdown>
      </div>
    );
    }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Paralax />
        
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.querySelector('.react-root')
);
