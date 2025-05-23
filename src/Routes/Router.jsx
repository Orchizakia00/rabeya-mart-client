import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/allProducts',
        element: <AllProducts />
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart /></PrivateRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
]);

export default router;