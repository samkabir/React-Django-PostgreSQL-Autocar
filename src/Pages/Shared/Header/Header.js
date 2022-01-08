// import React from 'react';
import * as React from 'react';
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
                            <Link style={{textDecoration:'none', color:'white' }} to="/">
                                <LocalPhoneIcon sx={{color: '#d8721c' }} /> <Typography sx={{color:'white', mr: 3 }} variant="overline" > + 91 123 456 7890 </Typography>
                            </Link>
                            <Link style={{textDecoration:'none', color:'white'}} to="/">
                                <SupportIcon sx={{color: '#d8721c' }} /> <Typography sx={{color:'white', mr: 3}} variant="overline" >  Certified ISO 9001 : 2008 </Typography>
                            </Link>
                            <Link style={{textDecoration:'none', color:'white'}} to="/">
                                <SupportIcon sx={{color: '#d8721c' }} /> <Typography sx={{color:'white', mr: 3}} variant="overline" >  Mon-Fri: 8am - 7pm </Typography>
                            </Link>
                        </Typography>
                        <Box>
                            <FacebookIcon sx={{mx:1}} /> <TwitterIcon sx={{mx:1}}/><LinkedInIcon sx={{mx:1}}/> < GoogleIcon sx={{mx:1}} />
                        </Box>
                    </Toolbar>
                </AppBar>   
            </Box>
            <Box sx={{ flexGrow: 1, pb: 2 }} style={headerStyle}>
                <AppBar style={{ background: '#ffffff' }} position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link style={{textDecoration:'none', color:'black'}} to="/">
                                <img src={logo} alt="Company LOGO" width="200" height="50" /> 
                            </Link>
                        </Typography>
                        <Box>
                            <Link style={{textDecoration:'none', color:'black'}} to="/"><Button color="inherit">HOME</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/"><Button color="inherit">FEATURES</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/"><Button color="inherit">PAGES</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/"><Button color="inherit">SHOP</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/"><Button color="inherit">BLOG</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/"><Button color="inherit">SHORTCODES</Button></Link>
                            <Link style={{textDecoration:'none', color:'black'}} to="/"><Button color="inherit">CONTACT US</Button></Link>
                            <SearchIcon sx={{color: '#000000', mx: 2 }} />
                            <ShoppingBagIcon sx={{color: '#000000', mx: 2 }} />
                            <Link style={{textDecoration:'none', color:'white'}} to="/"><Button sx={{ backgroundColor:'#f68220', p:3}} color="inherit">GET A QUOTE</Button></Link>
                        </Box>
                    </Toolbar>
                </AppBar>   
            </Box>
        </div>
    );
};

export default Header;