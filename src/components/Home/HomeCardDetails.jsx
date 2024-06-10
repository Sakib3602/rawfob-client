import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../useAxiosPublic";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthHere/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FacebookIcon, FacebookShareButton, FacebookShareCount } from "react-share";
import { Helmet } from "react-helmet";

const HomeCardDetails = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const { person } = useContext(AuthContext);
  const [up,setUp] = useState(false)
  const params = useParams();
  // console.log(params.id);
  const { data: postsData = [], isLoading,refetch } = useQuery({
    queryKey: ["postsDetails",up],
    queryFn: async () => {
      const response = await axiosPublic.get(`/posts/${params.id}?upvote=${up}`);
      // console.log(response.data, "knhi");
      return response.data;
    },
  });

  console.log(postsData,"postData")

  const onSubmit = (data) => {
    if (!person) {
      return toast.success("Please Log In first !");
    }
    if(data.comment.length < 20){
      return toast.success("Please Write Atleast 20 Words!");
    }

    const commentDetail = {
      email: person.email,
      comment: data.comment,
      title: postsData.post_title,
      report: []
    };
    console.log(commentDetail, "comment");

    mutation.mutate(commentDetail);
  };

  
  function voteHandle(){
    if(up){
      toast.success("You can vote Once !")
    }
    else{
      setVote(true)
      mutationUp.mutate();
     
    }
    setUp(true)

  }
  const [vote,setVote] = useState(true)
  console.log(vote)
  function downHandle(){
    if(up){
      toast.success("You can vote Once ! ")
    }
    else{
      mutationUp.mutate();
      setVote(false)
      toast.success("Vote Done!");
      setUp(true)
     
    }
    

  }
  // update upvote
 
  const updateDoc = async ()=>{
    const res = await axiosPublic.put(`/posts/${params.id}?vote=${vote}`)
    return res.data
  }

  const mutationUp = useMutation({
    mutationFn: updateDoc,

    onSuccess: () => {
      // toast.success("Vote Done!");
      refetch()
    },
  })
  // update upvote end

  // post comment

  const postCommentMutation = async (commentDetail) => {
    const res = await axiosPublic.post("/comments", commentDetail);
    return res.data;
  };

  const mutation = useMutation({
    mutationFn: postCommentMutation,
    onSuccess: () => {
      toast.success("Comment Successfull!");
    },
  });

  return (
    <div className="w-full lg:w-[80%]  md:w-[80%] m-auto ">
      {isLoading && <p className="text-center text-[50px]">LOading</p>}
      <div className="hero lg:p-14  bg-base-200 mt-6 rounded-xl shadow-2xl border">
        <div className="hero-content flex-col lg:flex-row">
          <Toaster></Toaster>
          <Helmet>
               
               <title> RAWFOB || Details </title>
               
           </Helmet>
          <img
            src={postsData?.author_image}
            className="md:h-[50%] lg:w-[25%] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold">
              {postsData.post_title}
            </h1>
            <p className="py-2">By - {postsData?.author_name}</p>
            <p className="py-2">Tag : #{postsData?.tag}</p>
            <p className="py-2 text-[16px] lg:text-[20px]">
              {postsData?.post_description}
            </p>
            <p className="py-2">
              Post Time : {new Date(postsData.post_time).toLocaleDateString()}
            </p>
            <p className="py-2">upVote : {postsData.upvote}</p>
            <p className="py-2">DownVote : {postsData.downvote}</p>
        
            <div className="flex flex-col space-x-5  lg:flex-row">
              <button onClick={voteHandle} className="btn w-full bg-[#1976D2]  shadow-xl hover:bg-[#1976D2] text-white lg:max-w-[150px]">
                Up Vote
              </button>
              <button onClick={downHandle} className="btn w-full border-b-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]">
                DownVote
              </button>
              {/* ? */}
              <button
                className="btn w-full border-b-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Comment
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className=" font-[600] text-[#1976D2] border p-2 rounded-xl absolute right-10 top-2">
                      ✕
                    </button>
                  </form>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-2xl font-bold text-center">
                      Comment Us Now!
                    </h3>
                    <label className="pt-5">Your Email</label>
                    <input
                      {...register("email")}
                      value={person.email}
                      type="text"
                      className="w-full h-[40px] border px-5"
                    />
                    <label className="mt-5">Your Comment</label>
                    <input
                      {...register("comment")}
                      type="text"
                      placeholder="Type here"
                      className="p-5 w-full h-[100px] border"
                    />

                    <input
                      type="submit"
                      className="btn btn-accent text-white"
                    />
                  </form>
                </div>
              </dialog>
              {/*  */}

              {/* The button to open modal */}

              {/* Put this part before </body> tag */}

              {/* <button className="btn w-full border-b-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]">
                Shere Now
              </button> */}
              {/*  */}
              <FacebookShareButton url={`http://localhost:5173/homeCardDetails/${params.id}`}>
              <button className="btn w-full border-b-[#1976D2]  shadow-xl hover:bg-[#1976D2] hover:text-white lg:max-w-[150px]">
                Shere Now
              </button>
      </FacebookShareButton>
      <FacebookShareCount url={`http://localhost:5173/homeCardDetails/${params.id}`}>
        {(shareCount) => <span className="myShareCountWrapper">{shareCount || 0}</span>}
      </FacebookShareCount>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardDetails;
