import { motion, MotionProps } from "framer-motion";

const Path = (props: MotionProps) => <motion.path fill="transparent" strokeWidth="2" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />;

export const MenuToggle = ({ toggle }: { toggle: VoidFunction }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 9.423 L 20 9.423", opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
