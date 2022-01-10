import { Container } from '@mui/material';
import React from 'react';
import styled from "styled-components";
import logo1 from "../../../images/logo1.jpg";
import logo2 from "../../../images/logo2.jpg";
import logo3 from "../../../images/logo3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Partners = () => {
    return (
        <PartnersSection>
            <Container maxWidth="lg" >
                <LargeCarousel>
                    <div className="image-container">
                        <img src={logo3} className="images" alt="logo1" height="80px"   />
                    
                        <img src={logo1} className="images" alt="logo1" height="80px"   />
                    
                        <img src={logo2} className="images" alt="logo1" height="80px"   />
                    
                        <img src={logo1} className="images" alt="logo1" height="80px"   />
                    
                        <img src={logo3} className="images" alt="logo1" height="80px"   />
                    </div>
                </LargeCarousel>
                <MobileCarousel>
                    <Carousel autoPlay={true} infiniteLoop={true} transitionTime={800}>
                        <div>
                            <img src={logo3} className="images" />
                        </div>
                        <div>
                            <img src={logo1} className="images" />
                        </div>
                        <div>
                            <img src={logo2} className="images" />
                        </div>
                        <div>
                            <img src={logo1} className="images" />
                        </div>
                        <div>
                            <img src={logo3} className="images" />
                        </div>
                    </Carousel>
                </MobileCarousel>
            </Container>
        </PartnersSection>
    );
};
const MobileCarousel = styled.div`
    .carousel-status{
        display: none;
    }
    @media only screen and (max-width: 1280px) {
        .control-dots{
            display: none;
        };
        .thumbs-wrapper{
            display: none;
        };
        .control-arrow{
            display: none;
        };
    };
    @media only screen and (min-width: 1280px){
        display:none;
    }
`;

const LargeCarousel = styled.div`
    @media only screen and (max-width: 1280px){
        display:none;
    };
`;

const PartnersSection = styled.div`
    margin-top: 80px;
    background-color: #f68220;
    display: flex;
    flex-direction: row;
    padding: 40px 0px;
    .image-container{
        display: flex;
        justify-content: space-evenly;
    };
    .images{
        padding: 10px 50px;
        margin: 20px;
        background-color: white;
        max-width: 180px;
    }
`;

export default Partners;