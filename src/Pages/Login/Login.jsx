import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    return (
        <div className="flex my-10 w-[1200px] mx-auto bg-white">
            <div className="flex-1">
                <img src="https://i.ibb.co/7GdMRPn/sign-page-abstract-concept-illustration-335657-2242.jpg" alt="" />
            </div>
            <div className="mt-10 flex-1">
                <h2 className="text-5xl text-center font-bold">Login Now</h2>
                <form className="card-body mt-12">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary text-white">Login</button>
                        <button className="btn mt-5"><FcGoogle></FcGoogle> Login with Google</button>
                    </div>
                </form>
                <p className="text-center">Do not have an account? Please <Link to={'/register'}><span className="text-pink-600 font-bold">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;