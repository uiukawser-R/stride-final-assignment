

import img1 from '../../assets/Rectangle 1.jpg';
import img2 from '../../assets/Rectangle 1 (1).jpg';
import img3 from '../../assets/Rectangle 1 (2).jpg';
import img4 from '../../assets/Rectangle 1 (3).jpg';
import img5 from '../../assets/Rectangle 1 (4).jpg';
import img6 from '../../assets/Rectangle 1 (5).jpg';

const EventManagement = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-center font-extrabold text-4xl text-orange-400'>OUR COMMITMENT</h1>
            <div className='flex justify-center mt-3'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {[img1, img2, img3, img4, img5, img6].map((imgSrc, index) => (
                        <div
                            key={index}
                            className='relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-200'
                        >
                            <img
                                src={imgSrc}
                                alt={`Event ${index + 1}`}
                                className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventManagement;

