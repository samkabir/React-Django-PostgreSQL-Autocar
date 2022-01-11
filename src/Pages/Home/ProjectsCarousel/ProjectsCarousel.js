import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/pic1.jpg';
import img2 from '../../../images/pic2.jpg';
import img3 from '../../../images/pic3_002.jpg';
import styled from "styled-components";

const ProjectsCarousel = () => {
    return (
        <Wrapper>
            <Carousel autoPlay={true} infiniteLoop={true} transitionTime={800}>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    .carousel-status{
        display: none;
    };
    .thumbs-wrapper{
        display: none;
    };
    .control-arrow{
        display: none;
    
    };
`;

export default ProjectsCarousel;