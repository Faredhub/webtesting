import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "11b49a6c-de56-4af6-81f4-b4c17cc27997");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setResult("❌ Network Error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-br from-black via-brown-900 to-green-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
        <p className="text-lg mb-8 opacity-90">
          Feel free to reach out through our contact form or find our details below.
          Your feedback, questions, and suggestions are valuable to us as we strive 
          to provide exceptional service to our university community.
        </p>

        {/* Contact Info */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
          <ul className="text-lg space-y-4">
            <li className="flex items-center gap-3">
              📧 <span className="font-semibold">Email:</span> contact@gmail.com
            </li>
            <li className="flex items-center gap-3">
              📞 <span className="font-semibold">Phone:</span> 123-456-7890
            </li>
            <li className="flex items-center gap-3">
              📍 <span className="font-semibold">Address:</span> The Hello, 03 Yard, Bhanjpur, UAE
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="mt-10 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
          <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <label className="text-lg font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-md bg-gray-200 text-black outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />

            <label className="text-lg font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="w-full p-3 rounded-md bg-gray-200 text-black outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />

            <label className="text-lg font-semibold">Write Your Message Here</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
              className="w-full p-3 rounded-md bg-gray-200 text-black outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            ></textarea>

            {/* Submit Button with Arrow Icon & Loading Indicator */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-brown-700 rounded-full shadow-md transform transition-all hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-green-500"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Now"}
              <span className="text-xl">➡️</span>
            </button>
          </form>

          {/* Submission Result */}
          {result && (
            <p className={`mt-4 text-lg font-semibold ${result.includes("✅") ? "text-green-400" : "text-red-400"}`}>
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
