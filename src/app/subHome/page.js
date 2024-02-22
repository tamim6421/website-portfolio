import React from 'react';
import AboutUs from '../aboutUs/page';
import Banner from '@/components/Banner/Banner';
import OurWorks from '@/components/OurWorks/OurWorks';
import Services from '@/components/OurWorks/Services';
import WebApplication from '@/components/OurWorks/WebApplication';
import OurProject from '@/components/OurProject/OurProject';
import OurTeam from '@/components/OurTeam/OurTeam';
import Faq from '@/components/FAQ/Faq';



const SubHome = () => {
    return (
        <div>
             <Banner></Banner>
            <OurWorks></OurWorks>
            <Services></Services>
            <WebApplication></WebApplication>
            <OurProject></OurProject>
            <OurTeam></OurTeam>
            <Faq></Faq>
            <AboutUs></AboutUs>
        </div>
    );
};

export default SubHome;