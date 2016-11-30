import React from 'react';
import ReactDOM from 'react-dom';
import {NavItem, Navbar, Dropdown, Button, Icon} from 'react-materialize';

class Nav extends React.Component {
  render() {
    return <Navbar brand='logo' right>
      <NavItem href='get-started.html'>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
    </Navbar>;
  }
}

class Dd extends React.Component {
  render() {
    return <Dropdown trigger={
        <Button>Drop me!</Button>
      }>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Bye</p>
    </Dropdown>;
    }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Dd />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.querySelector('.react-root')
);
