import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg}; /* Matches theme background */
`;

const Dots = styled.div`
  display: flex;
  gap: 10px;
`;

// Apple-style bouncing animation
const dotVariants = {
  animate: {
    y: [0, -10, 0], // Move up and down
    opacity: [0.6, 1, 0.6], // Fade in and out
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
      staggerChildren: 0.2, // Delays animation between dots
    },
  },
};

// Define colors for each dot
const colors = ["#FF3B30", "#FFD60A", "#34C759"]; // Red, Yellow, Green (Apple-style)

const Dot = styled(motion.div)`
  width: 14px;
  height: 14px;
  background-color: ${(props) => colors[props.index]}; /* Assign color dynamically */
  border-radius: 50%;
`;

function DotLoader() {
  return (
    <LoaderContainer>
      <Dots>
        {colors.map((_, i) => (
          <Dot key={i} index={i} variants={dotVariants} animate="animate" />
        ))}
      </Dots>
    </LoaderContainer>
  );
}

export default DotLoader;
