import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data.allservices))
    },[]);



    return (
        <Wrapper>
            <Container>
                <Title>OUR SERVICES</Title>
                <Description>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's <br /> standard dummy text ever since the been when an unknown printer. </Description>
                <Grid container spacing={2}>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
                </Grid>
            </Container>
        </Wrapper>
    );
};

    const Wrapper = styled.div`
        margin-top: 100px;
        margin-bottom: 80px;
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