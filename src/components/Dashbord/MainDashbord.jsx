import { Link, Outlet } from "react-router-dom";

const MainDashbord = () => {
  return (
    <div className="w-[85%] m-auto  flex">


      <div className="w-[15%] lg:w-[30%] h-[500px] fixed  lg:relative">
        <div className="drawer ">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full  lg:min-h-screen lg:bg-[#1976D2] text-black lg:text-white">
              <div className="flex-none lg:hidden ">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
              <div className="flex-none hidden lg:block">
                <h1 className="text-[60px] font-[700] text-center mt-10">DashBord</h1>
                <div className="divider"></div>
                <ul className="menu menu-vertical space-y-4">
                  {/* Navbar menu content here */}
                  <li>
                   <Link to={'userProfile'}><a className="text-[25px]  font-[500]">My Profile</a></Link>
                  </li>
                  <li>
                   <Link to={'addPosts'}><a className="text-[25px]  font-[500]">Add Posts</a></Link>
                  </li>
                  <li>
                   <Link to={'myPosts'}><a className="text-[25px]  font-[500]">My Posts</a></Link>
                  </li>
                  <div className="divider">OR</div>
                  <li>
                   <Link to={'/'}><a className="text-[25px]  font-[500]">Home</a></Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            {/* Page content here */}
            
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-screen bg-base-200">
              {/* Sidebar content here */}
              <li>
                   <Link to={'userProfile'}><a className="text-[25px]  font-[500]">My Profile</a></Link>
                  </li>
                  <li>
                   <Link to={'addPosts'}><a className="text-[25px]  font-[500]">Add Posts</a></Link>
                  </li>
                  <li>
                   <Link to={'myPosts'}><a className="text-[25px]  font-[500]">My Posts</a></Link>
                  </li>
                  <div className="divider">OR</div>
                  <li>
                   <Link to={'/'}><a className="text-[25px]  font-[500]">Home</a></Link>
                  </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-8 flex-1 mt-14 lg:mt-0">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainDashbord;
