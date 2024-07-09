import React, { useState } from 'react'
import './Home.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Data from './City.json';
import Data1 from './Role.json';

function Main() {
  const [search, setsearch] = useState('')
  const [isTyping, setIsTyping] = useState(false);
  const [role, setrole] = useState('')
  const [roletype,setroletype]=useState(false);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setsearch(value);
    setIsTyping(value !== '');
  };
  const handleFilterItemClick = (value) => {
    setsearch(value);
    setIsTyping(true);
  };
  const handleRoleChange=(e)=>{
    const value=e.target.value;
    setrole(value);
    setroletype(value!=='');
  };
  const handleFilterRoleClick=(value)=>{
    setrole(value);
    setroletype(true);
  };

  
  return (
    <div>
      <section className='background'>
        <div className='container'>
          <Navbar expand="lg" className="nav-bar" >
            <Container>
              <Navbar.Brand href="#home" className='logo' style={{ color: 'white' }}>JOBPORTAL</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to="/" exact activeClassName="active">
                    Home
                  </NavLink>
                  <NavLink to="/" exact activeClassName="active">
                    Career
                  </NavLink>
                  <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                    <NavLink to="/candidate" exact activeClassName="active" className="dropdown-item">
                      Candidate Dashboard
                    </NavLink>
                    <NavLink to="/employee" exact activeClassName="active" className="dropdown-item">
                      Employee Dashboard
                    </NavLink>
                  </NavDropdown>

                </Nav>
                <Nav className='ms-auto'>
                  <button className='link' style={{ width: '150px', background: 'rgb(255, 235, 251)' }} type='signin'><Link to="/Signin" style={{ color: 'black', textDecoration: 'none', }}>Login</Link></button>
                  <button className='link1' style={{ width: '140px', backgroundColor: '#00bf58' }} type='signin'><Link to="/users/123" style={{ color: 'white', textDecoration: 'none' }} >Post a Job</Link></button>
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
                    <Form.Control type="text" placeholder=" Your job title,keyword google" className='formcontrol'
                      value={search}
                      onChange={handleInputChange}
                      onFocus={() => setIsListVisible(true)} />
                    {isTyping &&  (
                      <div>
                        {Data.filter(City => City.name.toLowerCase().includes(search.toLowerCase())).map(City => (
                          <div className='loc' key={City.name} onClick={() => handleFilterItemClick(City.name)}>
                            {City.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="category">
                    <Form.Control
                      type="text"
                      placeholder="category - Developer"
                      className='formcontrol1'
                      value={role}
                      onChange={handleRoleChange}
                      onFocus={() => setIsListVisible(true)}
                    />
                   {roletype && (
                      <div>
                        {Data1.filter((Role) => Role.name.toLowerCase().includes(search.toLowerCase())).map((Role) => (
                          <div className='loc' key={Role.name} onClick={() => handleFilterRoleClick(Role.name)}>
                            {Role.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <button type='search' className='seal'>Search</button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Main
