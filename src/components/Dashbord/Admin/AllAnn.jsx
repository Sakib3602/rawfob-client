import { useMutation, useQuery } from "@tanstack/react-query";
// import UserDataRole from "../../Hooks/UserDataRole";

import useAxiosSecure from "../../../../useAxiosSecure";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const AllAnn = () => {
  // const [data, isloading] = UserDataRole();
  const axiosSecure = useAxiosSecure();
  const [selectedId , setSelectedId] = useState('')

  const { data: anounceData = [], refetch } = useQuery({
    queryKey: ["anouncementData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/annData");
      return res.data;
    },
  });
  console.log(anounceData,"announcementdata");

  const mutatonDlt = useMutation({
    mutationFn : async(id)=>{
      const res = await axiosSecure.delete(`/deleteAnn/${id}`,)
      return res.data;
    },
    onSuccess : ()=>{
      
      toast.success("Deleted.")
      refetch()
     
    }
  })

  

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <Toaster></Toaster>
            <tr>
              <th></th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {anounceData?.map((l, i) => (
              <tr key={l?._id} className="hover">
                <th>{i + 1}</th>
                <td>{l.email}</td>
                <td>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                  
                    className="btn"
                    onClick={() => {
                        setSelectedId(l?.text)
                        document.getElementById("my_modal_5").showModal()
                    }
                      
                    }
                  >
                    Details
                  </button>
                  <Helmet>
                
                <title>Admin | All Announcement!</title>
                <link rel="canonical" href="../../../assets/kisspng-logo-portable-network-graphics-image-brand-r-png-sorgusuna-uygun-resimleri-bedava-indir-5d0027f9775ea4.2689206515602913214889.jpg" />
            </Helmet>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                        <h1>Detail Data : </h1>
                      <h3 className="font-bold text-lg">{
                            selectedId
                        }</h3>
                      <p className="py-4">
                        
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>

                <td>
                  <button onClick={()=>mutatonDlt.mutate(l?._id)} className="btn btn-outline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAnn;
