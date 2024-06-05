import { useContext } from "react";
import { AuthContext } from "../../AuthHere/AuthProvider";


const UserProfile = () => {

	const {person} = useContext(AuthContext)

	console.log(person,"person")




    return (
        <div className="m-auto">
            <div className="flex flex-col max-w-md p-6 border text-black">
	<img src={person?.photoURL} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square" />
	<div>
		<h2 className="text-xl font-semibold">{person?.displayName}</h2>
		<span className="block pb-2 text-sm text-gray-400">CTO of Company Inc.</span>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
	</div>
</div>
        </div>
    );
};

export default UserProfile;