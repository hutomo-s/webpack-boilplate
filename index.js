import React from 'react';
import ReactDOM from 'react-dom';
import {NavItem, Navbar, Dropdown, Button, Icon, Footer, Col} from 'react-materialize';

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

const ptop0 = {
  'padding-top': '0px',
};

class FootLinks extends React.Component {
  render() {
    return (

      <div className="blue-grey white-text">

        <div className="row container section">
          
          <Col s={12} m={6} l={6} className='grid-example'>
            <h5 className="white-text">Popular Culinary Destination</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Slipi, DKI Jakarta Culinary</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Cihampelas, Bandung Culinary</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Tj Pandan, Belitung Culinary</a></li>
            </ul>
          </Col>

          <Col s={12} m={6} l={6} className='grid-example'>
            <h5 className="white-text">Find Nearest ATM</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Slipi, DKI Jakarta ATMs</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Cihampelas, Bandung ATMs</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Tj Pandan, Belitung ATMs</a></li>
            </ul>
          </Col>

          <Col s={12} m={6} l={6} className='grid-example'>
            <h5 className="white-text">Need Groceries?</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Slipi, DKI Jakarta Minimarkets</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Cihampelas, Bandung Minimarkets</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Tj Pandan, Belitung Minimarkets</a></li>
              
            </ul>
          </Col>

          <Col s={6} m={3} l={3} className='grid-example'>
            <h5 className="white-text">About TraveLink</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Why use TraveLink</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
            </ul>
          </Col>
        </div>

        <footer className="page-footer blue-grey darken-2" style={ptop0}>
          <div className="footer-copyright">
            <div className="container">
              <span>Copyright © 2016 <a class="grey-text text-lighten-4">Perdana</a> All rights reserved.</span>
              <span className="right"> Design and Developed by <a className="grey-text text-lighten-4">PerdanaLabs</a></span>
              </div>
          </div>
        </footer>

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
        <FootLinks />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.querySelector('.react-root')
);
