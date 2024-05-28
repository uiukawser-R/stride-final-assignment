/* eslint-disable react/prop-types */
import SingleProducts from "./SingleProducts";

const Products = ({data}) => {
    console.log(data);
    return (
        <div className="flex flex-col items-center">
            <h1 className=" my-8 text-4xl font-bold text-center">Our Products</h1>
            <div className="grid grid-cols-3 gap-4 ">
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