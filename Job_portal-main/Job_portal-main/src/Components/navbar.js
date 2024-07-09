import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Row, Col, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Demand from './Demand';
import Trending from './Trending';
import List from './List';
import './Home.css';
import Choose from './Choose';
import Footer from './Footer';

const Home = () => {
  return (
    <React.Fragment>
     
      <section className='background'>
      <div className='container'>
        <Navbar expand="lg" className="nav-bar" >
          <Container>
            <Navbar.Brand href="#home" className='logo' style={{color:'white'}}>JOBPORTAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
                <NavLink to="/" exact activeClassName="active">
                  Career
                </NavLink>
                <NavDropdown title="Dashboard" id="basic-nav-dropdown" >
                  <NavLink to="/candidate" exact activeClassName="active" className="dropdown-item">
                    Candidate Dashboard
                  </NavLink>
                  <NavLink to="/employee" exact activeClassName="active" className="dropdown-item">
                    Employee Dashboard
                  </NavLink>
                </NavDropdown>

              </Nav>
              <Nav className='ms-auto'>
                <button className='link' style={{ width: '150px',background:'rgb(255, 235, 251)' }} type='signin'><Link to="/Signin" style={{color:'black',textDecoration:'none',}}>Login</Link></button>
                <button className='link1' style={{ width: '140px',backgroundColor:'#00bf58' }} type='signin'><Link to="/users/123" style={{color:'white',textDecoration:'none'}} >Post a Job</Link></button>
              </Nav>
            </Navbar.Collapse>
          </Container>


        </Navbar>
       
        <div className='container'>

          <h1 className="find" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: "0.3s" }}>Find &amp; Hire Experts <br></br> for any Job.</h1>
          <p className="line" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s' }}>Unlock your potential with quality job &amp; earn from world leading brands.</p>
        </div>
        <div>
          <Container className='form'>
            <Row>
              <Col md={4}>
                <Form.Group controlId="location">
                  <Form.Control type="text" placeholder=" Your job title,keyword google" className='formcontrol' />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="category">
                  <Form.Control type="text" placeholder="category - Developer" className='formcontrol1'/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
              <button type='search' className='sea1'>Search</button>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
       </section>
      
      <Demand/>
      <Trending/>
     
      <List/>
      <Choose/>
      <Footer/>

    </React.Fragment>

  )
}

export default Home;
