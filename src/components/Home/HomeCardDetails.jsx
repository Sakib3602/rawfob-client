import {  useQuery, useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../useAxiosPublic";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthHere/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";


const HomeCardDetails = () => {
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm()

  const axiosPublic = useAxiosPublic();
  const { person } = useContext(AuthContext);
  const params = useParams();
  // console.log(params.id);
  const { data: postsData = [], isLoading } = useQuery({
    queryKey: ["postsDetails"],
    queryFn: async () => {
      const response = await axiosPublic.get(`/posts/${params.id}`);
      // console.log(response.data, "knhi");
      return response.data;
    },
  });

  // const postCommentMutation = async (commentDetail) => {
  //   const response = await axiosPublic.post('/comments', commentDetail);
  //   return response.data;
  // };
 
  // const mutation = useMutation(postCommentMutation, {
  //   onSuccess: () => {
  //     toast.success("Comment posted successfully!");
  //   }
  // });


  
  const onSubmit = (data) => {
    if (!person) {
      return toast.success("Please Log In first !");
    }

    const commentDetail = {
      email: data.email,
      comment: data.comment,
      title: postsData.post_title

    }; 
    console.log(commentDetail,"comment")

    mutation.mutate(commentDetail);

  





  }

  

  return (
    <div className="w-full lg:w-[80%]  md:w-[80%] m-auto ">
      {isLoading && <p className="text-center text-[50px]">LOading</p>}
      <div className="hero lg:p-14  bg-base-200 mt-6 rounded-xl shadow-2xl border">
        <div className="hero-content flex-col lg:flex-row">
          <Toaster></Toaster>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold">
              {postsData.post_title}
            </h1>
            <p className="py-2">By - {postsData.author_name}</p>
            <p className="py-2">Tag : #{postsData.tag}</p>
            <p className="py-2 text-[16px] lg:text-[20px]">
              {postsData.post_description}
            </p>
            <p className="py-2">
              Post Time : {new Date(postsData.post_time).toLocaleDateString()}
            </p>
            <p className="py-2">upVote : {postsData.upvote}</p>
            <p className="py-2">DownVote : {postsData.upvote}</p>
            <p className="py-2">
              Popularity : {new Date(postsData.post_time).toLocaleDateString()}
            </p>
            <div className="flex flex-col space-x-5  lg:flex-row">
              <button className="btn w-full bg-[#1976D2]  shadow-xl hover:bg-[#1976D2] text-white lg:max-w-[150px]">
                Up Vote
              </button>
              <button className="btn w-full border-b-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]">
                DownVote
              </button>
             
              {/* The button to open modal */}
              <label
                htmlFor="my_modal_7"
                className="btn w-full border-b-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]"
              >
                Comment
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-2xl font-bold text-center">Comment Us Now!</h3>
                  <div className="flex flex-col mt-5">
                    {/* one */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                      
                    <label className="pt-5">Your Email</label>
                    <input {...register("email")} value={person.email} type="text" className="w-full h-[40px] border px-5"   />
                    <label className="mt-5">Your Comment</label>
                    <input {...register("comment")} type="text" placeholder="Type here" className="p-5 w-full h-[100px] border" />
                 
                <input type="submit" className="btn btn-accent text-white"  />
                    </form>
                  </div>
                </div>
              </div>

              <button className="btn w-full border-b-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]">
                Shere Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardDetails;
