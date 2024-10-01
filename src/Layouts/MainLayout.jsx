import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto w-[1200px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;