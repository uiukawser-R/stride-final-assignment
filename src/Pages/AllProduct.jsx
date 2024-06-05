import { useEffect, useState } from "react";
import SingleProductsForDasbord from "./SingleProductsForDasbord";

const AllProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://stride-final-assignment-server-j2tm.vercel.app/events")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product._id !== id));
      };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-4">All Products ({products.length})</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {
          // eslint-disable-next-line react/prop-types
          products.map((shoe) => (
            <SingleProductsForDasbord key={shoe._id} shoe={shoe} onDelete={handleDeleteProduct} />
          ))
        }
            </div>
        </div>
    );
};

export default AllProduct;