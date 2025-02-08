import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import News from "./pages/News";
import Courses from "./pages/Courses";
import Blogs from "./pages/Blogs";
import Membership from "./pages/Membership";
import Publications from "./pages/Publications";
import Mentors from "./pages/Mentors";
import Donate from "./pages/Donate";
import ContactUs from "./pages/ContactUs";
import { app } from "./firebaseConfig";


const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/Publications" element={<Publications/>} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;