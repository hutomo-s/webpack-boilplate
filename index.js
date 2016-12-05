import React from 'react';
import ReactDOM from 'react-dom';
import {NavItem, Navbar, Dropdown, Button, Icon, Footer, Col, Row, Input, CardPanel} from 'react-materialize';

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
            
            <h1 className="header center teal-text text-lighten-2">TraveLink</h1>
            <div className="row center">
              <h5 className="header col s12 light">
                See places around your destination
              </h5>
            </div>
            <div className="row center">

              <Row>
                  <Input placeholder="Street, Adress, Postal Code" s={12} m={6} l={6} label="" />
                  <Button s={6}>Search</Button>
              </Row>
            </div>
          </div>

          <div className="parallax"><img src="images/parallax1.jpg" /></div>
          
        </div>
      </div>
    );
  }
}

const ptop0 = {
  'paddingTop': '0px',
};

class FootLinks extends React.Component {
  render() {
    return (

      <div className="blue-grey white-text">

        <div className="row container section">
          
          <Col s={12} m={6} l={6} className='grid-example'>
            <h5 className="truncate white-text">Popular Culinary Destination</h5>
            <ul>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Slipi, DKI Jakarta Culinary</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Cihampelas, Bandung Culinary</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Tj Pandan, Belitung Culinary</a></li>
            </ul>
          </Col>

          <Col s={12} m={6} l={6} className='grid-example'>
            <h5 className="truncate white-text">Find Nearest ATM</h5>
            <ul>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Slipi, DKI Jakarta ATMs</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Cihampelas, Bandung ATMs</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Tj Pandan, Belitung ATMs</a></li>
            </ul>
          </Col>

          <Col s={12} m={6} l={6} className='grid-example'>
            <h5 className="truncate white-text">Need Groceries?</h5>
            <ul>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Slipi, DKI Jakarta Minimarkets</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Cihampelas, Bandung Minimarkets</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Tj Pandan, Belitung Minimarkets</a></li>
              
            </ul>
          </Col>

          <Col s={6} m={3} l={3} className='grid-example'>
            <h5 className="truncate white-text">About TraveLink</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Why use TraveLink</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
            </ul>
          </Col>
        </div>

        <footer className="page-footer blue-grey darken-2" style={ptop0}>
          <div className="footer-copyright">
            <div className="container">
              <span>Copyright © 2016 <a className="grey-text text-lighten-4">Hutomo</a> All rights reserved.</span>
              <span className="right"> Design and Developed by <a className="grey-text text-lighten-4">HutomoLabs</a></span>
              </div>
          </div>
        </footer>

      </div>

     
    );
  }
}

class Result extends React.Component {
  render() {
    return (
       <div className="row container section">
          <h5>* Culinary in Slipi</h5>

          <CardPanel className="lighten-4 black-text">
            <div className="row">
              <Col s={2}>
                img
              </Col>

              <Col s={10}>
                Resto Kemuning <br />
                (Cat) Chinese Food <br />
                (Open) 10.00 - 21.00 <br />
                Jl. Slipi <br />
              </Col>
           
            </div>
          </CardPanel>

          <CardPanel className="lighten-4 black-text">

            <div className="row">
              <Col s={2}>
                img
              </Col>

              <Col s={10}>
                Starbucks Wisma 77 <br />
                (Cat) Coffee Shop<br />
                (Open) 10.00 - 21.00 <br />
                Jl. Slipi <br />
              </Col>
            </div>
          </CardPanel>

          <CardPanel className="lighten-4 black-text">
             <div className="row">
              <Col s={2}>
                img
              </Col>

              <Col s={10}>
                ATM BNI Wisma 77 <br />
                Wisma 77, Jl. Slipi<br />
              </Col>
            </div>
          </CardPanel>

          <CardPanel className="lighten-4 black-text">
            <div className="row">
              <Col s={2}>
                img
              </Col>

              <Col s={10}>
                Alfamart KS Tubun <br />
                Jl. KS Tubun, Slipi<br />
              </Col>
            </div>
          </CardPanel>
       
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
        <Result />
        <FootLinks />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.querySelector('.react-root')
);
