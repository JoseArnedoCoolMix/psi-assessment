"use client";
import React, { ReactNode } from "react";
import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";

interface TitleRevealProps {
  className?: string;
  children: ReactNode;
}

export const TitleReveal: React.FC<TitleRevealProps> = ({
  className,
  children,
}) => {
  const [scope] = useAnimate();
  const isInView = useInView(scope, {
    amount: 1,
    margin: "1000px 0px 0px 0px",
  });

  return (
    <AnimatePresence>
      <motion.div
        ref={scope}
        className={className ? className : ""}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        initial="hidden"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
