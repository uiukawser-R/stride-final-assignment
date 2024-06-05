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
                <div className='grid grid-cols-3 gap-3'>
                    <div className='hover:bg-gray-200'>
                        <img src={img1} alt="" className='cursor-pointer' />
                    </div>
                    <div className='hover:bg-gray-200'>
                        <img src={img2} alt="" className='cursor-pointer' />
                    </div>
                    <div className='hover:bg-gray-200'>
                        <img src={img3} alt="" className='cursor-pointer' />
                    </div>
                    <div className='hover:bg-gray-200'>
                        <img src={img4} alt="" className='cursor-pointer' />
                    </div>
                    <div className='hover:bg-gray-200'>
                        <img src={img5} alt="" className='cursor-pointer' />
                    </div>
                    <div className='hover:bg-gray-200'>
                        <img src={img6} alt="" className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventManagement;
