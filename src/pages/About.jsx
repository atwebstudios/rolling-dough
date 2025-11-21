import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-4xl font-bold text-[#2d4a3e] mb-8">Our Story</h1>
          <p className="text-lg text-gray-600">
            Welcome to our bakery's story page. Content coming soon...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;