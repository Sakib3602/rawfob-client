import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthHere/AuthProvider";
import useAxiosPublic from "../../useAxiosPublic";


const UserDataRole = () => {
    const {person} = useContext(AuthContext)
    const axoisPublic = useAxiosPublic()
    console.log("")
  
    const {data,isLoading} = useQuery({
        queryKey : ["userSingleData",person?.email],
        queryFn : async()=>{
            const res = await axoisPublic.get(`/userData/${person.email}`)

            return res.data


        }
    })
    console.log(data,"array data")
    return [data,isLoading]
};

export default UserDataRole;