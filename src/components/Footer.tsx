import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">@GUDSKY</h2>
            <p className="mt-4 text-sm">
              Let’s become a leading platform for fostering young talent in research, innovation, and academic excellence, 
              and to make significant contributions to global knowledge and development.
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
              <li className="text-sm">Email: support.research@gudsky.org</li>
              <li className="text-sm">Phone: (+91) 8018640398</li>
              <li className="text-sm">Phone: (+91) 9305641151</li>
              <li className="text-sm">Address: 1/11, Anandnagar, Vidyasagar pally, Bhattanagar, Liluah, Howrah - 711203</li>
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
              <a href="https://www.linkedin.com/company/gudsky/" className="hover:text-gray-300">
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
