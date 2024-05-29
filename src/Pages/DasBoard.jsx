import useAuth from "../Hooks/useAuth";

const DasBoard = () => {
    const {user}=useAuth();
    console.log(user);
    // const {displayName,email,photoURL}= user;
    
    return (
        <div className="flex flex-col items-center">
        <h1 className="text-5xl text-center font-bold">{user?.displayName}</h1>
        <h3 className="text-xl font-semibold">Email: {user?.email}</h3>
  
        {/* <img className="h-[600px]" src={photoURL} alt="product image" /> */}
        <div className="avatar">
          <div className=" rounded-full border-2 border-black">
            <img src={user?.photoURL || "/public/placeholder.jpg"} />
          </div>
        </div>
  
   
      </div>
    );
};

export default DasBoard;