import { Carousel } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import slide1 from '../../../images/pic2_003.jpg'
import slide2 from '../../../images/pic3_003.jpg'
import slide3 from '../../../images/pic5.jpg'
import Button from '@mui/material/Button';
import "./Banner.css";
import React from 'react';

const Banner = () => {
  const imageStyle = {
    height:"650px",
    objectFit:"cover"
  }

  const sliderHederStyle = {
    fontSize: "80px"
  }
  const buttonStyle = {
    backgroundColor: "#f68220",
    borderRadius:"0px",
    padding:"15px 30px",
    marginTop:"40px"
  }
  const bannnerIndex = {
    zIndex: '-1'
  }
    
    return (
      <Carousel style= {bannnerIndex}>
      <Carousel.Item className="carousel-item">
        <img
        style={imageStyle}
          className=" d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h1 style={sliderHederStyle}>Make Your Car</h1>
          <h1 style={sliderHederStyle}>Last Longer</h1>
          <p> There are many variations of passages of Lorem Ipsum typesetting industry.</p>
          <Button variant="contained" style={buttonStyle}>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
        style={imageStyle}
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
    
        <Carousel.Caption className="caption">
        <h1 style={sliderHederStyle}>Make Your Car</h1>
          <h1 style={sliderHederStyle}>Last Longer</h1>
          <p> There are many variations of passages of Lorem Ipsum typesetting industry.</p>
          <Button variant="contained" style={buttonStyle}>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
        style={imageStyle}
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
    
        <Carousel.Caption className="caption">
        <h1 style={sliderHederStyle}>Make Your Car</h1>
          <h1 style={sliderHederStyle}>Last Longer</h1>
          <p> There are many variations of passages of Lorem Ipsum typesetting industry.</p>
          <Button variant="contained" style={buttonStyle}>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;