import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import image1 from '../../../images/pic1_002.jpg';
import image2 from '../../../images/pic2_003.jpg';
import image3 from '../../../images/pic3_003.jpg';

const Services = () => {
    return (
        <Wrapper>
            <Container>
                <Title>OUR SERVICES</Title>
                <Description>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's <br /> standard dummy text ever since the been when an unknown printer. </Description>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <ParentCard>
                            <Image src={image1} alt="Service1" /> 
                            <Cards>
                                <h4>Engineering Chemistry</h4>
                                <p>Lorem ipsum dolor sit adipiscing elit sed diam nonummy nibh euismod.</p>
                                <button>Read More</button>
                            </Cards>
                        </ParentCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ParentCard>
                            <Image src={image2} /> 
                            <Cards>
                                <h4>Oil {`&`} Gas Energy</h4>
                                <p>Lorem ipsum dolor sit adipiscing elit sed diam nonummy nibh euismod.</p>
                                <button>Read More</button>
                            </Cards>
                        </ParentCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ParentCard>
                            <Image src={image3} /> 
                            <Cards>
                                <h4>Bridge Construction</h4>
                                <p>Lorem ipsum dolor sit adipiscing elit sed diam nonummy nibh euismod.</p>
                                <button>Read More</button>
                            </Cards>
                        </ParentCard>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
};

    const Wrapper = styled.div`
        margin-top: 100px;
        text-align: center;
    `;
    const Cards = styled.div`
        text-align: center;
        background-color: white;
        margin: 0px 15px;
        padding: 10px;
        > h4 {
            font-size: 20px;
        };
        > p {
            font-size: 15px;
        }
        >button {
            font-size: 14px; 
        };
    `;
    const Image = styled.img`
        height: 230px;
        width: 350px;
        margin-left: -8px;
    `;
    const ParentCard = styled.div`
        margin: 0px 20px;
    `;

    const Title = styled.h2`
        color:#f68220;
        font-weight:700;
        font-size: 30px;
    `;
    const Description = styled.p`
        color: #848484;
        font-size: 12px;
        margin-bottom: 30px;
    `

export default Services;