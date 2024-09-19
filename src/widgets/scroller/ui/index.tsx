import "./styles.css";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Scroller() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      <h1 style={{ height: "50vh" }}></h1>
    </>
  );
}
