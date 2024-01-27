import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="w-[1200px] mx-auto">
                <Navbar></Navbar>
                <Outlet />
            </div>
                <Footer />
        </div>
    );
};

export default MainLayout;