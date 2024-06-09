import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import imageblack from '../../assets/blackandwhite.png'

import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../AuthHere/AuthProvider";
import useAxiosSecure from "../../../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
const Nav = () => {
  const {logout,person} = useContext(AuthContext)
  // console.log(person.photoURL,"url")
  const navigate = useNavigate()


  
  const axiosSecure = useAxiosSecure()

  function handleLogout(){
    logout()
    .then(()=>{
    toast.success("loged Out." )
      navigate('/')
    })
  }
  


  const {data: totalAll = []} = useQuery({
    queryKey : ["userTotalData",],
    queryFn : async()=>{
      const res = await axiosSecure.get('/admin-stats')
      return res.data;
    }
  })

  console.log(totalAll.totalAnouncement)

  return (
    <div className="navbar bg-base-100">
      <Toaster></Toaster>
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
             <li className="text-xl font-[600]">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-xl font-[600]">
            <Link to={"/mambership"}>MamberShip</Link>
          </li>
         {
          !person ?  <li className="text-xl font-[600]">
          <Link to={"/login"}>Join Us</Link>
        </li> : ' '
         }

          <li className="text-[20px]">
            <Link to={"/"}>
              <Badge badgeContent={totalAll?.totalAnouncement} color="primary">
                <NotificationsIcon color="action" />
              </Badge>
            </Link>
          </li>
            
          </ul>
        </div>

        <Link to={"/"}> <a className="font-[700] text-4xl cursor-pointer">RAWFOB</a></Link>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl font-[600]">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-xl font-[600]">
            <Link to={"/mambership"}>MamberShip</Link>
          </li>
         {
          !person ?  <li className="text-xl font-[600]">
          <Link to={"/login"}>Join Us</Link>
        </li> : ''
         }

          <li className="text-[20px]">
            <Link to={"/"}>
              <Badge badgeContent={totalAll?.totalAnouncement} color="primary">
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
            src={person?.photoURL ? person?.photoURL : imageblack}
          />
        </div>
        <Tooltip anchorSelect="#clickable" clickable>
          {
            person && <Link>
            <button className="font-[600]">{person?.displayName }</button>
          </Link>
          }
          
          <br />

          {
            !person && <Link to={"/login"}>
            <button className="mt-2">Log IN</button>
          </Link>
          }
          {
            person && <Link to={"dashbord"}>
            <button className="mt-2">DashBord</button>
          </Link>
          }
          
          <br />
          {
            person ? <Link>
            <button className="mt-2" onClick={handleLogout}>Log Out</button>
          </Link> : ''
          }
        </Tooltip>
        <div></div>
      </div>
    </div>
  );
};

export default Nav;
