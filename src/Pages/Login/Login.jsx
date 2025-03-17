import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import loginAnime from "../../../src/assets/animations/login.json"
import Lottie from "lottie-react";


const Login = () => {
    const { login, setError, signInWithGoogle } = useAuth();
    const axios = useAxiosPublic();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success('Logged In Successfully!');
            })
            .catch(error => {
                setError(error.message);
                toast.error('Invalid Email or Password!!');
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                }
                console.log(userInfo.email);
                if (userInfo.email === 'zakiaislam290@gmail.com') {
                    const adminInfo = {
                        name: result.user.displayName,
                        email: result.user.email,
                        role: 'admin',
                    }
                    axios.post('/users', adminInfo)
                        .then(res => {
                            if (res.data.message === 'user already exist') {
                                toast.success('Logged In Successfully!');
                                navigate('/');
                            } else {
                                toast.success('User Created Successfully!');
                                navigate('/');
                            }
                        })
                }
                else {
                    axios.post('/users', userInfo)
                        .then(res => {
                            if (res.data.message === 'user already exist') {
                                toast.success('Logged In Successfully!');
                                navigate('/');
                            } else {
                                toast.success('User Created Successfully!');
                                navigate('/');
                            }
                        })
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="flex my-10 w-[1200px] mx-auto bg-white">
            <div className="flex-1">
                {/* <img src="https://i.ibb.co/7GdMRPn/sign-page-abstract-concept-illustration-335657-2242.jpg" alt="" /> */}
                <Lottie animationData={loginAnime} loop={true} className="w-[500px] h-[500px] mt-10" />
            </div>
            <div className="mt-10 flex-1">
                <h2 className="text-5xl text-center font-bold">Login Now</h2>
                <form onSubmit={handleLogin} className="card-body mt-12">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary text-white">Login</button>
                        <button onClick={handleGoogleSignIn} className="btn mt-5"><FcGoogle></FcGoogle> Login with Google</button>
                    </div>
                </form>
                <p className="text-center mb-6">Do not have an account? Please <Link to={'/register'}><span className="text-pink-600 font-bold">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;