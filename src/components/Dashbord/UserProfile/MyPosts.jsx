import { useContext } from "react";
import { AuthContext } from "../../AuthHere/AuthProvider";
import useAxiosPublic from "../../../useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader";

const MyPosts = () => {
  const { person } = useContext(AuthContext);
  console.log(person.email)

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

  console.log(tableData, "table data");

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
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
                tableData.map(table =>  <tr key={table._id} className="hover">
                <th>1</th>
                <td>Quality Control Specialist</td>
                <td>20</td>
                <td>30</td>
                <td>
                  <button className="btn btn-xs btn-outline">Comments</button>
                </td>
                <td>
                  <button className="btn btn-circle btn-outline">
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
