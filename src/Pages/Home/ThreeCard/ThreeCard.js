import * as React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import { Box, textAlign } from '@mui/system';
// import img from '../../../images/pic2.jpg';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const ThreeCard = () => {
    const title ={
        fontSize:15,
        fontWeight:900,
        color:'grey',
        textAlign: 'center'
    }
    const shortDes ={
        fontSize:25,
        fontWeight:900,
        textAlign: 'center'
    }
    const button ={
        color:'orange',
        border: '2px solid orange',
        borderRadius: '50px',
        padding: '10px 20px'
    }
    return (
        <Container>
            <Box>
                <Wrapper>
                    <Cards >
                        <Box sx={{display:'flex', justifyContent: 'center'}}>
                            <HeadsetMicOutlinedIcon sx={{color:'orange', fontSize: 60,  fontWeight: 'light'}}/>
                        </Box>
                        <CardContent>
                            <Typography gutterBottom style={title} component="div">
                                CERTIFIED
                            </Typography>
                            <Typography gutterBottom style={shortDes} component="div">
                                We are young <br /> talented certified<br /> engineers
                            </Typography>
                        </CardContent>
                        <Box sx={{display:'flex', justifyContent: 'center'}}>
                            <CardActions>
                                <Button style={button} >Read More</Button>
                            </CardActions>
                        </Box>
                    </Cards>
                    <Cards id="middle-card" >
                        <Box sx={{display:'flex', justifyContent: 'center'}}>
                            <StackedBarChartOutlinedIcon sx={{color:'white', fontSize: 60,  fontWeight: 'light'}}/>
                        </Box>
                        <CardContent>
                            <Typography gutterBottom sx={{color:'white!important'}} style={title} component="div">
                                CERTIFIED
                            </Typography>
                            <Typography gutterBottom style={shortDes} sx={{color:'white'}} component="div">
                                We are young <br /> talented certified<br /> engineers
                            </Typography>
                        </CardContent>
                        <Box sx={{display:'flex', justifyContent: 'center'}}>
                            <CardActions>
                                <Button style={button} >Read More</Button>
                            </CardActions>
                        </Box>
                    </Cards>
                    <Cards>
                        <Box sx={{display:'flex', justifyContent: 'center'}}>
                            <EmojiEventsOutlinedIcon sx={{color:'orange', fontSize: 60,  fontWeight: 'light'}}/>
                        </Box>
                        <CardContent>
                            <Typography gutterBottom style={title} component="div">
                                CERTIFIED
                            </Typography>
                            <Typography gutterBottom style={shortDes} component="div">
                                We are young <br /> talented certified<br /> engineers
                            </Typography>
                        </CardContent>
                        <Box sx={{display:'flex', justifyContent: 'center'}}>
                            <CardActions>
                                <Button style={button} >Read More</Button>
                            </CardActions>
                        </Box>
                    </Cards>
                </Wrapper>   
            </Box>
        </Container>
    );
};

const Wrapper = styled.div`
    @media only screen and (max-device-width: 1199px){
        display:flex;
        flex-direction: column;
        margin-top: 50px;

        #middle-card {
            background-image:url("../../../images/pic2.jpg");
        }
    };
    @media only screen and (min-width: 1200px){
        display:flex;
        flex-direction:row;
    };
    
    `;

const Cards = styled.div`
    @media only screen and (max-device-width: 1199px){
        max-width: 300px; 
        padding: 10px 30px;
        margin: 10px 10px;
        background-color: #f3f3f3;
        box-shadow:0px 0px #000000; 
        border-radius:0px;
    };
    @media only screen and (min-width: 1200px){
        
    };
`;

export default ThreeCard;