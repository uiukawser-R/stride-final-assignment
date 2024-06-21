/* eslint-disable no-unused-vars */
// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";

// export default function EditProfile() {
//   const data = useLoaderData();
//   const [passwordMessage, setPasswordMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const token=localStorage.getItem('token');

//     const form = e.target;
//     const name = form.name.value;
//     const age = form.age.value;
//     const mobileNumber = form.mobileNumber.value;
//     const photoURL = form.photoURL.value;

//     const userData = {
//       name,
//       age,
//       mobileNumber,
//       photoURL
//     };

//     fetch(`http://localhost:5000/users/${data?.email}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         authorization:`Bearer ${token}`,
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   };

//   const handlePasswordChange = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const currentPassword = form.currentPassword.value;
//     const newPassword = form.newPassword.value;

//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (user && user.email) {
//       const credential = EmailAuthProvider.credential(user.email, currentPassword);

//       reauthenticateWithCredential(user, credential)
//         .then(() => {
//           updatePassword(user, newPassword)
//             .then(() => {
//               setPasswordMessage("Password updated successfully!");
//             })
//             .catch((error) => {
//               setPasswordMessage(`Error: ${error.message}`);
//             });
//         })
//         .catch((error) => {
//           setPasswordMessage(`Reauthentication failed: ${error.message}`);
//         });
//     } else {
//       setPasswordMessage("No user is signed in.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl mb-7 font-bold text-center">Edit Profile</h1>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
//         <div className="flex flex-col">
//           <label htmlFor="name" className="text-sm font-medium text-gray-700">User Name</label>
//           <input
//             type="text"
//             name="name"
//             defaultValue={data?.name}
//             className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="email" className="text-sm font-medium text-gray-700">User Email</label>
//           <input
//             type="text"
//             value={data?.email}
//             disabled
//             name="email"
//             className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-gray-100"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="age" className="text-sm font-medium text-gray-700">User Age</label>
//           <input
//             type="text"
//             name="age"
//             defaultValue={data?.age}
//             className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="mobileNumber" className="text-sm font-medium text-gray-700">User Mobile</label>
//           <input
//             type="text"
//             name="mobileNumber"
//             defaultValue={data?.mobileNumber}
//             className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="photoURL" className="text-sm font-medium text-gray-700">Photo URL</label>
//           <input
//             type="text"
//             name="photoURL"
//             defaultValue={data?.photoURL}
//             className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
//           />
//         </div>
//         <div className="flex flex-col mt-4">
//           <button
//             type="submit"
//             className="py-2 px-4 bg-sky-500 text-black rounded-md shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
//           >
//             Update Profile
//           </button>
//         </div>
//       </form>

//       <h2 className="text-2xl my-7 font-bold text-center">Change Password</h2>
//       <form onSubmit={handlePasswordChange} className="flex flex-col gap-y-5">
//         <div className="flex flex-col">
//           <label htmlFor="currentPassword" className="text-sm font-medium text-gray-700">Current Password</label>
//           <input
//             type="password"
//             name="currentPassword"
//             className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
//             required
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">New Password</label>
//           <input
//             type="password"
//             name="newPassword"
//             className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
//             required
//           />
//         </div>
//         <div className="flex flex-col mt-4">
//           <button
//             type="submit"
//             className="py-2 px-4 bg-sky-500 text-black rounded-md shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
//           >
//             Change Password
//           </button>
//         </div>
//       </form>
//       {passwordMessage && (
//         <p className={`mt-4 text-center ${passwordMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
//           {passwordMessage}
//         </p>
//       )}
//     </div>
//   );
// }




import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";
import Swal from 'sweetalert2';

export default function EditProfile() {
  const data = useLoaderData();
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;
    const photoURL = form.photoURL.value;

    const userData = {
      name,
      age,
      mobileNumber,
      photoURL
    };

    fetch(`http://localhost:5000/users/${data?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Profile Updated',
          text: 'Your profile has been updated successfully!',
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: `Error: ${error.message}`,
        });
      });
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    const form = e.target;
    const currentPassword = form.currentPassword.value;
    const newPassword = form.newPassword.value;

    const auth = getAuth();
    const user = auth.currentUser;

    if (user && user.email) {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);

      reauthenticateWithCredential(user, credential)
        .then(() => {
          updatePassword(user, newPassword)
            .then(() => {
              setPasswordMessage("Password updated successfully!");
              Swal.fire({
                icon: 'success',
                title: 'Password Changed',
                text: 'Your password has been updated successfully!',
              });
            })
            .catch((error) => {
              setPasswordMessage(`Error: ${error.message}`);
              Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: `Error: ${error.message}`,
              });
            });
        })
        .catch((error) => {
          setPasswordMessage(`Reauthentication failed: ${error.message}`);
          Swal.fire({
            icon: 'error',
            title: 'Reauthentication Failed',
            text: `Error: ${error.message}`,
          });
        });
    } else {
      setPasswordMessage("No user is signed in.");
      Swal.fire({
        icon: 'error',
        title: 'No User Signed In',
        text: 'Please sign in to update your password.',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl mb-7 font-bold text-center">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">User Email</label>
          <input
            type="text"
            value={data?.email}
            disabled
            name="email"
            className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="age" className="text-sm font-medium text-gray-700">User Age</label>
          <input
            type="text"
            name="age"
            defaultValue={data?.age}
            className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mobileNumber" className="text-sm font-medium text-gray-700">User Mobile</label>
          <input
            type="text"
            name="mobileNumber"
            defaultValue={data?.mobileNumber}
            className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="photoURL" className="text-sm font-medium text-gray-700">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            defaultValue={data?.photoURL}
            className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
        <div className="flex flex-col mt-4">
          <button
            type="submit"
            className="py-2 px-4 bg-sky-500 text-black rounded-md shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Update Profile
          </button>
        </div>
      </form>

      <h2 className="text-2xl my-7 font-bold text-center">Change Password</h2>
      <form onSubmit={handlePasswordChange} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label htmlFor="currentPassword" className="text-sm font-medium text-gray-700">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            name="newPassword"
            className="mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <button
            type="submit"
            className="py-2 px-4 bg-sky-500 text-black rounded-md shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Change Password
          </button>
        </div>
      </form>
      {passwordMessage && (
        <p className={`mt-4 text-center ${passwordMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {passwordMessage}
        </p>
      )}
    </div>
  );
}
