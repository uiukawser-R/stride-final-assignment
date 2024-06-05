

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
    const products = useLoaderData();

    const [title, setTitle] = useState(products.title);
    const [date, setDete] = useState(products.date);
    const [description, setDescription] = useState(products.description);
    const [location, setLocetion] = useState(products.location);
    const [img, setImg] = useState(products.img);
    const [organizer, setOrganizer] = useState(products.organizer);

    const handleSubmit = async (e) => {
      const token=localStorage.getItem('token');
      e.preventDefault();
  
      const form = e.target;
      const id = form.id.value;
      const title = form.title.value;
      const date = form.date.value;
      const description = form.description.value;
      const location = form.location.value;
      const img = form.img.value;
      const organizer = form.organizer.value;
  
      const data = { id, title, date, description, location, img, organizer };
      
      // SweetAlert2 confirmation dialog
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to proceed with editing the product?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, proceed!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://stride-final-assignment-server.vercel.app/events/${products._id}`, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
              authorization:`Bearer ${token}`,
            },
            body: JSON.stringify(data),
          })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire(
              'Updated!',
              'The product has been updated.',
              'success'
            );
            console.log(data);
          })
          .catch((error) => {
            Swal.fire(
              'Error!',
              'There was an error updating the product.',
              'error'
            );
            console.error(error);
          });
        }
      });
    };
  
    return (
      <div>
        <h1 className="text-5xl font-bold text-center">Edit Event</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="date"
                placeholder="date"
                value={date}
                onChange={(e) => setDete(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="description"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="location"
                placeholder="location"
                value={location}
                onChange={(e) => setLocetion(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="organizer"               placeholder="organizer"
                value={organizer} onChange={(e) => setOrganizer(e.target.value)}
              />
            </div>
          
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="img"
                placeholder="Image_Url"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            
         
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-red-500 text-white p-4"
                type="submit"
                value="Edit Event"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default Edit;
