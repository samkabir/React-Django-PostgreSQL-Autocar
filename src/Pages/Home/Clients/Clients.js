import React from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import styled from 'styled-components'
import img1 from '../../../images/pic1_004.jpg'
import {
    A11y,
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
    Scrollbar
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
const Clients = () => {

    return (
        <div>
            <Title>WHAT <span>CLIENTS SAYS</span></Title>
            <SmallTitle>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's <br></br> standard dummy text ever since the been when an unknown printer.</SmallTitle>

            <Container>
                <Row>
                    <Col sm={8}>

                        <Swiper
                            modules={[
                                Navigation,
                                Pagination,
                                Scrollbar,
                                A11y,
                                EffectFade,
                                Autoplay,
                            ]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            autoplay={true}
                            navigation
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="slide-part">
                                    <div className="d-flex justify-content-center">
                                        <img
                                            className="swiper-card-img my-4"
                                            src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/testimonial-1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-center w-50 mx-auto mb-5">
                                        <p>
                                            Etusaesent justo dolor, lobortis quobortisnissim pulvinar ac
                                            Lorem ipsum dolor sit amet,nsectetuer adipiscing et
                                            loremdovestibmolestie.Fusce et libero
              </p>
                                        <h5>Mistoy Deo</h5>
                                        <small>Teeth Whiting</small>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-part">
                                    <div className="d-flex justify-content-center">
                                        <img
                                            className="swiper-card-img my-4"
                                            src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/testimonial-2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-center w-50 mx-auto mb-5">
                                        <p>
                                            Etusaesent justo dolor, lobortis quobortisnissim pulvinar ac
                                            Lorem ipsum dolor sit amet,nsectetuer adipiscing et
                                            loremdovestibmolestie.Fusce et libero
              </p>
                                        <h5>Mistoy Deo</h5>
                                        <small>Teeth Whiting</small>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-part">
                                    <div className="d-flex justify-content-center">
                                        <img
                                            className="swiper-card-img my-4"
                                            src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/testimonial-4.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-center w-50 mx-auto mb-5">
                                        <p>
                                            Etusaesent justo dolor, lobortis quobortisnissim pulvinar ac
                                            Lorem ipsum dolor sit amet,nsectetuer adipiscing et
                                            loremdovestibmolestie.Fusce et libero
              </p>
                                        <h5>Mistoy Deo</h5>
                                        <small>Teeth Whiting</small>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </Col>
                    <Col sm={4}>
                        <ClientImage
                            src={img1}>
                        </ClientImage>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const Title = styled.h2`
color:#2d3239;
> span{
    color: #f68220;
};
text-align:center;
font-size:30px;
margin-bottom:10px;
font-weight:700;
`;

const SmallTitle = styled.p`
color:gray;
text-align:center;
`;
const ClientImage = styled.img`
width:100%;
`;
export default Clients;