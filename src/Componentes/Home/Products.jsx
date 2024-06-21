/* eslint-disable react/prop-types */




import  { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SingleProducts from './SingleProducts';

const Products = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((event) =>
        (event.title || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center px-4">
            <h1 className="my-8 text-4xl font-bold text-center text-orange-400">Our Events</h1>
            <div className="relative mb-8 w-full max-w-md">
                <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                    <FaSearch className="ml-3 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full p-4 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full transition duration-200 ease-in-out transform hover:scale-105"
                    />
                </div>
                <hr />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {
                    filteredData.slice(0, 9).map((event) => (
                        <SingleProducts key={event.id} event={event} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;

