import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="w-[1200px] mx-auto">
            <Navbar></Navbar>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;