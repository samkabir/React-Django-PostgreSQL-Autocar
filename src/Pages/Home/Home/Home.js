import React from 'react';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import GetAQuote from '../GetAQuote/GetAQuote';
import Maps from '../Maps/Maps';
import Partners from '../Partners/Partners';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import ThreeCard from '../ThreeCard/ThreeCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ThreeCard></ThreeCard>
            <GetAQuote></GetAQuote>
            <Projects></Projects>
            <Services></Services>
            <Clients></Clients>
            <Partners></Partners>
            <Maps></Maps>
        </div>
    );
};

export default Home;