import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Home/Footer";

const Root = () => {
    return (
        <>
         <div className="w-[95%] md:w-[80%] lg:w-[80%] m-auto">
            <Nav></Nav>

            <Outlet></Outlet>

           
            
        </div>
        <Footer></Footer>
        </>
       
    );
};

export default Root;