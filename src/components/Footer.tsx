import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">GUDSKY</h2>
            <p className="mt-4 text-sm">
              Empowering the next generation of AI professionals through expert-led education and
              practical training.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="text-sm hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="text-sm hover:text-gray-300">
                  Courses
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-sm hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">Email: info@gudsky.com</li>
              <li className="text-sm">Phone: (555) 123-4567</li>
              <li className="text-sm">Address: 123 AI Street, Tech City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">© 2024 GUDSKY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;