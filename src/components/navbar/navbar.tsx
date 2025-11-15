import NavItems from "../navbar/navItem";
import Logo from "../../../public/images/Icon.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-orange-700 via-slate-900 to-black shadow-sm px-2">
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
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <div>
                <NavItems />
              </div>
            </ul>
          </div>
          <div className="pl-15 flex">
            <Image
              src={Logo}
              alt="Building"
              width={10}
              height={10}
              className="w-7 h-7 object-contain"
            />

            <p className="pl-2 text-xl font-bold whitespace-nowrap"> Hendles Builders</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div>
              <NavItems />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
