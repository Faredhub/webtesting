import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Donate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send data to the backend)
    console.log({ name, email, amount });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-12">Support Our Cause</h1>
          <p className="text-xl text-gray-600 mb-12">
            Your generous contributions help us continue our mission of nurturing innovation and academic excellence. Every donation, no matter the size, makes a difference.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-left text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="amount" className="block text-left text-gray-700 font-bold mb-2">Donation Amount</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-primary-dark transition duration-300"
            >
              Donate Now
            </button>
          </form>
          <div className="mt-16 mb-16"> {/* Added bottom margin here */}
            <p className="text-lg text-gray-600">
              Prefer to donate via PayPal or Stripe? Click the buttons below to proceed.
            </p>
            <div className="flex justify-center mt-6 space-x-6">
              <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                Donate via PayPal
              </button>
              <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-700 transition duration-300">
                Donate via Stripe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
