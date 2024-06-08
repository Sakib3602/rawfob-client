import { useContext } from "react";
import { AuthContext } from "../../AuthHere/AuthProvider";
import UserDataRole from "../../Hooks/UserDataRole";
import moment from "moment/moment";
import useAxiosSecure from "../../../../useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

const Announcement = () => {
    const {person} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [data,isLoading] = UserDataRole()
    console.log(data)

    function handleAnn(e){
        e.preventDefault()
        const email = person.email;
        const name = person.displayName;
        const image = person.photoURL;
        const text = e.target.text.value;
        const time = moment().format('MMMM Do, h:mm a');

        const announceData = {
            email,image,text,time,name
        }


        mutationUp.mutate(announceData)

        console.log(announceData)

    }
    
    const mutationUp = useMutation({
        mutationFn : async(announceData)=>{
            const res = await axiosSecure.post("/announcement",announceData)
            return res.data
        },

        onSuccess : ()=>{
            toast.success("Announcement Sent !")
        }

    })




    if(!data?.role === 'admin'){
        return <h1>Sorry This Route Not FOr You!</h1>
        
    }
  return (
    <div>
      <div className="hero min-h-screen ">
        <Toaster></Toaster>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              {" "}
              <span className="text-[26px]">Give</span> Announcement!
            </h1>
            <p className="py-6">
              Make updated with our latest announcements! This section is
              exclusively for admins to share important company news, updates,
              and new product launches.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Lets Announce!
                </h2>
                <form onSubmit={handleAnn} method="post" action="#">
                 
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium text-gray-300"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                      name="email"
                      id="email"
                      type="email"
                      value={person.email}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium text-gray-300"
                      htmlFor="bio"
                    >
                      Bio
                    </label>
                    <textarea
                      className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                      rows={3}
                      name="text"
                      id="bio"
                      defaultValue={""}
                      placeholder="Type.."
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
