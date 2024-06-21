import { FaFacebook } from "react-icons/fa";
const FacebookLogin = () => {
    return (
        <button className="btn w-full">
        <div className="flex items-center gap-2">
          < FaFacebook className="text-blue-800" size={24} />
          <p>Facebook</p>
        </div>
      </button>
    );
};

export default FacebookLogin;