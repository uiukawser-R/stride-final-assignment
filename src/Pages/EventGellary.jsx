import  { useState } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';

const EventGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [img1, img2, img3, img4, img5, img6];

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='mt-10 relative mb-10'>
            <h1 className='text-center font-extrabold text-4xl text-orange-400 mb-6'>Event Gallery</h1>
            <div className='flex justify-center'>
                <div className='relative w-full max-w-4xl h-96'>
                    {images.map((imgSrc, index) => (
                        <div
                            key={index}
                            className={`absolute transition-transform duration-300 transform hover:scale-105`}
                            style={{
                                top: `${index * 10}%`,
                                left: `${index * 10}%`,
                                zIndex: images.length - index,
                            }}
                        >
                            <img
                                src={imgSrc}
                                alt={`Event ${index + 1}`}
                                className='w-48 h-48 object-cover rounded-lg shadow-lg cursor-pointer'
                                onClick={() => openModal(imgSrc)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative">
                        <img src={selectedImage} alt="Selected Event" className="w-full h-auto max-w-3xl rounded-lg shadow-lg" />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventGallery;
