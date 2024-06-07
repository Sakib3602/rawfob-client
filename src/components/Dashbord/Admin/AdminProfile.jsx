import { useContext } from "react";
import { AuthContext } from "../../AuthHere/AuthProvider";
import UserDataRole from "../../Hooks/UserDataRole";

import Loader from "../../Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../useAxiosSecure";
import Chart from "./Chart";

const AdminProfile = () => {
  const { person } = useContext(AuthContext);
  const [data, isLoading] = UserDataRole();
  const axiosSecure = useAxiosSecure()
  console.log(data);


  const {data: totalAll = []} = useQuery({
    queryKey : ["userTotalData",],
    queryFn : async()=>{
      const res = await axiosSecure.get('/admin-stats')
      return res.data;
    }
  })








  if(isLoading){
    return <Loader></Loader>
  }
  return (
    <>
    <div className="flex flex-col space-y-4 md:flex-row lg:flex-row md:space-x-4 lg:space-x-4">
      <div className=" lg:w-[50%] space-y-4  bg-[#FFFFFF] p-5 rounded-lg shadow-xl">
        <h1 className="text-[20px]">
          Welcome,{" "}
          <span className="text-[35px]"> {person.displayName}</span>{" "}
        </h1>

        <div className="w-[50%] h-[200px] m-auto">
          <img
            className="w-full h-[100%] lg:w-[100%] md:w-[100%] mt-4 m-auto md:h-full lg:h-full rounded-full"
            src={person?.photoURL}
            alt=""
          />
        </div>
        <h1 className="text-center uppercase font-[700] text-[18px]">{data?.role}</h1>
        <h1 className="text-center">Mail : {data?.email}</h1>
      </div>

      <div>
        <div className="stats w-full stats-vertical shadow-xl">
          <div className="stat">
            <div className="stat-title">Total User</div>
            <div className="stat-value ">{totalAll.totalUsers}</div>
            
          </div>

          <div className="stat">
            <div className="stat-title">Total Post</div>
            <div className="stat-value">{totalAll.totalPosts}</div>
           
          </div>

          <div className="stat">
            <div className="stat-title">Total Comments</div>
            <div className="stat-value">{totalAll.totalComments}</div>
           
          </div>
        </div>
      </div>
    </div>
    <div className=" h-[200px]">
      <Chart></Chart>

    </div>
    </>
  );
};

export default AdminProfile;
