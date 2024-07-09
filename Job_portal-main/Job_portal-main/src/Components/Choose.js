import React from 'react'
import './Choose.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import screen2 from './screen2.png';

function Choose() {
    return (
        <div className='why'>
            <div>
                <Container>
                    <Row>
                        <Col md={7}>
                            {/* Content */}
                            <div className="content">
                                <h5 className='us'>Why choose us?</h5>
                                <h2 className='at'>
                                World of talent at your fingertips
                                </h2>
                                 <p>It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.<br/> It only takes 5 minutes.</p>
                            </div>
                        </Col>
                        <Col md={5}>
                            {/* Image */}
                            <div className="image-container">
                               <img src={screen2} alt="Your Image" className='screen' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Choose
