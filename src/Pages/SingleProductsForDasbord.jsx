/* eslint-disable no-unused-vars */


/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const SingleProductsForDasbord = ({ event, onDelete }) => {
    const { _id, title, location, date,img } = event;
    console.log(event);

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://stride-final-assignment-server.vercel.app/events/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        onDelete(_id);
                        Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        Swal.fire(
                            'Error!',
                            'There was an error deleting your product.',
                            'error'
                        );
                    });
            }
        });
    };

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-4 md:p-6">
            <figure className="w-full">
                <img src={img} alt="Events img" className="w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg md:text-xl font-bold mb-2">{title}</h2>
                <p className="text-sm mb-1">Title: {title}</p>
                <p className="text-sm mb-1">Date: {date}</p>
                <p className="text-sm mb-1">Location: {location}</p>
                <div className="card-actions justify-end">
                    <div className="flex flex-wrap gap-1">
                        <button onClick={handleDelete} className="btn btn-secondary">Delete</button>
                        <button className="btn btn-accent">
                            <Link to={`edit/${_id}`} className="text-white">Edit</Link>
                        </button>
                        <button className="btn btn-primary">
                            <Link to={`/product/${_id}`} className="text-white">Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductsForDasbord;

