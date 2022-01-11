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
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
    const [isActive,setActive] =React.useState(false)
    function handleToggle(menu) {
        setActive(!isActive);
    };
    const headerStyle = {
        paddingBottom : "0px"
    }
  
    return (
        <div>
            {/* Top Info Bar */}
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
            {/* Nav Bar */}
            <Box sx={{ flexGrow: 1, pb: 2 }} style={headerStyle}>
                <AppBar style={{ background: '#ffffff' }} position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Logo>
                                <Link style={{textDecoration:'none', color:'black'}} to="/">
                                    <img src={logo} alt="Company LOGO" width="200" height="50" /> 
                                </Link>
                            </Logo>
                        </Typography>
                        
                        <DesktopView>
                            <Link style={{textDecoration:'none', color:'black'}} to="/"><Button color="inherit">HOME</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/cars"><Button color="inherit">CARS</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/aboutUs"><Button color="inherit">ABOUT US</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/contactUs"><Button color="inherit">CONTACT US</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/login"><Button color="inherit">LOGIN</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/signUp"><Button color="inherit">SIGNUP</Button></Link>
                            <SearchIcon sx={{color: '#000000', mx: 2 }} />
                            <ShoppingBagIcon sx={{color: '#000000', mx: 2 }} />
                            <Link style={{textDecoration:'none', color:'white'}} to="/"><Button sx={{ backgroundColor:'#f68220', p:3}} color="inherit">GET A QUOTE</Button></Link>
                        </DesktopView>

                        <MobileView id="hamburger-icon" onClick={handleToggle}>
                            {
                                isActive? <CloseIcon /> : <MenuIcon />
                            }
                        
                            <Link style={{textDecoration:'none', color:'black'}} to="/"><Button color="inherit">HOME</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/cars"><Button color="inherit">CARS</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/aboutUs"><Button color="inherit">ABOUT US</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/contactUs"><Button color="inherit">CONTACT US</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/login"><Button color="inherit">LOGIN</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/signUp"><Button color="inherit">SIGNUP</Button></Link>
                            <SearchIcon sx={{color: '#000000', mx: 2 }} />
                            <ShoppingBagIcon sx={{color: '#000000', mx: 2 }} />
                            <Link style={{textDecoration:'none', color:'white'}} to="/"><Button sx={{ backgroundColor:'#f68220', p:3}} color="inherit">GET A QUOTE</Button></Link>
                        </MobileView>
                    </Toolbar>
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
const MobileView = styled.div`
    @media only screen and (max-device-width: 991px){
        
    };
    @media only screen and (min-width: 992px){
        display:none;
    };
`;
const DesktopView = styled.div`
    @media only screen and (max-device-width: 991px){
        display:none;
    };
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        
    };
    @media only screen and (min-width: 1199px){
        
    };
`;
const Logo = styled.div`
    @media only screen and (max-device-width: 768px){
        
    };
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        
    };
    @media only screen and (min-width: 1199px){
        
    };
`;

export default Header;