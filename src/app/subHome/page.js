import React from 'react';
import AboutUs from '../aboutUs/page';
import Banner from '@/components/Banner/Banner';
import OurWorks from '@/components/OurWorks/OurWorks';
import Services from '@/components/OurWorks/Services';



const SubHome = () => {
    return (
        <div>
             <Banner></Banner>
            <OurWorks></OurWorks>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default SubHome;