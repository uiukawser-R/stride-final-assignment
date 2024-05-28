
const AddProducts = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const form = e.target;
      const id = form.id.value;
      const name = form.name.value;
      const seller = form.seller.value;
      const price = form.price.value;
      const category = form.category.value;
      const img = form.img.value;
      const stoke = form.stoke.value;
      const ratings = form.ratings.value;
  
      const data = { id, name, seller, price, category, img,stoke,ratings };
      console.log(data);
  
      await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          form.reset();
        });
    };
  
    return (
      <div>
        <h1 className="text-5xl font-bold text-center">Add a Product</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="seller"
                placeholder="Seller"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="category"
                placeholder="category"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="stoke"
                placeholder="stoke"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="ratings"
                placeholder="ratings"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="img"
                placeholder="Image_Url"
              />
            </div>
            
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-red-500 text-white p-4"
                type="submit"
                value="Add product"
              />
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddProducts;
  