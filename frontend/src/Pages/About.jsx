import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const About = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-100 min-h-screen dark:bg-slate-900 text-gray-500">
        {/* Hero Section */}
        <section className="bg-primary  py-20 dark:bg-slate-900 text-gray-500">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
            <p className="text-lg">We are a passionate team dedicated to creating amazing experiences.</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 dark:bg-slate-900 text-gray-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold  mb-6">Our Story</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Our journey started with a simple idea: to make the web a better place through innovative
              and user-centric solutions. We've grown from a small team of enthusiasts to a full-fledged
              development agency, but our core values remain the same—passion for design, attention to
              detail, and a commitment to delivering top-notch products.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="dark:bg-slate-900 text-gray-500 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-500 mb-10">Meet Our Team</h2>
            <div className="w-[95%] gap-5 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="card w-full shadow-custom rounded-lg dark:bg-slate-900  hover:-translate-y-2   duration-200 ease-in">
                <figure>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0r5cZtmrzpExXnDBFnA00zeAaFP8LRMRAaA&s"
                    alt="Team member 1"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xl font-semibold">Jane Doe</h3>
                  <p className="text-gray-600">CEO & Founder</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="card w-full rounded-lg dark:bg-slate-900 shadow-custom hover:-translate-y-2  duration-200 ease-in">
                <figure>
                  <img
                    src="https://fekrait.com/uploads/topics/16750304198773.jpg"
                    alt="Team member 2"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xl font-semibold">John Smith</h3>
                  <p className="text-gray-600">Lead Developer</p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="card w-full bg-white shadow-custom rounded-lg dark:bg-slate-900  hover:-translate-y-2  duration-200 ease-in">
                <figure>
                  <img
                    src="https://static4.depositphotos.com/1000816/514/i/450/depositphotos_5140926-stock-photo-closeup-of-employee-in-the.jpg"
                    alt="Team member 3"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xl font-semibold">Emily Johnson</h3>
                  <p className="text-gray-600">UX/UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 dark:bg-slate-900 shadow-teal-300 ">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg mb-6">
              We're always looking for talented individuals to join our growing team. If you're passionate
              about building great products, we'd love to hear from you!
            </p>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
