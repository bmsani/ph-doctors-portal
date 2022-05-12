import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Header from '../Shared/Header';
import Services from './Services';
import Tastemoneals from './Tastemoneals';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Tastemoneals></Tastemoneals>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;