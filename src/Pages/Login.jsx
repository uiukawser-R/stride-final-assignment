import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import GoogleLogin from "../Componentes/GoogleLogin";
import { useEffect } from "react";
import FacebookLogin from "../Componentes/FacebookLogin";

const Login = () => {
    const { signIn,user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    }

    useEffect(() => {
        if (user) {
          navigate(from, { replace: true });
        }
      }, [user, from, navigate]);
    

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input  className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div>
                            <GoogleLogin></GoogleLogin>
                        </div>
                        <div>
                            <FacebookLogin></FacebookLogin>
                        </div>
                    </form>
                    
                    <p><small>New here?    <Link to='/signup'>  Create an account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;