import React from 'react';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import image from '../../../images/thum1.jpg';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { Container } from 'react-bootstrap';

const GetAQuote = () => {
    
    return (
        <Container>
            <Wrapper>
                <div>
                    <Title>Everything you need to <br /> build <span> an amazing dealership <br />website.</span></Title>
                    <Paragraph>There are many variations of passages of Lorem Ipsum typesetting industry<br /> has been the industry's standard dummy text ever since the been when an <br /> unknown printer.</Paragraph>
                    <Button>GET A QUOTE</Button>
                </div>
                <div>
                    <Playvideo>
                        <PlayCircleFilledWhiteIcon />
                    </Playvideo>
                </div>
                <div>
                    <Image src={image} alt="" /> 
                </div>
            </Wrapper>
        </Container>
    );
};
    const Wrapper = styled.div`
        
        margin: 50px auto;
        @media only screen and (min-device-width: 1199px){
            display: flex;
        };
        @media only screen and (max-device-width: 1199px){
            display: flex;
            flex-direction:column;
        };
    `;
    const Image = styled.img`
        @media only screen and (max-device-width: 450px){
            height: 200px;
            width: 300px;
        };
        @media only screen and (min-device-width: 451px) and (max-device-width: 1199px){
            height: 300px;
            width: 400px;
        };
    `;
    const Playvideo = styled.div`
        @media only screen and (min-device-width: 1199px){
            .MuiSvgIcon-root{
                font-size: 70px;
                margin-top: 150px;
                margin-left: 50px;
            };
        };
        @media only screen and (max-device-width: 1199px){
            .MuiSvgIcon-root{
                font-size: 70px;
                margin-left:150px;
            };
        };
    `;
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