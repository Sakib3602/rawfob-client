import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader";


const PrivateRoute = ({children}) => {
    const { person , loading} = useContext(AuthContext);
    const location = useLocation();
  
    if(loading) {
      return <Loader></Loader>
      }
  
    if (person) {
      return children;
    }
    return <Navigate to={"/login"} state={location.pathname} ></Navigate>;
}

export default PrivateRoute;