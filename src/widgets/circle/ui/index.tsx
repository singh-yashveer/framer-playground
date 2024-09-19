import { motion, useMotionValue, useTransform } from "framer-motion";
import "./styles.css";

function Circle() {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [-200, 0, 200], [0, 1, 0]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,

          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          //   x: [0, 100, 200, 300, 400],

          borderRadius: ["20%", "20%", "50%", "50%", "50%"],
        }}
        transition={{ duration: 2, ease: "linear", loop: Infinity }}
        whileTap={{ scale: 1.1 }}
        drag="y"
        style={{ y, opacity }}
        dragConstraints={{ top: 0, bottom: 0 }}
        className="circle"
        whileInView={{ opacity: 1 }}
      >
        Testing Tamatar
      </motion.div>
    </>
  );
}

export default Circle;
