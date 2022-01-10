import { Container, Grid } from '@mui/material';
import styled from "styled-components";
import React from 'react';
import './Footer.css'
import logo from '../../../images/logo3.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PrintIcon from '@mui/icons-material/Print';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import breakpoint from '../../Shared/Breakpoints/Breakpoints';

const Footer = () => {
    return (
        <div>
            <div style={footerBG}>
                <Container>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6} lg={3} style={footerDiv}>

                            <img src={logo} style={{ width: "100%" }}></img>
                            <p style={textColor}>Auto Care ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore agna aliquam erat.</p>
                            <FacebookIcon style={iconStyle}></FacebookIcon>
                            <TwitterIcon style={iconStyle}></TwitterIcon>
                            <LinkedInIcon style={iconStyle}></LinkedInIcon>
                            <FacebookIcon style={iconStyle}></FacebookIcon>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} style={footerDiv}>
                            <h3 style={footerTitle}>USEFULL LINKS</h3>
                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Engine Diagnostics</p>
                            </div>

                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Lube, Oil and Filters</p>
                            </div>

                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Belts and Hoses</p>
                            </div>

                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Air Conditioning</p>
                            </div>

                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Tire And Wheel</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} style={footerDiv}>
                            <h3 style={footerTitle}>OUR SERVICES</h3>
                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Engine Diagnostics</p>
                            </div>

                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Lube, Oil and Filters</p>
                            </div>

                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Belts and Hoses</p>
                            </div>

                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Air Conditioning</p>
                            </div>

                            <div style={footerText}>
                                <ChevronRightIcon></ChevronRightIcon>
                                <p > Tire And Wheel</p>
                            </div>

                        </Grid>
                        <Grid item xs={12} md={6} lg={3} style={footerDiv}>
                            <h3 style={footerTitle}>CONTACT US</h3>
                            <div style={contactStyle}>
                                <LocationOnIcon style={contactIcon}></LocationOnIcon>
                                <div>
                                    <h2 style={contactHeader}>Adress</h2>
                                    <p> demo address #8901 Marmora Road Chi Minh City, Vietnam</p>
                                </div>

                            </div>

                            <div style={contactStyle}>
                                
                                <PhoneAndroidIcon style={contactIcon}></PhoneAndroidIcon>
                                <div>
                                    <h2 style={contactHeader}>PHONE</h2>
                                    <p> 0800-123456 (24/7 Support Line)</p>
                                </div>

                            </div>

                            <div style={contactStyle}>
                            <PrintIcon style={contactIcon}></PrintIcon>
                                <div>
                                    <h2 style={contactHeader}>FAX</h2>
                                    <p> (123) 123-4567</p>
                                </div>

                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer2>
                <Container>
                    <Footer2Wrapper>
                        <div>
                            <p>© Copyright 2021</p>
                        </div>
                        <div>
                            <p>Design With <FavoriteBorderIcon /> ByDexignLab</p>
                        </div>
                        <BottomNavigation>
                            <p>About Us </p>
                            <p>FAQs </p>
                            <p>Contact Us </p>
                        </BottomNavigation>
                    </Footer2Wrapper>
                </Container>
            </Footer2>
        </div>
    );
};
const footerBG = {
    backgroundColor: "#212529",
    paddingTop: "30px",
    paddingBottom: "30px"
};
const footerTitle = {
    color: "white"
};
const textColor = {
    color: "#b0b0b0"
};
const footerText = {
    color: "#b0b0b0",

    borderBottom: "2px dashed rgba(102,102,102,.11)",
    display: "flex",
    alignItems: "center"
}
const iconStyle = {

    color: "white",
    padding: "0px",
    marginRight: "10px",
    border: "1px solid white"
};
const footerDiv = {
    paddingLeft: "15px",
    paddingRight: "15px"
}

const contactStyle = {
    display: "flex",
    alignItems: "center",
    color: "#b0b0b0",
}
const contactHeader = {
    lineHeight: "0px",
    fontSize:"16px"
}

const contactIcon = {
    fontSize: "40px",
    marginRight: "20px"
}

const Footer2 = styled.div`
    background-color: #14191c;
    padding-top: 20px;
    align-content: center;
    color: white;
`;

const Footer2Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and ${breakpoint.device.sm}{
        display:flex;
        flex-direction: column;
        align-items: center;
    };
    @media only screen and ${breakpoint.device.xs}{
        display:flex;
        flex-direction: column;
        align-items: center;
    };

`;
const BottomNavigation = styled.div`
    display:flex;
    >p {
        padding: 0px 3px;
    }
`;

export default Footer;