import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Carousel } from 'react-bootstrap';
import ProjectsCarousel from '../../ProjectsCarousel/ProjectsCarousel';
import { Height } from '@mui/icons-material';



const Projects = () => {
    const style1 = {
        backgroundColor: "#2d3239",
        height:"100%"
    }
    const style2 = {
        
        transform: "rotate(-90deg) translateX(-70%)",
        fontSize:"90px",
        display:"flex",
        alignItems:"center",
        color:"#f5f6f6",

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
                            <h2 style={style2}>OUR PROJECT</h2>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Box style={sliderSection}>
                           <ProjectsCarousel></ProjectsCarousel>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Projects;