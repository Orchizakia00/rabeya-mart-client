import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const axios = useAxiosPublic();

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            name,
            email,
            password
        }
        console.log(user);

        // password validation
        // if (password.length < 6) {
        //     toast.error('Password should be at least 6 characters or longer!');
        //     return;
        // }
        // else if (!(/[A-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password))) {
        //     toast.error('Your password should have at least one uppercase letter and a special character.');
        //     return;
        // }

        createUser(email, password)
                        .then(result => {
                            const loggedUser = result.user;
                            console.log(loggedUser);
                            updateUserProfile(user.name)
                                .then(() => {
                                    console.log('user profile updated successfully');
                                    const userInfo = {
                                        name: user.name,
                                        email: user.email,
                                    }
                                    axios.post('/users', userInfo)
                                        .then(res => {
                                            console.log(res.data);
                                            if (res.data.insertedId) {
                                                toast.success('User Created Successfully!')
                                                navigate('/')
                                            }
                                        })
                                })
                        })
            .catch(error => {
                console.error(error);
            });

    }

    return (
        <div className="flex my-10 w-[1200px] mx-auto bg-white">
            <div className="flex-1">
                <img src="https://i.ibb.co/DzjwVLx/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-peopl.jpg" alt="" />
            </div>
            <div className="mt-10 flex-1">
                <h2 className="text-5xl text-center font-bold">Register Now</h2>
                <form onSubmit={handleRegister} className="card-body mt-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary text-white">Register</button>
                        <button className="btn mt-5"><FcGoogle></FcGoogle> Sign up with Google</button>
                    </div>
                </form>
                <p className="text-center mb-4">Already have an account? Please <Link to={'/login'}><span className="text-pink-600 font-bold">Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;