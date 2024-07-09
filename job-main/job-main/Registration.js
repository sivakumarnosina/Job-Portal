import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import './Register.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import whatsapp from './whatsapp.png';
import instagram from './instagram.png';
import google from './google.png';


const Registration = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const[usertype,setusertype]=useState('');
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [showpassword, setshowpassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);


  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setshowpassword(!showpassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirm(!showConfirm);
  };



  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the valid ';
    let successmessage = 'strong';
    if (username === null || username === '') {
      isproceed = false;
      errormessage += 'username';
    }
    if (email === null || email === '') {
      isproceed = false;
      errormessage += 'email';
    }
    if (usertype === null || usertype === '') {
      isproceed = false;
      errormessage += 'Usertype';
    }
    if (password === null || password === '') {
      isproceed = false;
      errormessage += 'password';
    } else if (password.length < 8) {
      console.error('Password should be more than 8 characters');
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      toast.warning('Password should have at least 1 digit, 1 special character, 1 lowercase, 1 uppercase');
    } else {
      successmessage = 'strong password';
    }
    if(password!==confirm){
      isproceed=false;
      errormessage += 'password did not match';
    }
   

    if (!isproceed) {
      toast.warning(errormessage)
    } else {
      if (/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]+$/.test(email)) {

      } else {
        isproceed = false;
        toast.warning('Please enter valid email')
      }


    }
    if (/^[A-Za-z]+$/.test(username)) {

    } else {
      isproceed = false;
      toast.warning('username must contain only alphabets')
    }
    return isproceed;


  }

  const handlesubmit =  (e) => {
    e.preventDefault();

    if (IsValidate()) {
      let regobj = { username, email, password, confirm,usertype };

      // Send registration data to your API
      fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(regobj),
      }).then((res) => {
        console.log('Response Status:', res.status);

        if (res.status === 201) {

          toast.success('verification code is sent to your registered mailid.');
          navigate('/otpage');
        } else {

          toast.error('Failed to register. Please try again.');
        }
      })
        .catch((err) => {
          toast.error('Failed: ' + err.message);
        });
    }



  };

  return (
    <React.Fragment>
      <section className='color'>
        <Navbar expand="lg" className="nav-bar">
          <Container>
            <Navbar.Brand href="#home" className='logo' style={{ color: 'white' }}>JOBPORTAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" exact activeClassName="active" className="t">
                  Home
                </NavLink>
                <NavLink to="/Studentlogin" exact active ClassName="active" className="t">
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
                  <Link to="/Signin" style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
                </button>
                <button className='link1' style={{ width: '140px', backgroundColor: '#00bf58' }} type='signin'>
                  <Link to="/users/123" style={{ color: 'white', textDecoration: 'none' }}>Post a Job</Link>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1 className='reg1'>Register</h1>
        <p className='aa'>Create account & start Searching</p>
      </section>
      <div className=" offset-lg-4 col-lg-6" >
        <form className="container" onSubmit={handlesubmit} method="post">
          <div className="card" style={{ backgroundColor: 'rgb(232, 247, 233)', 'borderRadius': '40px' }}>
            <div className="card-header">
              <h3 style={{ color: 'green', textAlign: 'left' }}>Create Account</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group" style={{ marginTop: '5px' }}>
                    <label>
                      &nbsp;&nbsp;<FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;User Name<span className="errmsg">*</span>
                    </label>
                    <input value={username} onChange={e => setusername(e.target.value)} className="form-control" placeholder="Enter full name"></input>
                  </div>
                </div>
                <br></br>
                <div className="col-lg-12">
                  <div className="form-group" style={{ position: 'relative', top: '8px',marginTop:'20px' }}>
                    <label> &nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Email<span className="errmsg">*</span></label>
                    <input value={email} onChange={e => setemail(e.target.value)} className="form-control" placeholder="Enter mail"></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group" style={{ marginTop: '20px'}}>
                    <label className='label1'>&nbsp;&nbsp;&nbsp;&nbsp;Usertype<span className="errmsg">*</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="usertype" className='type' value={'candidate'} onChange={e=>setusertype(e.target.value)}/>&nbsp;&nbsp;
                       <span class="custom-radio-label">candidate</span>
                    </label>
                    <label>
                      <input type="radio" name="usertype" value={'employee'} onChange={e=>setusertype(e.target.value)} className='type'/>&nbsp;&nbsp;
                       <span class="custom-radio-label">employee</span>
                    </label>
                  </div>
                 
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group" style={{ marginTop: '35px' }}>
                      <label> &nbsp;&nbsp;<FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;Password<span className="errmsg">*</span></label>
                      <input value={password}
                        onChange={e => setpassword(e.target.value)}
                        type={showpassword ? "text" : "password"} className="form-control" placeholder="********"></input>



                      <button type="button" className="eye" onClick={togglePasswordVisibility}> {showpassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} size="sm" style={{ color: "#adc8f5", }} />} </button>

                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group" style={{ position: 'relative', bottom: '25px' }}>
                      <label> &nbsp;&nbsp;<FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;Confirm password<span className="errmsg">*</span></label>
                      <input value={confirm} onChange={e => setconfirm(e.target.value)} type={showpassword ? "text" : "password"} className="form-control" placeholder="********"></input>
                      <button type="button" className="eye1" onClick={toggleConfirmPasswordVisibility}> {showpassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} size="sm" style={{ color: "#adc8f5", }} />}</button>
                    </div>
                  </div>
                </div>



              </div>
              <div className="card-footer" id='foot'>
                <button type='submit' className='reg2'>Register</button>
                <p>already you have an account? <a className="reg" href="/Signin">Login here</a></p>
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




    </React.Fragment>


  );
}

export default Registration;
