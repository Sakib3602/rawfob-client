import { useContext } from "react";
import { AuthContext } from "../../AuthHere/AuthProvider";
import imageBlack from "../../../assets/blackandwhite.png";
import UserDataRole from "../../Hooks/UserDataRole";
import AdminProfile from "../Admin/AdminProfile";

// import useAxiosPublic from "../../../useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";

const UserProfile = () => {
  const { person } = useContext(AuthContext);


const [data,isLoading] = UserDataRole()
console.log(data, "sinle data");



if(isLoading){
	return <p className="text-[50px]">LOading</p>
}

if(data?.role === 'admin'){
  return <AdminProfile></AdminProfile>
}
  return (
    <div className="m-auto">
		
      <div className="flex flex-col space-y-5 max-w-md p-6 border text-black">
        <img
          src={person?.photoURL ? person?.photoURL : imageBlack}
          alt=""
          className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square"
        />
        <div>
          <h2 className="text-xl font-semibold">{data?.name}</h2>
          <span className="block pb-2 text-sm text-gray-400">
            Role : {data?.role}.
          </span>
          <p>MamBerShip Status : {data?.mamberShip}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
