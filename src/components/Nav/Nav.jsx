import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../AuthHere/AuthProvider";
const Nav = () => {
  const {logout,person} = useContext(AuthContext)
  console.log(person)

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/memberShip"}>MamberShip</Link>
            </li>
            <li>
              <Link to={"/memberShip"}>MamberShip</Link>
            </li>
            <li>
              <Link to={"/"}>IoNotifications</Link>
            </li>
          </ul>
        </div>
        <a className="font-[700] text-4xl">RAWFOB</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl font-[600]">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-xl font-[600]">
            <Link to={"/memberShip"}>MamberShip</Link>
          </li>
         {
          !person ?  <li className="text-xl font-[600]">
          <Link to={"/login"}>Join Us</Link>
        </li> : ''
         }

          <li className="text-[20px]">
            <Link to={"/"}>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon color="action" />
              </Badge>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div id="clickable" className="w-10">
          <img
            className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
        <Tooltip anchorSelect="#clickable" clickable>
          <Link>
            <button>Name</button>
          </Link>
          <br />
          <Link>
            <button className="mt-2">DashBord</button>
          </Link>
          <br />
          {
            person ? <Link>
            <button className="mt-2" onClick={logout}>Log Out</button>
          </Link> : ''
          }
        </Tooltip>
        <div></div>
      </div>
    </div>
  );
};

export default Nav;
