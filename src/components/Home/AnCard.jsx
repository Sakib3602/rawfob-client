import { useContext } from "react";
import { AuthContext } from "../AuthHere/AuthProvider";

const AnCard = ({an}) => {
    const {person} = useContext(AuthContext)
    console.log(an)


  return (
    <div>
        
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-slate-50 text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={an?.image}
                alt=""
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold text-black">{an?.name}</h4>
              <span className="text-xs text-gray-400">{an?.time}</span>
            </div>
          </div>
          
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-400">
          <p className="flex-1">
           {an?.text}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AnCard;
