import { motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/lib/animations";

const AnimatedSection = ({
  children,
  variants = fadeUp,
  viewport = VIEWPORT,
  className,
  ...props
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={variants}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
