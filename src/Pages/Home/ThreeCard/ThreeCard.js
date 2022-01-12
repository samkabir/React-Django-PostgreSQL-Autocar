import * as React from 'react';
import styled from "styled-components";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import { Box } from '@mui/system';
import img from '../../../images/pic2.jpg';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const ThreeCard = () => {
    // const title ={
    //     fontSize:15,
    //     fontWeight:900,
    //     color:'grey',
    //     textAlign: 'center'
    // }
    // const shortDes ={
    //     fontSize:25,
    //     fontWeight:900,
    //     textAlign: 'center'
    // }
    // const button ={
    //     color:'orange',
    //     border: '2px solid orange',
    //     borderRadius: '50px',
    //     padding: '10px 20px'
    // }
    return (
        <Container>
            <Wrapper>
                <Cards>
                    <div>
                        <HeadsetMicOutlinedIcon sx={{color:'orange', fontSize: 60,  fontWeight: 'light'}}/>
                    </div>
                    <Title>
                        <h2>
                            CERTIFIED
                        </h2>
                        <p>
                            We are young <br /> talented certified<br /> engineers
                        </p>
                    </Title>
                    <button>Read More</button>
                </Cards>
                <CardSecond>
                    <div>
                        <StackedBarChartOutlinedIcon sx={{color:'orange', fontSize: 60,  fontWeight: 'light'}}/>
                    </div>
                    <Title>
                        <h2 id="white">
                            CERTIFIED
                        </h2>
                        <p id="white">
                            The Death Of CAR And <br /> How To Avoid It
                        </p>
                    </Title>
                    <button>Read More</button>
                </CardSecond>
                <Cards>
                    <div>
                        <EmojiEventsOutlinedIcon sx={{color:'orange', fontSize: 60,  fontWeight: 'light'}}/>
                    </div>
                    <Title>
                        <h2>
                            CERTIFIED
                        </h2>
                        <p>
                            What Can <br /> Instagramm Teach <br /> You About CAR
                        </p>
                    </Title>
                    <button>Read More</button>
                </Cards>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    @media only screen and (max-device-width: 1199px){
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    };
    @media only screen and (min-width: 1200px){
        flex-direction:row;
    };
`;

const CardSecond = styled.div`
    background-image: url("${img}");
    padding: 40px 60px;
    text-align:center;
    background-size: 100% 100% ;
    background-repeat: no-repeat;
    height: auto;

    #white{
        color:white;
    }
    > button{
        padding: 15px 22px;
        margin-top: 20px;
        border: 0px;
        border-radius: 40px;
    };
    @media only screen and (max-device-width: 1199px){
        max-width: 300px; 
        margin: 10px;
        box-shadow:0px 0px #000000; 
        border-radius:0px;
    };
    @media only screen and (min-width: 1200px){
        min-width: 300px;
        min-height: 400px;
        margin-top:-50px;
    };
`;

const Cards = styled.div`
    text-align:center;
    padding: 40px 80px;
    > button{
        padding: 15px 22px;
        margin-top: 20px;
        border: 0px;
        border-radius: 40px;
    };
    @media only screen and (max-device-width: 1199px){
        max-width: 300px; 
        margin: 10px;
        background-color: #f3f3f3;
        box-shadow:0px 0px #000000; 
        border-radius:0px;
    };
    @media only screen and (min-width: 1200px){
        min-width: 300px;
        min-height: 400px;
        margin-top:-50px;
        background-color: #f3f3f3;
    };
`;

const Title = styled.div`
    min-height:250px;
    > h2{
        font-weight:800;
        font-size:13px;
        padding: 20px 0px;
        color: #888;
    }
    > p{
        font-weight:800;
        font-size:25px;
    }
`;

export default ThreeCard;