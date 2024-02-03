import React from 'react';
import banerImage from '../../assets/banner2.svg'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='max-w-[1250px] mx-auto p-4'>
            <div className='md:flex mt-20  gap-5'>
                <div className='flex-[1] space-y-10'>
                    <p className='text-xl font-semibold text-gray-400 drop-shadow-md'>Offshore Software Development 🙌</p>
                    <p className='text-3xl md:text-4xl font-bold text-[#0e047a] drop-shadow-md'>We Deploy World Class Agile Product Teams on Demand</p>

                    <p className='text-gray-500 '>Ancova specializes in providing custom software development services. Get premium software solutions from a reliable outsourcing partner and set your business apart. Skilled teams that can design, build, space and scale your vision in the most efficient way.</p>


                        {/* counter section */}
                    <div className='flex mt-5 gap-4'>
                        <div>
                           <p className='text-3xl md:text-4xl font-bold text-[#3747c1]'>4  <span className='font-semibold text-[#0e047a]'>+</span>  </p> 
                           <p className='text-gray-500'>Years Of Experience</p> 
                        </div>
                        <div>
                           <p  className='text-3xl md:text-4xl font-bold text-[#3747c1]'>20  <span className='font-semibold text-[#0e047a]'>+</span>  </p> 
                           <p className='text-gray-500'>Dedicated Engineers</p> 
                        </div>
                        <div>
                           <p className='text-3xl md:text-4xl font-bold text-[#3747c1]'>18  <span className='font-semibold text-[#0e047a]'>+</span> </p> 
                           <p className='text-gray-500'>Successful Projects</p> 
                        </div>
                    </div>
                </div>

                {/* image  */}
                <div className='flex-[1] mt-5'>
                <Image src={banerImage} alt='banner image' width={500} height={500}></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;