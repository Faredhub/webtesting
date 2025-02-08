import { useState } from "react";
import { Menu, X, Info, Calendar, BookOpen, MessageSquare, Users, Phone } from "lucide-react";
import { Button } from "./ui/button";
import gudskyLogo from "../assets/gudsky-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", icon: <Info className="h-4 w-4" />, href: "/about" },
    { name: "News", icon: <Calendar className="h-4 w-4" />, href: "/news" },
    { name: "Courses", icon: <BookOpen className="h-4 w-4" />, href: "/courses" },
    { name: "Publications", icon: <MessageSquare className="h-4 w-4" />, href: "/Publications" },
    { name: "Donate", icon: <Info className="h-4 w-4" />, href: "/Donate" },
    { name: "Mentors", icon: <Users className="h-4 w-4" />, href: "/Mentors" },
    { name: "Blogs", icon: <MessageSquare className="h-4 w-4" />, href: "/blogs" },
    { name: "Membership", icon: <Users className="h-4 w-4" />, href: "/membership" },
    { name: "Contact Us", icon: <Phone className="h-4 w-4" />, href: "/contact-us" }
  ];

  return (
    <div>
      {/* Logo Section */}
      <div className="bg-white py-2 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <img 
              src={gudskyLogo}
              alt="GUDSKY Logo" 
              className="h-12 w-auto object-contain" 
            />
            <div>
              <span className="text-xl font-bold text-[#257390]">GUDSKY RESEARCH FOUNDATION</span>
              <br />
              <span className="text-lg font-bold text-[#f2ad59]">Estd. 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-[#000080] shadow-md mt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link flex items-center gap-2 px-2 py-1 text-xs font-medium text-white"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-end w-full">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-[#000080]/50"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`transform ${isOpen ? "translate-x-0" : "translate-x-full"}
            fixed right-0 top-12 z-50 h-full w-64 bg-[#000080] transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-white hover:bg-[#000080]/50 rounded-md"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
