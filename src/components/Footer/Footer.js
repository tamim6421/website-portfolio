import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../assets/ancova.png"
// import Style from "./Footer.module.css"

const Footer = () => {
    return (
        // <div className={`${Style.container} `}>
        //     <footer className={`${Style.overly} footer min-h-[50vh] p-10 text-base-content`}>
        <div className="bg-blue-100 text-white">
            <footer className="footer min-h-[50vh] p-10 text-base-content">
  <aside>
    <div className='text-2xl font-bold'>
    <Link href={"/"}>
            <Image src={logo} width={150} height={100} alt="logo"></Image>
          </Link>
    </div>
    <p className='text-sm md:text-lg'>Software Development Data analysis & Research Center.<br/>Providing reliable tech since 2022</p>
  </aside> 
  <nav className="space-y-3 text-lg">
    <h6 className="footer-title font-bold text-xl">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className="space-y-3 text-lg">
    <h6 className="footer-title font-bold text-xl ">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className="space-y-3 text-lg">
    <h6 className="footer-title font-bold text-xl">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<aside className="footer footer-center pb-6 bg-blue-100 text-base-content">
    <p className='font-semibold text-gray-500'>Copyright © 2024 - All right reserved by ANCOVA</p>
  </aside>
        </div>
    );
};

export default Footer;