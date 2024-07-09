import React from 'react'
import { useState } from 'react';
import './Signin.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import whatsapp from './whatsapp.png';
import instagram from './instagram.png';
import google from './google.png';
import images from './images.png';
import closeeye from './closeeye.jpeg';

function Signin() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [showpassword, setshowpassword] = useState(false);
  const togglePasswordVisibilities = () => {
    setshowpassword(!showpassword);
  };
  const navigate = useNavigate();
  const ProceedLogin = async (e) => {
    if (IsValidate()) {
      e.preventDefault();
      try {
        const response = await fetch('http://127.0.0.1:8000/api/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        if (response.status === 200) {
          toast.success('Registered successfully');
          navigate('/Studentlogin');
        } else {
          toast.error('Failed');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };
  const IsValidate = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false;
      toast.warning('please Enter Username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('please Enter Password');
    }
    return result;

  }

  return (
    <React.Fragment>
      <section className='color'>
        <Navbar expand="lg" className="nav-bar">
          <Container>
            <Navbar.Brand href="#home" className='logo' style={{ color: 'white' }}>JOBPORTAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" exact active ClassName="active" className="t">
                  Home
                </NavLink>
                <NavLink to="/jobs" exact active ClassName="active" className="t">
                  Careers
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
                <button className='link' style={{ width: '150px', background: 'rgb(255, 235, 251)' }} type='signin'>
                  <Link to="/Registration" style={{ color: 'black', textDecoration: 'none' }}>Register</Link>
                </button>
                <button className='link1' style={{ width: '140px', backgroundColor: '#00bf58' }} type='signin'>
                  <Link to="/users/123" style={{ color: 'white', textDecoration: 'none' }}>Post a Job</Link>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1 className='reg1'>Login</h1>
        <p className='aa'>Login & start applying</p>
      </section>
      <div className=" offset-lg-4 col-lg-6" >
        <form className="container" onSubmit={ProceedLogin} method="post">
          <div className="card" style={{ backgroundColor: 'rgb(232, 247, 233)','borderRadius':'40px'}}>
            <div className="card-header" >
              <h3 className='h'>Hi, Welcome Back!<br></br>
                Still do not have an account?Login here&nbsp;<a href="/Registration" className='sign'>Signup</a> </h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group" style={{ marginTop: '5px' }}>
                    <div className="col-lg-12">
                      <div className="form-group" style={{ position: 'relative', top: '8px' }}>
                        <label> &nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Email<span className="errmsg">*</span></label>
                        <input value={email} onChange={e => setemail(e.target.value)} className="form-control" placeholder="Enter mail"></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12" >
                  <div className="form-group" style={{ marginTop: '30px' }} >
                    <label> &nbsp;&nbsp;<FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;Password<span className="errmsg">*</span></label>
                    <input value={password} onChange={e => setpassword(e.target.value)} type={showpassword ? "text" : "password"} className="form-control" placeholder="*******"></input>
                  <button type="button" className="eye" onClick={togglePasswordVisibilities}> {showpassword ? <img src={closeeye} alt='imgerror' style={{height:'30px',width:'30px'}}/> :  <img src={images} alt='imgerror' style={{height:'30px',width:'30px'}}/>}</button>
                  </div>
                  <div className='for'>
                    <a className="reg3" href="/register" >Forget Password</a>
                  </div>
                  <div className="card-footer" id='ll'>
                    <button type="submit" className="log" >Login</button>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
      <section>
        <div className='down'>
          <h1 className='pp'>JOBPORTAL</h1>
          <footer className="footer">
            <div className="container">
              <ul className="footer-list">

                <li>
                  <h4 className='ser'>Services</h4>
                  <ul>
                    <li>Browse Jobs</li>
                    <li>Companies</li>
                    <li>Candidates</li>
                    <li>Browse</li>
                  </ul>
                </li>
                <li>
                  <h4 className='ser'> Company</h4>
                  <ul>
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Contact</li>
                    <li>Dashboard</li>
                  </ul>
                </li>
                <li>
                  <h4 className='ser'> Support</h4>
                  <ul>
                    <li>Terms of use</li>
                    <li>Policy</li>
                    <li>Terms & conditions</li>
                  </ul>
                </li>

              </ul>
            </div>
            <p className='pri'>Privacy & Terms.Contact Us</p>
            <p className='copy'>Copyright @2023 jobi inc. </p>
            <img src={whatsapp} alt='imgerror' className='whatsapp' />
            <img src={instagram} alt='imgerror' className='whatsapp' />
            <img src={google} alt='imgerror' className='whatsapp' />

          </footer>
        </div>
      </section>
    </React.Fragment >
  )
}

export default Signin
