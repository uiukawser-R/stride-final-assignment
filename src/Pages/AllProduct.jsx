import { useEffect, useState } from "react";
import SingleProductsForDasbord from "./SingleProductsForDasbord";

const AllProduct = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/events")
        .then((res) => res.json())
        .then((data) => setEvents(data));
    }, []);

    const handleDeleteProduct = (id) => {
      setEvents(events.filter((product) => product._id !== id));
      };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-4">All Events ({events.length})</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {
          // eslint-disable-next-line react/prop-types
          events.map((event) => (
            <SingleProductsForDasbord key={event._id} event={event} onDelete={handleDeleteProduct} />
          ))
        }
            </div>
        </div>
    );
};

export default AllProduct;