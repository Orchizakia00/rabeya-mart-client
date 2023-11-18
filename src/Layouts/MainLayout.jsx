import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="w-[1200px] mx-auto">
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default MainLayout;