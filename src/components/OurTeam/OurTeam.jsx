"use client";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className=" py-10 my-20">
       <div className="w-3/5 mx-auto ">
      
      <div className="text-center p-5 ">
        <h1
          className="text-4xl text-[#0e047a] drop-shadow-lg font-bold"
          data-aos="fade-up"
        >
          Meet Your <span className="">Team</span>{" "}
        </h1>
        <hr className=" border-2 w-24 mt-2 border-orange-600 mx-auto" />
        <p className="text-xl" data-aos="fade-down">
          Register and browse professionals, explore projects, or even book a
          consultation.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          1024: {
            slidesPerView: 2,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white shadow-md rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-sm transition-all duration-500">
              <div className="relative  mt-4 overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg"
                  alt="image"
                  width={310}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-900"
                  data-aos="fade-up"
                >
                  Natalie Paisley
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute flex gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  <FaFacebookSquare className="text-2xl text-blue-500 "></FaFacebookSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaTwitterSquare className="text-2xl text-sky-500"></FaTwitterSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaInstagram className="text-2xl text-orange-500"></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white shadow-md rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-sm transition-all duration-500">
              <div className="relative mt-4 overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg"
                  alt="image"
                  width={310}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-900"
                  data-aos="fade-up"
                >
                  Natalie Paisley
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute flex gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  <FaFacebookSquare className="text-2xl text-blue-500 "></FaFacebookSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaTwitterSquare className="text-2xl text-sky-500"></FaTwitterSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaInstagram className="text-2xl text-orange-500"></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white shadow-md rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-sm transition-all duration-500">
              <div className="relative mt-4 overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg"
                  alt="image"
                  width={310}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-900"
                  data-aos="fade-up"
                >
                  Natalie Paisley
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute flex gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  <FaFacebookSquare className="text-2xl text-blue-500 "></FaFacebookSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaTwitterSquare className="text-2xl text-sky-500"></FaTwitterSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaInstagram className="text-2xl text-orange-500"></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white shadow-md rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-sm transition-all duration-500">
              <div className="relative mt-4 overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg"
                  alt="image"
                  width={310}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-900"
                  data-aos="fade-up"
                >
                  Natalie Paisley
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute flex gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  <FaFacebookSquare className="text-2xl text-blue-500 "></FaFacebookSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaTwitterSquare className="text-2xl text-sky-500"></FaTwitterSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaInstagram className="text-2xl text-orange-500"></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white shadow-md rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-sm transition-all duration-500">
              <div className="relative mt-4 overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg"
                  alt="image"
                  width={310}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-900"
                  data-aos="fade-up"
                >
                  Natalie Paisley
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute flex gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  <FaFacebookSquare className="text-2xl text-blue-500 "></FaFacebookSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaTwitterSquare className="text-2xl text-sky-500"></FaTwitterSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaInstagram className="text-2xl text-orange-500"></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white shadow-md rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-sm transition-all duration-500">
              <div className="relative mt-4 overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg"
                  alt="image"
                  width={310}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-900"
                  data-aos="fade-up"
                >
                  Natalie Paisley
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute flex gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  <FaFacebookSquare className="text-2xl text-blue-500 "></FaFacebookSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaTwitterSquare className="text-2xl text-sky-500"></FaTwitterSquare>
                </a>
                <a href="" className="bg-blue-50 p-2 rounded-full">
                  {" "}
                  <FaInstagram className="text-2xl text-orange-500"></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>

     
    </div>
    </div>
   
  );
};

export default OurTeam;
