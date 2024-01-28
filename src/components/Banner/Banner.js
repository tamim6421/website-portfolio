import React from 'react';
import banerImage from '../../assets/banner.svg'
import Image from 'next/image';
const Banner = () => {
    return (
        <div>
            <div className='md:flex mt-20 min-h-[90vh] gap-3'>
                <div className='flex-[1] space-y-10'>
                    <p>Offshore Software Development 🙌</p>
                    <p className='text-3xl font-bold text-purple-500'>We Deploy World Class Agile Product Teams on Demand</p>

                    <p>Vivasoft specializes in providing custom software development services. Get premium software solutions from a reliable outsourcing partner and set your business apart. Skilled teams that can design, build, space and scale your vision in the most efficient way.</p>
                </div>
                <div className='flex-[1]'>
                <Image src={banerImage} alt='banner image' width={600} height={700}></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;