"use client"

import Link from "next/link";
import logo from "@/assets/ancova.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()


  return (
    <div className="bg-base-100 shadow-md ">
      <div className="navbar  max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href={"/"}>
            <Image src={logo} width={100} height={100} alt="logo"></Image>
          </Link>
        </div>


        <div className=" hidden navbar-end  lg:flex">
          <div className="dropdown dropdown-hover mr-5">
            <div
              tabIndex={0}
              role=""
              className=" cursor-pointer flex items-center gap-2 m-1"
            >
              Services <IoIosArrowDown />{" "}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/services/softwareDevelopment"}>
                  Software Development
                </Link>
              </li>
              <li>
                <Link href={"/services/webApplication"}>Web Application</Link>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <ul className=" space-x-8 menu-horizontal px-1">
            <li>
              <Link className={` ${pathname === '/projects' ? '"relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2'}`} href="/projects">Projects</Link>
            </li>
            <li>
              <Link className={` ${pathname === '/teamMember' ? '"relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2'}`} href="/teamMember">Team</Link>
            </li>
            <li>
              <Link className={` ${pathname === '/teamMember' ? '"relative border-b-2 border-amber-500 inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-black hover:text-gray-800 group font-semibold pt-2 px-2'}`} href="/teamMember">Contact </Link>
            </li>

            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Career</a>
            </li>
            <li>
              <a>Career</a>
            </li>
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
