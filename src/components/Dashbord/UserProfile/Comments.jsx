import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../useAxiosPublic";
import Loader from "../../Loader";
import { useState } from "react";
import TableRow from "./TableRow";

const Comments = () => {
  const params = useParams();
  console.log(params.title);
  const axiosPublic = useAxiosPublic();

  const { data : dataa = [], isLoading } = useQuery({
    queryKey: ["commentsData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments/${params.title}`);
      return res.data;
    },
  });
  console.log(dataa, "comment data");



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
            
              <th>Name</th>
              <th>Comment</th>
              <th>FeedBack</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {dataa.map((t) => (
             <TableRow key={t?._id}  t={t}></TableRow>
            ))}
          </tbody>
        </table>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
      </div>
    </div>
  );
};

export default Comments;
