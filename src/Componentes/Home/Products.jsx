

/* eslint-disable react/prop-types */
import SingleProducts from "./SingleProducts";

const Products = ({ data }) => {
    console.log(data);
    return (
        <div className="flex flex-col items-center">
            <h1 className="my-8 text-4xl font-bold text-center">Our Events</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {
                    // eslint-disable-next-line react/prop-types
                    data.slice(0, 9).map((shoe) => (
                        <SingleProducts key={shoe.id} shoe={shoe} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;
