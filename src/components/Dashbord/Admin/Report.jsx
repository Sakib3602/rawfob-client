import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../useAxiosSecure";
import { useState } from "react";
import Loader from "../../Loader";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Report = () => {
  const axiosSecure = useAxiosSecure();

  const [reportCol, setReportCol] = useState([]);
  const { data , isLoading , refetch} = useQuery({
    queryKey: ["allreportdata"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allreport");
      return res.data;
    },
  });
  console.log(data, "data from Report comp.");
  console.log(reportCol, "dreport from Report comp.");

  function handleDeleteComment(id){
    console.log(id)
    mutationCmt.mutate(id)
  }


//   delete comment 
const mutationCmt = useMutation({
    mutationFn : async(id)=>{
        const res = await axiosSecure.delete(`/deleteCmt/${id}`)
        return res.data
    },
    onSuccess : ()=>{
        refetch()
        toast.success("Deleted The Comment.")
    }
})




  if(isLoading){
    return <Loader></Loader>
  }

  return (
    <div>
      <h1 className="text-[30px] md:text-[40px] lg:text-[40px] font-[700]">
        ALL REPORTED COMMENTS.
      </h1>
      <hr />
      <Helmet>
                
                <title>Admin | All Reports!</title>
                <link rel="canonical" href="../../../assets/kisspng-logo-portable-network-graphics-image-brand-r-png-sorgusuna-uygun-resimleri-bedava-indir-5d0027f9775ea4.2689206515602913214889.jpg" />
            </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Post Owner</th>
              <th>Feedback</th>
              <th></th>
             
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data?.map((d,i) => (
              <tr key={d._id} className="bg-base-200">
                <th>{i+1}</th>
                <td>{d?.email}</td>
                <td>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    onClick={ () =>{
                        setReportCol(d?.report)

                        document.getElementById("my_modal_2").showModal()
                    }
                        
                    }
                    className="text-xl"
                  >
                    <span className="badge badge-lg bg-blue-500 text-white p-5">
                      Reports
                    </span>
                  </button>

                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">FeedBack!</h3>
                      <p className="py-4">

                        {
                            reportCol.length === 0 && <p>No FeedBacks</p>
                        }

                        { reportCol?.map((re, i) => (
                          <h1 key={i}>{i+1} {re} <br /></h1>
                        ))}
                      </p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </td>
                <td>
                  <h2 onClick={()=>handleDeleteComment(d?._id)} className="text-xl cursor-pointer">
                    <span className="badge badge-lg bg-red-500 text-white p-5">
                      Delete Comment
                    </span>
                  </h2>
                </td>
               
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
