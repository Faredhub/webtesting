import { useState } from "react";
import { Menu, X, Info, Calendar, BookOpen, MessageSquare, Users } from "lucide-react";
import { Button } from "./ui/button";
import gudskyLogo from "../assets/gudsky-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", icon: <Info className="h-4 w-4" />, href: "/about" },
    { name: "Upcoming News", icon: <Calendar className="h-4 w-4" />, href: "/news" },
    { name: "Courses", icon: <BookOpen className="h-4 w-4" />, href: "/courses" },
    { name: "Blogs", icon: <MessageSquare className="h-4 w-4" />, href: "/blogs" },
    { name: "Membership", icon: <Users className="h-4 w-4" />, href: "/membership" },
    { name: "Courses", icon: <BookOpen className="h-4 w-4" />, href: "/courses" },
    { name: "Blogs", icon: <MessageSquare className="h-4 w-4" />, href: "/blogs" },
    { name: "Membership", icon: <Users className="h-4 w-4" />, href: "/membership" }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#000080] shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={gudskyLogo}
              alt="GUDSKY Logo" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-white">GUDSKY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link flex items-center gap-2 px-3 py-2 text-sm font-medium text-white"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
        className={`transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed right-0 top-16 z-50 h-full w-64 bg-[#000080] transition-transform duration-300 ease-in-out md:hidden`}
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
  );
};

export default Navbar;