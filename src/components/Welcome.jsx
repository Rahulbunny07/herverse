// src/components/Welcome.jsx
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 text-center px-4">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey Beautiful 💖
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        A little surprise made just for you…  
      </motion.p>

      <motion.a
        href="#herverse"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <FaHeart />
        Enter Your World
      </motion.a>
    </div>
  );
};

export default Welcome;
