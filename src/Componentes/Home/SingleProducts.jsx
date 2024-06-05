


/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleProducts = ({ shoe }) => {
    const { _id, title, organizer, date, location, img } = shoe;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="w-full">
                <img src={img} alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold mb-2">{title}</h2>
                <p className="text-sm mb-2">location: {location}</p>
                <p className="text-sm mb-2">Organizer: {organizer}</p>
                <p className="text-sm mb-2">Date: {date}</p>
                <div className="card-actions justify-end">
                    <div className="flex gap-1">
                        <button className="btn btn-secondary">
                            <Link to={`/product/${_id}`} className="text-white">Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;
