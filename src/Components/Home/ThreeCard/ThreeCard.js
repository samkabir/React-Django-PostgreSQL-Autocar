import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import { Box, textAlign } from '@mui/system';
import img from '../../../images/pic2.jpg';
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
            <Box sx={{ display:'flex', flexDirection:'row', justifyContent: 'center' ,mt: '-100px'}}>
                <Card sx={{ maxWidth: 345, py: 6, px:8, backgroundColor: '#f3f3f3', boxShadow:'0px 0px #000000', borderRadius:'0px' }}>
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
                </Card>
                <Card sx={{ maxWidth: 345, py: 6, px:8, backgroundImage: `url(${img})`, boxShadow:'0px 0px #000000', borderRadius:'0px'  }}>
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
                </Card>
                <Card sx={{ maxWidth: 345, py: 6, px:8, backgroundColor: '#f3f3f3', boxShadow:'0px 0px #000000', borderRadius:'0px' }}>
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
                </Card>
            </Box>
        </Container>
    );
};

export default ThreeCard;