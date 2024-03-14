import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png"
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {

    const {user} = useAuth();

    const navLinks = <>
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        <NavLink to={'/allProducts'}><li><a>All Products</a></li></NavLink>
        <NavLink to={'/'}><li><a>Categories</a></li></NavLink>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns={logo} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src={logo} className="h-[50px]" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <a className="btn">Logout</a> : <Link to={'/login'}><a className="btn">Login</a></Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;