import { Container } from '@mui/material';
import React from 'react';
import styled from "styled-components";
import logo1 from "../../../images/logo1.jpg";
import logo2 from "../../../images/logo2.jpg";
import logo3 from "../../../images/logo3.jpg";
import logo4 from "../../../images/logo4.jpg";

const Partners = () => {
    return (
        <PartnersSection>
            <Container maxWidth="lg" >
                <div className="image-container">
                    <img src={logo3} className="images" alt="logo1" height="80px"   />
                
                    <img src={logo1} className="images" alt="logo1" height="80px"   />
                
                    <img src={logo2} className="images" alt="logo1" height="80px"   />
                
                    <img src={logo1} className="images" alt="logo1" height="80px"   />
                
                    <img src={logo3} className="images" alt="logo1" height="80px"   />
                </div>
            </Container>
        </PartnersSection>
    );
};

const PartnersSection = styled.div`
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