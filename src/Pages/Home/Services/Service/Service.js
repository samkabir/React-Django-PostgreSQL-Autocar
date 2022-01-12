import { Grid } from '@mui/material';
import React from 'react';
import styled from "styled-components";

const Service = ({service}) => {
      const { title, img, description } = service;
      return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
                  <ParentCard>
                        <div>
                              <Image className="img-fluid" src={img} alt="" />
                        </div>
                        <Cards>
                              <h4>{title}</h4>
                              <p>{description}</p>
                              <button>Read More</button>
                        </Cards>
                  </ParentCard>
            </Grid>
      );
};

      const ParentCard = styled.div`
        margin: 10px 20px;
    `;
      const Cards = styled.div`
        background-color: white;
        width: 300px;
        margin: 0px 10px;
        margin-top:-20px;
        padding: 20px;
        > h4 {
            font-size: 20px;
        };
        > p {
            font-size: 15px;
        };
        > button {
            font-size: 14px;
            border: 0px solid;
            display:flex;
            color:#f68220;
            background-color: white;
        };
    `;
      const Image = styled.img`
        position:relative;
        z-index:-1;
        height: 230px;
        width: 350px;
    `;
    

export default Service;