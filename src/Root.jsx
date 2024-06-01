import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const Root = () => {
    return (
        <div className="w-[95%] md:w-[80%] lg:w-[80%] m-auto">
            <Nav></Nav>

            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;