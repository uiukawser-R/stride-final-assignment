
import img from '../../assets/adidas.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto">
                    <h1 className="mb-5 text-4xl sm:text-5xl font-bold">Hello there</h1>
                    <button className="btn btn-primary px-6 py-3 text-base sm:text-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;