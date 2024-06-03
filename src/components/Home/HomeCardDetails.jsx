import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../useAxiosPublic";
import { useParams } from "react-router-dom";

const HomeCardDetails = () => {
    const axiosPublic = useAxiosPublic()
    const params = useParams()
    console.log(params.id)
    const {  data: postsData = [] , isLoading} = useQuery({
        queryKey: ['postsDetails'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/posts/${params.id}`);
            console.log(response.data,'knhi')
            return response.data;  
        }
    });
    
    console.log(postsData);
    
  return (
    <div className="w-full lg:w-[80%]  md:w-[80%] m-auto ">
        {isLoading && <p className="text-center text-[50px]">LOading</p>}
      <div className="hero lg:p-14  bg-base-200 mt-6 rounded-xl shadow-2xl border">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold">{postsData.post_title}</h1>
            <p  className="py-2">By - {postsData.author_name}</p>
            <p className="py-2">Tag : #{postsData.tag}</p>
            <p className="py-2 text-[16px] lg:text-[20px]">
              {postsData.post_description}
            </p>
            <p className="py-2">Post Time : {new Date(postsData.post_time).toLocaleDateString()}</p>
            <p className="py-2">upVote : {postsData.upvote}</p>
            <p className="py-2">DownVote : {postsData.upvote}</p>
            <p className="py-2">Popularity : {new Date(postsData.post_time).toLocaleDateString()}</p>
            <div className="flex flex-col space-x-5  lg:flex-row">
            <button className="btn w-full bg-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]">Up Vote</button>
                <button className="btn w-full border-b-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]">DownVote</button>
                <button className="btn w-full border-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]">Comment</button>
                <button className="btn w-full border-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]">Shere Now</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default HomeCardDetails;
