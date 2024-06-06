import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../useAxiosPublic";


const Comments = () => {
    const params = useParams()
    console.log(params.title)
    const axiosPublic = useAxiosPublic()


    const {data,} = useQuery({
        queryKey : ['commentsData'],
        queryFn  : async()=>{
            const res = await axiosPublic.get(`/comments/${params.title}`)
            return res.data

        }
    })
    console.log(data,"comment data")




    return (
        <div>
            <h1>COmments</h1>
        </div>
    );
};

export default Comments;