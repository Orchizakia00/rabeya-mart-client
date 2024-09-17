/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return <span className="loading loading-spinner min-h-[calc(100vh-150px)] text-orange-600 loading-lg flex justify-center items-center mx-auto my-10"></span>
    }

    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRoute;