import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import whatsapp from './whatsapp.png';
import instagram from './instagram.png';
import google from './google.png';
import './Footer.css';
function Footer() {
    return (
        <div className='pic'>
            <div>
                <Container>
                    <Row>
                        <Col md={6}>
                            {/* Left Content */}
                            <div className="left-content">
                                <h2 className='left'>Complete job portal <br /> for Everyone.</h2>
                            </div>
                        </Col>
                        <Col md={6}>
                            {/* Right Content */}
                            <div className="right-content">
                                <p className='para'>Find your dream job & earn from all world the <br /> Leading brands.</p>
                                <div className='m'>
                                    <button type='submit' className='look'>Looking for job?</button>
                                    <button type='submit' className='hire'>Start hiring</button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
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
                  <img src={whatsapp} alt='imgerror' className='whatsapp'/>
                  <img src={instagram} alt='imgerror' className='whatsapp'/>
                  <img src={google} alt='imgerror' className='whatsapp'/>
                   
                </footer>
            </div>

        </div>
    )
}

export default Footer
