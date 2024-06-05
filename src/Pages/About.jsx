import 'daisyui/dist/full.css'; // Import DaisyUI styles

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg mb-12">
          Welcome to <span className="font-bold">[Event Name]</span>, where unforgettable experiences are crafted and cherished. We are a passionate team dedicated to curating exceptional events that leave a lasting impression.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg mb-6">
              At <span className="font-bold">[Event Name]</span>, our mission is simple yet profound: to create moments that matter. We believe in the power of bringing people together, fostering connections, and inspiring joy through immersive and memorable experiences.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">What Sets Us Apart</h3>
            <p className="text-lg mb-6">
              What sets us apart is our commitment to creativity, attention to detail, and unwavering dedication to exceeding expectations. Whether it a corporate gathering, a community celebration, or a private affair, we approach each event with enthusiasm and expertise, ensuring every aspect is flawlessly executed.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Services</h3>
            <ul className="text-lg space-y-2">
              <li>Event Planning</li>
              <li>Venue Selection</li>
              <li>Theme Development</li>
              <li>Logistics Management</li>
              <li>Entertainment & Activities</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Commitment to Excellence</h3>
            <p className="text-lg">
              At <span className="font-bold">[Event Name]</span>, excellence is not just a goal; it our standard. We are committed to delivering exceptional service, exceeding expectations, and creating unforgettable experiences that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
