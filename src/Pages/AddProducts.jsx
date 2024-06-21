
  

import Swal from 'sweetalert2';

const AddProducts = () => {
  const handleSubmit = async (e) => {
    const token=localStorage.getItem('token');
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const date = form.date.value;
    const location = form.location.value;
    const description = form.description.value;
    const img = form.img.value;
    const organizer = form.organizer.value;

    const data = { title, date, location, description, img, organizer };
    console.log(data);

    // Confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to add this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, add it!',
      cancelButtonText: 'No, cancel!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch("http://localhost:5000/events", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              authorization:`Bearer ${token}`,
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();
          console.log(result);

          // Display success toast
          Swal.fire({
            icon: 'success',
            title: 'Product added successfully',
            showConfirmButton: false,
            timer: 1500,
            toast: true,
            position: 'top-end'
          });

          form.reset();
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);

          // Display error alert
          Swal.fire({
            title: 'Error!',
            text: 'There was a problem adding the product',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Add a Event</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Event Title"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="date"
              placeholder="date"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="organizer"
              placeholder="organizer"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="location"
              placeholder="location"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="img"
              placeholder="img"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="description"
            />
          </div>
         
        
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
