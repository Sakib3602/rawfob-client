import { useContext} from "react";
import { AuthContext } from "../../AuthHere/AuthProvider";
import useAxiosPublic from "../../../useAxiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loader from "../../Loader";
import toast, { Toaster } from "react-hot-toast";

const MyPosts = () => {
  const { person } = useContext(AuthContext);
 
 

  const axiosPublic = useAxiosPublic();

  const getPostData = async () => {
    const res = await axiosPublic.get(`/postss/${person?.email}`);
    return res.data;
  };

  const {
    data: tableData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tabledata", person?.email],
    queryFn: getPostData,
  });

//   for delete
const mutationDlt = useMutation({
    mutationFn : async(id)=>{
        const res = await axiosPublic.delete(`/posts/${id}`)
        return res.data;
    },
    onSuccess : ()=>{
        refetch()
        toast.success("Post Done Perfectly.")
    }
})

function handleDelete(id){
    console.log(id)
    mutationDlt.mutate(id)

}






  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
          <Toaster />
            <tr>
              <th></th>
              <th>Title</th>
              <th>Up Vote</th>
              <th>Down Vote</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
                tableData.map((table,i) =>  <tr key={table._id} className="hover">
                <th>{i+1}</th>
                <td>{table.post_title}</td>
                <td>{table?.upvote}</td>
                <td>{table?.downvote}</td>
                
                <td>
                  <button className="btn btn-xs btn-outline">Comments</button>
                </td>
                <td>
                  <button onClick={()=>handleDelete(table?._id)} className="btn btn-circle btn-outline">
                   
                 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>)
            }
           
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPosts;
