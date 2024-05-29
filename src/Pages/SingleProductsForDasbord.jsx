/* eslint-disable no-unused-vars */


/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const SingleProductsForDasbord = ({ shoe, onDelete }) => {
    const { id, name, price, ratings, seller, img } = shoe;

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
                fetch(`http://localhost:3000/product/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        onDelete(id);
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
                <img src={img} alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg md:text-xl font-bold mb-2">{name}</h2>
                <p className="text-sm mb-1">Seller: {seller}</p>
                <p className="text-sm mb-1">Price: {price}</p>
                <p className="text-sm mb-1">Rating: {ratings}</p>
                <div className="card-actions justify-end">
                    <div className="flex flex-wrap gap-1">
                        <button onClick={handleDelete} className="btn btn-secondary">Delete</button>
                        <button className="btn btn-accent">
                            <Link to={`edit/${id}`} className="text-white">Edit</Link>
                        </button>
                        <button className="btn btn-primary">
                            <Link to={`/product/${id}`} className="text-white">Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductsForDasbord;

