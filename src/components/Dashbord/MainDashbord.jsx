import { Link, Outlet } from "react-router-dom";
import UserDataRole from "../Hooks/UserDataRole";
import { Helmet } from "react-helmet";

const MainDashbord = () => {
  const [data, isloading] = UserDataRole();

  if (data?.role) {
    console.log(data?.role, "role");
  }

  return (
    <div className="w-[85%] m-auto   flex">
      <div className="w-[15%] lg:w-[30%] h-[500px] fixed  lg:relative">
        <div className="drawer ">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content z-10 flex  flex-col">
            {/* Navbar */}
            <div className="w-full  lg:min-h-screen lg:bg-black text-black lg:text-white">
              <div className="flex-none lg:hidden ">
              <Helmet>
                
                <title>RawFow | DashBord !</title>
                <link rel="canonical" href="../../assets/kisspng-logo-portable-network-graphics-image-brand-r-png-sorgusuna-uygun-resimleri-bedava-indir-5d0027f9775ea4.2689206515602913214889.jpg" />
            </Helmet>
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square flex flex-row w-full btn-ghost"
                >
                  <h1 className="text-[30px] font-[700]">RAWFOB</h1>
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
                <h1 className="text-[60px] font-[700] text-center mt-10">
                  DashBord
                </h1>
                <div className="divider"></div>
                <ul className="menu menu-vertical space-y-4">
                  {/* Navbar menu content here */}
                  {data?.role === "guest" ? (
                    <li>
                      <Link to={""}>
                        <a className="text-[25px] uppercase  font-[500]">
                          My Profile
                        </a>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {data?.role === "admin" ? (
                    <li>
                      <Link to={"admin"}>
                        <a className="text-[25px] uppercase  font-[500]">
                          Admin Profile
                        </a>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}

                  {data?.role === "guest" ? (
                    <li>
                      <Link to={"addPosts"}>
                        <a className="text-[25px] uppercase  font-[500]">
                          Add Posts
                        </a>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {data?.role === "admin" ? (
                    <li>
                      <Link to={"ann"}>
                        <a className="text-[25px] uppercase  font-[500]">
                          Make Announcement
                        </a>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {data?.role === "guest" ? (
                    <li>
                      <Link to={"myPosts"}>
                        <a className="text-[25px] uppercase  font-[500]">
                          My Posts
                        </a>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {data?.role === "admin" ? (
                    <li>
                      <Link to={"allann"}>
                        <a className="text-[25px] uppercase  font-[500]">
                          All Announcement
                        </a>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {data?.role === "admin" ? (
                    <li>
                      <Link to={"report"}>
                        <a className="text-[25px] uppercase  font-[500]">
                          reports
                        </a>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                   {data?.role === "admin" ? (
                <li>
                  <Link to={"allUser"}>
                    <a className="text-[25px] uppercase  font-[500]">
                      All Users
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}

                  <div className="divider">OR</div>
                  <li>
                    <Link to={"/"}>
                      <a className="text-[25px]  font-[500]">Home</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/*  */}
            <ul className="menu bg-base-200 p-4 w-80 min-h-screen ">
              {/* Sidebar content here */}
              {data?.role === "guest" ? (
                <li>
                  <Link to={""}>
                    <a className="text-[25px] uppercase  font-[500]">
                      My Profile
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}
              {data?.role === "admin" ? (
                <li>
                  <Link to={"admin"}>
                    <a className="text-[25px] uppercase  font-[500]">
                      Admin Profile
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}

              {data?.role === "guest" ? (
                <li>
                  <Link to={"addPosts"}>
                    <a className="text-[25px] uppercase  font-[500]">
                      Add Posts
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}
              {data?.role === "admin" ? (
                <li>
                  <Link to={"ann"}>
                    <a className="text-[25px] uppercase  font-[500]">
                      Make Announcement
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}
              {data?.role === "guest" ? (
                <li>
                  <Link to={"myPosts"}>
                    <a className="text-[25px] uppercase  font-[500]">
                      My Posts
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}
              {data?.role === "admin" ? (
                <li>
                  <Link to={"allann"}>
                    <a className="text-[25px] uppercase  font-[500]">
                      All Announcement
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}

              {data?.role === "admin" ? (
                <li>
                  <Link to={"allUser"}>
                    <a className="text-[25px] uppercase  font-[500]">
                      All Users
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}
              {data?.role === "admin" ? (
                <li>
                  <Link to={"report"}>
                    <a className="text-[25px] uppercase  font-[500]">reports</a>
                  </Link>
                </li>
              ) : (
                ""
              )}

              <div className="divider">OR</div>
              <li>
                <Link to={"/"}>
                  <a className="text-[25px]  font-[500]">Home</a>
                </Link>
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
