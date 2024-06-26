
import { Link } from "react-router-dom";
import Loader from "../Loader";



const HomeCard = ({postsData,isLoading,handleSortPopularity,asc}) => {
    

    console.log(postsData)


    return (
        <div className="mt-5">

            <h1 className="text-[50px] text-center font-[700] ">Our All Posts</h1>
            <hr className="w-[300px] m-auto border-[3px]"/>

            
        <div><button onClick={handleSortPopularity} className="hover:bg-[#1976D2] border-[#1976D2] border-[2px] text-[#1976D2] font-[400] hover:text-white p-3 bg-slate-00 shadow-xl rounded-xl">Sort By Popularity</button></div>
           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-20 lg:p-20 gap-5">
           {
                isLoading && <div className=""><Loader></Loader></div>
            }

           {
                postsData?.map(x => <Link key={x._id} to={`/homeCardDetails/${x._id}`}>
                <div  className="max-w-md hover:bg-[#1976D2]  rounded-xl hover:text-white p-8 sm:flex sm:space-x-6 border text-black">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={x?.author_image} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{x.author_name}</h2>
                        <span className="text-sm hover:text-white text-gray-400">Tags : #{x.tag}</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                          
                            <span className="text-black font-[600] text-xl">{x.post_title}</span>
                        </span>
                       
                        <span className="flex items-center space-x-2">
                            
                            <span className="text-gray-400 hover:text-white">Popularity : {x.popularity}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            
                            <span className="text-gray-400 hover:text-white">Time : {x.post_time}</span>
                        </span>
                    </div>
                </div>
            </div>
                </Link>)
            }
           </div>
           
        </div>
    );
};

export default HomeCard;