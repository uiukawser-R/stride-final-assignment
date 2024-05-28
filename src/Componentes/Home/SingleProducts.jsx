/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SingleProducts = ({shoe}) => {
  const {id,name,price,ratings,seller,img}=shoe;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p> Seller: {seller}</p>
    <p>Prece: {price}</p>
    <p>Rating: {ratings}</p>
    <div className="card-actions justify-end">
      <div className="flex gap-1">
      <button className="btn btn-secondary"> <Link to={`/product/${id}`}> Deatils</Link>  </button>
  
      </div>
    </div>
  </div>
</div>
    );
};

export default SingleProducts;