import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100 py-4 px-4  shadow-md">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/aboutUs"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/aboutUs"}>Services</Link>
                </li>
                <li>
                  <Link href={"/aboutUs"}>Projects</Link>
                </li>
              </ul>
            </div>
            <Link href={"/"}>
              {" "}
              <p className=" text-2xl font-bold text-purple-500">LOGO</p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg px-1">
              <li>
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link href={"/aboutUs"}>Services</Link>
              </li>
              <li>
                <Link href={"/aboutUs"}>Projects</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-sm bg-purple-500 text-white">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
