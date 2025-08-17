// SectionWrapper.tsx
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% of section is visible
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
