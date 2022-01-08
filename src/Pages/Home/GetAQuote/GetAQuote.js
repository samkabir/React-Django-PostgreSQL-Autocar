import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import image from '../../../images/thum1.jpg';

const GetAQuote = () => {
    
    return (
        <div>
            <Container sx={{pt: 10 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <Title>Everything you need to <br /> build <span> an amazing dealership <br />website.</span></Title>
                        <Paragraph>There are many variations of passages of Lorem Ipsum typesetting industry<br /> has been the industry's standard dummy text ever since the been when an <br /> unknown printer.</Paragraph>
                        <Button>GET A QUOTE</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={image} alt="" /> 
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

    const Title = styled.h1`
    font-weight: 700;
     > span{
         color: orange;
     }
    `;
    const Paragraph = styled.p`
        color: #848484;
        font-size: 14px;
        padding-bottom: 60px;
    `;
    const Button = styled.button`
        background-color: #f68220;
        padding: 15px 30px;
        border: 0px;
        color: white;
        & hover: {

        }
    `;


export default GetAQuote;