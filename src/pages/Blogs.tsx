import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blogs = () => {
  const images = [
    
    "src/assets/image.png",
  ];

  const blogs = [
    {
      title: "Transforming Agriculture with IoT: A Smart Irrigation System",
      content: "The agricultural industry is undergoing a transformation, thanks to the Internet of Things (IoT). Our research presents an IoT-based irrigation method designed to tackle significant challenges that farmers face. By integrating technologies like Arduino UNO, Bluetooth modules, and soil-moisture sensors, we have developed a user-friendly system that allows farmers to set customized threshold moisture levels for their crops. This real-time monitoring system activates irrigation only when necessary, preventing overwatering and underwatering. Dive into how this innovative approach is revolutionizing agricultural practices and empowering farmers for better crop management.",
    },
    {
      title: "Revolutionizing Education: Tracking Academic Progress with Machine Learning",
      content: "In today's fast-paced world, tracking students' academic progress and learning outcomes in real time is crucial. Our research introduces a cutting-edge Learning Management System (LMS) powered by Machine Learning (ML). This system streamlines tasks like attendance tracking, assignment and quiz preparation, and subject-specific mark analysis. By reducing the time spent on routine activities, teachers and students can focus more on learning and development. Learn more about how this LMS is transforming education and enhancing academic performance.",
    },
    {
      title: "IoT-Based AI Surveillance Car: Enhancing Security with Technology",
      content: "Security is paramount in today's world, and our research presents a novel solution: an AI Surveillance car equipped with object detection, line following, and live streaming capabilities. Utilizing IoT technology, this car can be remotely controlled and monitored, offering real-time object detection and high-quality live streaming. Explore how our innovative design can accurately detect obstacles, follow predefined paths, and provide enhanced security solutions for various applications.",
    },
    {
      title: "Interference Mitigation in CV2X Communications: A Key to Safer Transportation",
      content: "Cellular Vehicle-to-Everything (CV2X) communications are pivotal for the future of transportation. Our book delves into the critical role of interference mitigation in CV2X communications, exploring the origins, forms, and effects of interference. We analyze current methods employed for interference mitigation, including spectrum sharing, radio resource management, and traffic management. Discover the legislative and technical challenges, as well as opportunities for minimizing interference in high-density networks. This comprehensive analysis offers valuable insights into advancing CV2X communications and enhancing transportation safety.",
    },
    {
      title: "Advancing HMI: Voice-Controlled Car with NLP and Wireless Communication",
      content: "Our latest project presents a Voice-Controlled Car prototype that utilizes Natural Language Processing (NLP) and wireless communication for an enhanced Human-Machine Interface (HMI). The prototype, interfaced with an Arduino UNO and Bluetooth module, can extract and execute multiple voice commands. With features like live streaming via an ESP32-CAM module and obstacle recognition using an ultrasonic sensor, this car offers a practical solution for voice-activated applications. Learn how our innovative design is setting new standards in HMI and improving user experience.",
    },
    {
      title: "Enhancing Voice-Controlled Cars with NLP and Additional Features",
      content: "Building on our previous work, this research further enhances the functionality of Voice-Controlled Cars using NLP techniques. With a focus on systematic evaluations, we demonstrate strong performance in terms of Bluetooth range and response accuracy. Additional features like live streaming and obstacle recognition make this prototype highly practical. Explore the detailed performance study and discover valuable insights for future optimizations in voice-controlled systems.",
    },
    {
      title: "Automating Indian Railway Services with Face Recognition Technology",
      content: "Stay tuned for our upcoming research paper on automating Indian Railway services using face recognition technology. This innovative approach aims to streamline queue management and ticket booking, offering a seamless and efficient experience for passengers. Learn about the potential impact of this technology on railway services and its role in transforming transportation.",
    },
    {
      title: "Streamlining Banking Operations with Computer Vision",
      content: "Our forthcoming research paper explores the use of computer vision-based queue management systems to improve customer service in banking operations. By leveraging advanced technology, we aim to reduce waiting times and enhance customer satisfaction. Discover how this innovative approach can revolutionize the banking industry and provide a more efficient service experience.",
    },
    {
      title: "About Gudsky Research Foundation",
      content: "Gudsky Research Foundation is a forward-thinking initiative dedicated to nurturing the research and development potential of students across the globe, particularly in the fields of Artificial Intelligence (AI), Machine Learning (ML), and Robotics. We emphasize free mentorship and guidance for undergraduate and postgraduate students, making quality research opportunities accessible to all. Our mission is to bridge the gap between education and real-world research by offering a platform that supports students in their academic journeys. Join us in fostering a 'Learn and Teach' environment where students can grow as contributors to the scientific community.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Blogs</h1>
          <p className="text-lg text-gray-600 mb-4">
            Check out our latest blogs and stay updated with the latest trends
            in technology and education.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our blogs cover a wide range of topics including AI, ML, IoT, and
            more.
          </p>
         
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={image} alt={`Image ${index + 10}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          <div className="mt-16">
            {blogs.map((blog, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-4">{blog.title}</h2>
                <p className="text-lg text-gray-700">{blog.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
