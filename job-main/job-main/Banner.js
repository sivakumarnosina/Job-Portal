import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner5 from './banner5.webp';
import './Banner.css';


function Banner() {
  return (
   <React.Fragment>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
       </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner5}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>

   </React.Fragment>
  )
}

export default Banner
