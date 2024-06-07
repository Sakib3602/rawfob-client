import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../useAxiosSecure";
import AnCard from "./AnCard";


const Announcement = () => {

    const axiosSecure = useAxiosSecure();
    const { data: anounceData = []} = useQuery({
        queryKey: ["anouncementData"],
        queryFn: async () => {
          const res = await axiosSecure.get("/annData");
          return res.data;
        },
      });
      console.log(anounceData,"announcementdata");

      if(anounceData.length > 0){
        return (
            <div>
                <h1 className="text-[40px] md:text-[60px] lg:text-[60px] text-red-500 text-center border-b-2 font-[700]">Announcement</h1>
    
                <div className="mt-10 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    
    
                {
                    anounceData?.map(an =>  <AnCard key={an?._id} an={an}></AnCard>)
                }
    
               
               
                </div>
                
            </div>
        );
      }












    
};

export default Announcement;