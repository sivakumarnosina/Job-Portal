import React from 'react'
import './Trending.css';
import Col from 'react-bootstrap/Col';
import {  Figure } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import card1 from './card1.jpg';
import card2 from './card2.webp';
import card3 from './card3.jpg';
import card4 from './card4.webp';

function Trending() {
  return (
    <div className='container'>
      <h1 className='mov'>TRENDING JOBS</h1>
      <div className='trend'>
        <Container>
          <Row>
            <Col xs={6} md={3}>
            <Figure className="fade-container">
            <a href=""> <Figure.Image
                  src={card1}
                  alt="Card 1"
                  style={{ width: '300px', height: '250px' }}
                  className='img'
                />
                </a> 
                <Figure.Caption>
                  <h6  className='caption'>Design & Development</h6>
                </Figure.Caption>
              </Figure>

            </Col>
            <Col xs={6} md={3}>
            <Figure className="fade-container">
            <a href=""> <Figure.Image
                  src={card2}
                  alt="Card 2"
                  style={{ width: '300px', height: '250px' }}
                  className='img'
                />
                </a> 
                <Figure.Caption>
                  <h6  className='caption'>Customer help & Sales.</h6>
                </Figure.Caption>
              </Figure>

            </Col>
            <Col xs={6} md={3}>
            <Figure className="fade-container">
            <a href=""> <Figure.Image
                  src={card3}
                  alt="Card 1"
                  style={{ width: '300px', height: '250px' }}
                  className='img'
                />
                </a> 
                <Figure.Caption>
                  <h6  className='caption'>Bussiness Marketing</h6>
                </Figure.Caption>
              </Figure>

            </Col>
            <Col xs={6} md={3}>
            <Figure className="fade-container">
            <a href=""> <Figure.Image
                  src={card4}
                  alt="Card 1"
                  style={{ width: '300px', height: '250px' }}
                  className='img'
                />
                </a> 
                <Figure.Caption>
                  <h6  className='caption'>Programming & Coding</h6>
                </Figure.Caption>
              </Figure>

            </Col>
           
          </Row>
        </Container>

      </div>
    </div>

  )
}

export default Trending
