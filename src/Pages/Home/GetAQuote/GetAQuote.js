import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import image from '../../../images/thum1.jpg';

const GetAQuote = () => {
    
    return (
        <div>
            <Container >
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <h2>This is Title and Paragraph</h2>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2>This is the image section</h2>
                </Grid>
            </Grid>
            </Container>
            <h2>This is Get A Quote</h2>
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