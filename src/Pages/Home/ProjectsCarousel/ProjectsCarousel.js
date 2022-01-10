import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/pic1.jpg';
import img2 from '../../../images/pic2.jpg';
import img3 from '../../../images/pic3_002.jpg';

const ProjectsCarousel = () => {
    return (
        <Carousel autoPlay>
            <div>
                <img src={img1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default ProjectsCarousel;