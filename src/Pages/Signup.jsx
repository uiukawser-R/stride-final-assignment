import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import GoogleLogin from "../Componentes/GoogleLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Signup = () => {
    const { register, handleSubmit } = useForm();
    const {createUser,user}=useAuth();

    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location?.state?.from?.pathname || "/";



    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email,data.password)
        .then(result=>{
             if (result?.user?.email) {
        const userInfo = {
          email: result.user.email,
          name: data.name,
          photoURL: data.photoURL,
        };
        fetch("https://stride-final-assignment-server.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }).then(res=>res.json())
        .then(data=>console.log(data))
      }
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
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name")} name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" {...register("photoURL")} name="photoURL" placeholder="photoURL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password")} name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="SingUp" />
              </div>
              <div>
                <GoogleLogin></GoogleLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signup;