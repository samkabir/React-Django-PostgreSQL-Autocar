import * as React from 'react';
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SupportIcon from '@mui/icons-material/Support';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import logo from '../../../images/logo-black3.png';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {

    const headerStyle = {
        paddingBottom : "0px"
    }
  
    return (
        <div>
            <Box sx={{ flexGrow: 1  }}>
                <AppBar style={{ background: '#303338' }} position="static">
                        <Toolbar>
                            <Typography sx={{ flexGrow: 1 }}>
                                <Header1Support>
                                    <div>
                                        <Link style={{textDecoration:'none', color:'white' }} to="/">
                                            <LocalPhoneIcon sx={{color: '#d8721c' }} /> <Typography sx={{color:'white', mr: 3 }} variant="overline" > + 91 123 456 7890 </Typography>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link style={{textDecoration:'none', color:'white'}} to="/">
                                            <SupportIcon sx={{color: '#d8721c' }} /> <Typography sx={{color:'white', mr: 3}} variant="overline" >  Certified ISO 9001 : 2008 </Typography>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link style={{textDecoration:'none', color:'white'}} to="/">
                                            <SupportIcon sx={{color: '#d8721c' }} /> <Typography sx={{color:'white', mr: 3}} variant="overline" >  Mon-Fri: 8am - 7pm </Typography>
                                        </Link>
                                    </div>
                                </Header1Support>
                            </Typography>
                            <Box>
                                <Header1MediaIcons>
                                        <div>
                                            <FacebookIcon sx={{mx:1}} /> <TwitterIcon sx={{mx:1}}/> 
                                        </div>
                                        <div>
                                            <LinkedInIcon sx={{mx:1}}/> < GoogleIcon sx={{mx:1}} />
                                        </div>
                                </Header1MediaIcons>
                            </Box>
                        </Toolbar>
                    
                </AppBar>   
            </Box>
            <Box sx={{ flexGrow: 1, pb: 2 }} style={headerStyle}>
                <AppBar style={{ background: '#ffffff' }} position="static">
                    <Navbar collapseOnSelect sticky="top" bg="white" expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to="/home">
                                <Link style={{textDecoration:'none', color:'black'}} to="/">
                                    <img src={logo} alt="Company LOGO" width="200" height="50" /> 
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                                <Nav >
                                    <Nav.Link as={Link} to="/">HOME</Nav.Link>
                                    <Nav.Link as={Link} to="/cars">CARS</Nav.Link>
                                    <Nav.Link as={Link} to="/aboutUs">ABOUT US</Nav.Link>
                                    <Nav.Link as={Link} to="/contactUs">CONTACT US</Nav.Link>
                                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                                    <Nav.Link as={Link} to="/signUp">SIGN UP</Nav.Link>
                                    <HeaderButton>
                                        <Link style={{textDecoration:'none', color:'white'}} to="/"><Button sx={{ backgroundColor:'#f68220', p:1, ml:2}} color="inherit">GET A QUOTE</Button></Link>
                                    </HeaderButton>
                                </Nav>
                            </Navbar.Collapse>    
                        </Container>
                    </Navbar>
                </AppBar>   
            </Box>
        </div>
    );
};

const Header1Support = styled.div`
    @media only screen and (max-device-width: 768px){
        display:flex;
        flex-direction:column;
    };
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        display:flex;
        flex-direction:row;
    };
    @media only screen and (min-width: 1199px){
        display:flex;
        flex-direction:row;
    };
`;
const Header1MediaIcons = styled.div`
    @media only screen and (max-width: 768px){
        display:flex;
        flex-direction:column;
    };
    @media only screen and (min-width: 1199px){
        display:flex;
        flex-direction:row;
    };
`;
const HeaderButton = styled.div`
    @media only screen and (max-device-width: 991px){
        margin-left: -20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export default Header;