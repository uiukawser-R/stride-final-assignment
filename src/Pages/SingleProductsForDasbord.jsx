/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SingleProductsForDasbord = ({shoe,onDelete}) => {
  const {id,name,price,ratings,seller,img}=shoe;


  const handleDelete =  () => {
    fetch(`http://localhost:3000/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
      });
  };


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
      
      <button onClick={handleDelete} className="btn btn-secondary"> Delete </button>
      <button className="btn btn-accent"> <Link > Edit</Link>  </button>
      <button className="btn btn-primary"> <Link to={`/product/${id}`}> Deatils</Link>  </button>
      
  
      </div>
    </div>
  </div>
</div>
    );
};

export default SingleProductsForDasbord;