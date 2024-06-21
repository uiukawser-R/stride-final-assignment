
// import { FiUsers, FiCalendar, FiMessageCircle } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';
// import { useEffect, useState } from 'react';

// const Dashboard = () => {
//     const {user}=useAuth();
//     const [userInfo,setUserInfo]=useState();
//     console.log(user);
//     // const {displayName,email,photoURL}= user;
//     useEffect(()=>{
//       fetch(`http://localhost:5000/users/${user?.email}`)
//       .then((res)=>res.json())
//       .then((data)=>setUserInfo(data));
//     },[user])


//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <div className="max-w-7xl mx-auto">
//                 <header className="mb-10">
//                     <h1 className="text-4xl font-bold text-center text-orange-400">Welcome to Your Dashboard</h1>
//                     <p className="text-center text-gray-600 mt-2">Manage your events and profile from here</p>
//                 </header>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex items-center mb-4">
//                             <FiCalendar className="text-4xl text-blue-500" />
//                             <h2 className="text-2xl font-bold text-gray-800 ml-2">Upcoming Events</h2>
//                         </div>
//                         <p className="text-gray-600">View and manage your upcoming events.</p>
//                         <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
//                             View Events
//                         </button>
//                     </div>

//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex items-center mb-4">
//                             <FiUsers className="text-4xl text-green-500" />
//                             <h2 className="text-2xl font-bold text-gray-800 ml-2">Profile Settings</h2>
//                         </div>
//                         <p className="text-gray-600">Update your profile information and settings.</p>
//                        <Link to={`../profile/profile-edit/${userInfo?._id}`}> <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600">
//                             Edit Profile
//                         </button></Link>
//                     </div>

//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex items-center mb-4">
//                             <FiMessageCircle className="text-4xl text-yellow-500" />
//                             <h2 className="text-2xl font-bold text-gray-800 ml-2">Messages</h2>
//                         </div>
//                         <p className="text-gray-600">Check your messages and notifications.</p>
//                         <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600">
//                             View Messages
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FiUsers, FiCalendar, FiMessageCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useEffect, useState } from 'react';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  { name: 'Jan', revenue: 4000, sales: 2400 },
  { name: 'Feb', revenue: 3000, sales: 1398 },
  { name: 'Mar', revenue: 2000, sales: 9800 },
  { name: 'Apr', revenue: 2780, sales: 3908 },
  { name: 'May', revenue: 1890, sales: 4800 },
  { name: 'Jun', revenue: 2390, sales: 3800 },
  { name: 'Jul', revenue: 3490, sales: 4300 },
  { name: 'Aug', revenue: 2000, sales: 2400 },
  { name: 'Sep', revenue: 3000, sales: 1398 },
  { name: 'Oct', revenue: 2780, sales: 3908 },
  { name: 'Nov', revenue: 1890, sales: 4800 },
  { name: 'Dec', revenue: 2390, sales: 3800 },
];

const Dashboard = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-4xl font-bold text-center text-orange-400">Welcome to Your Dashboard</h1>
                    <p className="text-center text-gray-600 mt-2">Manage your events and profile from here</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <FiCalendar className="text-4xl text-blue-500" />
                            <h2 className="text-2xl font-bold text-gray-800 ml-2">Upcoming Events</h2>
                        </div>
                        <p className="text-gray-600">View and manage your upcoming events.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                            View Events
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <FiUsers className="text-4xl text-green-500" />
                            <h2 className="text-2xl font-bold text-gray-800 ml-2">Profile Settings</h2>
                        </div>
                        <p className="text-gray-600">Update your profile information and settings.</p>
                        <Link to={`../profile/profile-edit/${userInfo?._id}`}>
                            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600">
                                Edit Profile
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <FiMessageCircle className="text-4xl text-yellow-500" />
                            <h2 className="text-2xl font-bold text-gray-800 ml-2">Messages</h2>
                        </div>
                        <p className="text-gray-600">Check your messages and notifications.</p>
                        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600">
                            View Messages
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Revenue and Sales</h2>
                    <BarChart
                        width={800}
                        height={400}
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                        <Bar dataKey="sales" fill="#82ca9d">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

