




import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {

    const {user,logOut}=useAuth();
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }

 

  return (
    <div className="navbar bg-blue-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            
               
                <li>
                  <Link to={"/signup"}>SignUp</Link>
                </li>
            
            
              <li>
                <Link to={"/dasboard/dashboard"}>Dashboard</Link>
              </li>
              {
                user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                </>: <>
                <li>
                <Link to={"/login"}>Login</Link>
              </li>
                </>
              }
           
           
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"> <span className="font-bold text-5xl text-blue-600">E</span> <span>V</span><span>E</span><span >N</span > T</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
             
              <li>
                <Link to={"/signup"}>Signup</Link>
              </li>
              <li>
                <Link to={"/dasboard/dashboard"}>Dashboard</Link>
              </li>

              {
                user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                </>: <>
                <li>
                <Link to={"/login"}>Login</Link>
              </li>
                </>
              }
          
        </ul>
      </div>
      <div className="navbar-end space-x-2">
      
        
      </div>
    </div>
  );
};

export default Navbar;


