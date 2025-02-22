import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaPaintBrush,
  FaChartLine,
  FaCloud,
  FaShoppingCart,
  FaUsers,
  FaLayerGroup,
  FaLock,
  FaRocket,
  FaCogs,
} from "react-icons/fa";

export default function ServicesHorizantalMarq() {
  const services = [
    { name: "Web Design", icon: <FaPaintBrush /> },
    { name: "Web Development", icon: <FaLaptopCode /> },
    { name: "Responsive Design", icon: <FaMobileAlt /> },
    { name: "User-Friendly Projects", icon: <FaUsers /> },
    { name: "Software Solutions", icon: <FaCode /> },
    { name: "SEO Optimization", icon: <FaSearch /> },
    { name: "Social Media Marketing", icon: <FaChartLine /> },
    { name: "Graphic Design", icon: <FaPaintBrush /> },
    { name: "UI/UX Design", icon: <FaLayerGroup /> },
    { name: "E-commerce Development", icon: <FaShoppingCart /> },
    { name: "Mobile App Development", icon: <FaMobileAlt /> },
    { name: "Cloud Integration", icon: <FaCloud /> },
    { name: "Cybersecurity Solutions", icon: <FaLock /> },
    { name: "Startup Consulting", icon: <FaRocket /> },
    { name: "Custom API Integration", icon: <FaCogs /> },
  ];

  return (
    <div className="w-full py-4 transition-all duration-500 bg-transparent">
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover
        className="text-xl font-medium !bg-transparent"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-2 whitespace-nowrap bg-transparent shadow-lg dark:shadow-2xl px-6 py-2 rounded-md transition-transform duration-500 hover:scale-100 border border-gray-200 dark:border-gray-700"
          >
            <span className="text-xl text-blue-600 dark:text-blue-400">
              {service.icon}
            </span>
            <span className=" text-gray-800 dark:text-gray-200">
              {service.name}
            </span>
          </div>
        ))}
      </Marquee>
      <Marquee
        speed={60}
        direction="right"
        gradient={false}
        pauseOnHover
        className="text-xl font-medium mt-4 !bg-transparent"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-2 whitespace-nowrap bg-transparent shadow-lg dark:shadow-2xl px-6 py-2 rounded-md transition-transform duration-500 hover:scale-100 border border-gray-200 dark:border-gray-700"
          >
            <span className="text-xl text-blue-600 dark:text-blue-400">
              {service.icon}
            </span>
            <span className=" text-gray-800 dark:text-gray-200">
              {service.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
