// import UserDataRole from "../Hooks/UserDataRole";

import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../useAxiosSecure";
import imageBlack from '../../assets/blackandwhite.png'
import Loader from "../Loader";
import toast from "react-hot-toast";

import UserDataRole from "../Hooks/UserDataRole";

const AllUser = () => {
    const [data,isLoading] = UserDataRole()
    console.log(data,"data")
    const axiosSecure = useAxiosSecure()

     const {data: allUser=[], isLoading : load} = useQuery({
        queryKey: ['userdataForadmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/allUserData",{
                
            })
            return res.data
        }
     })
     console.log(allUser,"all user data")

     function handleAdmin(id){
        console.log(id)
        mutationUp.mutate(id)

     }


     const mutationUp = useMutation({
        mutationFn : async(id)=>{
            const res = await axiosSecure.patch(`/allUserData/${id}`,)
            console.log(res.data)
            return res.data;
        },
        onSuccess: ()=>{
            toast.success("Admin Done.")
        }
     })









     if(load){
        return <Loader></Loader>
     }



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
               Name
              </th>
              <th>email</th>
              <th></th>
          
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
                allUser.map(all => <tr key={all?._id}>
              
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={all?.image ? all?.image : imageBlack}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{all?.name}</div>
                          
                        </div>
                      </div>
                    </td>
                    <td>
                     {all?.email}
                      
                    </td>
                    
                    <th>
                        {
                            all?.role === "admin" ? <button  className="btn bg-blue-500 text-white btn-xs">Admin</button> : <button onClick={()=>handleAdmin(all?._id)} className="btn bg-red-500 text-white btn-xs">Make Admin</button>
                        }
                    
                      
                    </th>
                  </tr>)
            }

            
            
           
           
          </tbody>
          {/* foot */}
         
        </table>
      </div>
    </div>
  );
};

export default AllUser;
