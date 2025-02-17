import styles from "../style";
import { motion } from "framer-motion";
import { profilePic } from "../assets"; // Removed `partham` to avoid errors

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex ${styles.flexCenter}`} // Removed extra quotes
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 1.5, opacity: 0.85 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* Loading Container */}
      <div className="flex flex-col justify-center items-center space-y-4">
        {/* Top Logo (Optional: Uncomment if `partham` is available) */}
        {/* <img src={partham} alt="Partham Logo" className="w-[80px] h-[80px]" /> */}

        {/* Bottom Profile Picture */}
        <img
          src={profilePic}
          alt="Profile"
          className="w-[80px] h-[80px] border-2 border-teal-200 rounded-full"
        />

        {/* Loading Text */}
        <p className="text-white font-semibold text-lg">Loading...</p>
      </div>
    </motion.div>
  );
};

export default Loading;
