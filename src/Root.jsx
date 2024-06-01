import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="w-[95%] md:w-[80%] lg:w-[80%] m-auto">

            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;