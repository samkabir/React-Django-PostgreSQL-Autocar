import { Container } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const GetAQuote = () => {
    return (
        <div>
            <Container>
                <Box sx={{ flexGrow: 1, pt: '30px' }}>
                    <Grid container>
                        <Grid xs={12} md={6}>
                            <h2>This is get a quote</h2>
                        </Grid>
                        <Grid xs={6} md={6}>
                            <h2>this is the image part</h2>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default GetAQuote;