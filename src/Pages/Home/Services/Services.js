import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import image1 from '../../../images/pic1_002.jpg';
import image2 from '../../../images/pic2_003.jpg';
import image3 from '../../../images/pic3_003.jpg';
import image4 from '../../../images/pic4.jpg';
import image5 from '../../../images/pic5.jpg';
import image6 from '../../../images/pic6.jpg';
import breakpoint from '../../Shared/Breakpoints/Breakpoints';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <Wrapper>
            <Container>
                <Title>OUR SERVICES</Title>
                <Description>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's <br /> standard dummy text ever since the been when an unknown printer. </Description>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <ParentCard>
                            <div>
                                <Image src={image1} /> 
                            </div>
                            <Cards>
                                <h4>Engineering Chemistry</h4>
                                <p>Lorem ipsum dolor sit adipiscing elit sed diam nonummy nibh euismod.</p>
                                <button>Read More</button>
                            </Cards>
                        </ParentCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ParentCard>
                            <div>
                                <Image src={image2} /> 
                            </div>
                            <Cards>
                                <h4>Engineering Chemistry</h4>
                                <p>Lorem ipsum dolor sit adipiscing elit sed diam nonummy nibh euismod.</p>
                                <button>Read More</button>
                            </Cards>
                        </ParentCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ParentCard>
                            <div>
                                <Image src={image3} /> 
                            </div>
                            <Cards>
                                <h4>Engineering Chemistry</h4>
                                <p>Lorem ipsum dolor sit adipiscing elit sed diam nonummy nibh euismod.</p>
                                <button>Read More</button>
                            </Cards>
                        </ParentCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ParentCard>
                            <div>
                                <Image src={image4} /> 
                            </div>
                            <Cards>
                                <h4>Engineering Chemistry</h4>
                                <p>Lorem ipsum dolor sit adipiscing elit sed diam nonummy nibh euismod.</p>
                                <button>Read More</button>
                            </Cards>
                        </ParentCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ParentCard>
                            <div>
                                <Image src={image5} /> 
                            </div>
                            <Cards>
                                <h4>Engineering Chemistry</h4>
                                <p>Lorem ipsum dolor sit adipiscing elit sed diam nonummy nibh euismod.</p>
                                <button>Read More</button>
                            </Cards>
                        </ParentCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ParentCard>
                            <div>
                                <Image src={image6} /> 
                            </div>
                            <Cards>
                                <h4>Engineering Chemistry</h4>
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
        margin-bottom: 80px;
    `;
    const Cards = styled.div`
        background-color: white;
        margin: 0px 10px;
        margin-top:-20px;
        padding: 20px;
        > h4 {
            font-size: 20px;
        };
        > p {
            font-size: 15px;
        };
        > button {
            font-size: 14px;
            border: 0px solid;
            display:flex;
            color:#f68220;
            background-color: white;
        };
        @media only screen and ${breakpoint.device.sm}{

        };
        @media only screen and ${breakpoint.device.xs}{

        };
    `;
    const Image = styled.img`
        position:relative;
        z-index:-1;
        height: 230px;
        width: 350px;
        margin-left: -8px;
    `;
    const ParentCard = styled.div`
        margin: 10px 20px;
        @media only screen and ${breakpoint.device.sm}{
            
        };
        @media only screen and ${breakpoint.device.xs}{
            
        };
    `;

    const Title = styled.h2`
        text-align:center;
        color:#f68220;
        font-weight:700;
        font-size: 30px;
    `;
    const Description = styled.p`
    text-align:center;
        color: #848484;
        font-size: 12px;
        margin-bottom: 30px;
    `

export default Services;