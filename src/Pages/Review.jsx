import img1 from '../assets/5.jpg';


const reviews = [
    {
        title: 'Amazing Event!',
        text: 'I had a fantastic time at the event. The music was great and the atmosphere was amazing.',
        user: 'John Doe',
        userImg: 'https://via.placeholder.com/150',
        date: 'June 1, 2024'
    },
    {
        title: 'Loved It!',
        text: 'Everything was well organized and the staff was very friendly. Highly recommend!',
        user: 'Jane Smith',
        userImg: 'https://via.placeholder.com/150',
        date: 'June 2, 2024'
    },
    {
        title: 'Great Experience!',
        text: 'This was one of the best events I have attended. Looking forward to the next one!',
        user: 'Alice Brown',
        userImg: 'https://via.placeholder.com/150',
        date: 'June 3, 2024'
    },
    // Add more reviews as needed
];

const Reviews = () => {
    return (
        <div className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
            <div className="bg-black bg-opacity-50 py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-center font-extrabold text-4xl text-white mb-6">What People Say</h1>
                    <div className="carousel w-full">
                        {reviews.map((review, index) => (
                            <div key={index} id={`slide${index}`} className="carousel-item w-full">
                                <div className=" p-6 rounded-lg shadow-md mx-auto max-w-xl">
                                    <h2 className="text-2xl font-bold mb-2 text-white">{review.title}</h2>
                                    <p className="text-white mb-4">{review.text}</p>
                                    <div className="flex items-center">
                                        <img src={review.userImg} alt={review.user} className="w-10 h-10 rounded-full mr-4" />
                                        <div>
                                            <p className="text-white leading-none">{review.user}</p>
                                            <p className="text-white">{review.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        {reviews.map((_, index) => (
                            <a key={index} href={`#slide${index}`} className="btn btn-xs mx-1">
                                {index + 1}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
