import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectsCarousel from '../ProjectsCarousel/ProjectsCarousel';
import styled from "styled-components";


const Projects = () => {
    const style1 = {
        backgroundColor: "#2d3239",
        height:"100%"
    }
    const sliderSection={
        backgroundColor: "#2d3239",
    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={2}>
                        <Box style={style1}>
                            <Title>OUR PROJECT</Title>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Box style={sliderSection}>
                            <ProjectsCarousel autoPlay={true} infiniteLoop={true} transitionTime={800}></ProjectsCarousel>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

const Title = styled.h2`
    @media only screen and (max-device-width: 1280px){
        font-size:40px;
        display:flex;
        align-items:center;
        color:#f5f6f6;
    };
    @media only screen and (min-device-width: 1280px){
        transform:rotate(-90deg) translateX(-70%);
        font-size:90px;
        display:flex;
        align-items:center;
        color:#f5f6f6;
    }
`;

export default Projects;