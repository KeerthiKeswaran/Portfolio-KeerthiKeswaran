import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import HeadShot from '../assets/Keerthkeshwaran-Headshots.jpg';
export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="relative"
    >
      <Tilt
        className="parallax-effect"
        perspective={500}
        scale={1.02}
        gyroscope={true}
      >
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,255,255,0.05)] to-[rgba(0,123,255,0.05)] opacity-100 animate-glow"></div>
          <img
            src={HeadShot}
            alt="KeerthiKeswaran K S"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jet/80 to-transparent"></div>
        </div>
      </Tilt>
    </motion.div>
  );
}