import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex my-10 w-[1200px] mx-auto bg-white">
            <div className="flex-1">
                <img src="https://i.ibb.co/DzjwVLx/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-peopl.jpg" alt="" />
            </div>
            <div className="mt-10 flex-1">
                <h2 className="text-5xl text-center font-bold">Register Now</h2>
                <form className="card-body mt-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-secondary text-white">Register</button>
                        <button className="btn mt-5"><FcGoogle></FcGoogle> Sign up with Google</button>
                    </div>
                </form>
                <p className="text-center">Already have an account? Please <Link to={'/login'}><span className="text-pink-600 font-bold">Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;