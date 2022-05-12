import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Tastemoneals from './Tastemoneals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Tastemoneals></Tastemoneals>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;