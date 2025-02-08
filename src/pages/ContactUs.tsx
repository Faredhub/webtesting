import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send data to the backend)
    console.log({ name, email, message });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            We would love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
          </p>
          <div className="grid gap-8 mb-16 md:grid-cols-1 lg:grid-cols-2"> {/* Updated grid for responsiveness */}
            <Card className="p-6 border border-gray-200 rounded-lg">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
                <div className="text-lg mb-2">
                  <strong>Address:</strong> <br />
                  <p>1/11, Anandnagar, Vidyasagar pally, Bhattanagar, Liluah, Howrah - 711203</p>
                </div>
                <div className="text-lg mb-2">
                  <strong>Email:</strong> <br />
                  <a href="mailto:support.research@gudsky.org" className="text-primary hover:underline">support.research@gudsky.org</a>
                </div>
                <div className="text-lg mb-2">
                  <strong>Phone:</strong> <br />
                  <p>+91 8420536631</p>
                  <p>+91 9305641151</p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-gray-200 rounded-lg">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
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
                  <div>
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
                  <div>
                    <label htmlFor="message" className="block text-left text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-primary-dark transition duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <p>Your message has been successfully submitted. We will get back to you shortly.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition duration-300">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </div>
  );
};

export default ContactUs;
