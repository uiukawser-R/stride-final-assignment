import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  console.log(shoe);
  const { title, date, description, location, img, organizer } = shoe;
  return (
    <div className="flex flex-col items-center bg-lime-200">
      <div className="mt-10 mb-10">
        <h1 className="text-5xl text-center font-bold">{title}</h1>

        <img className="h-[600px]" src={img} alt="event image" />

        <h3 className="text-2xl font-semibold"><span className="text-red-500">Date: {date} $$</span></h3>
        <h3 className="text-xl font-semibold">Location: {location}</h3>
        <h3 className="text-xl font-semibold">Organizer: {organizer}</h3>
        <p className="text-lg font-light">Description: {description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;