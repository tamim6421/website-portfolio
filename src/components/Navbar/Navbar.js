import Link from "next/link";
import logo from "@/assets/ancova.png"
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-md ">
    <div className="navbar  max-w-[1200px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className=" text-xl">
      <Image src={logo} width={100} height={100} alt="logo"></Image>
    </a>
  </div>
  <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Services</a></li>
      <li><a>Projects</a></li>
      <li><a>Experience</a></li>
      <li><a>Career</a></li>
      <li><a>Blog</a></li>
      <li><a>Contact Us</a></li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
   */}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
    </div>
  );
};

export default Navbar;
