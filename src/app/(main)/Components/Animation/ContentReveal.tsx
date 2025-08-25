"use client";
import React from "react";
import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";
import { IBaseComponent } from "@/types/common";

export const ContentReveal: React.FC<IBaseComponent> = ({
  className,
  children,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    amount: 1,
    margin: "1000px 0px 0px 0px",
  });

  return (
    <AnimatePresence>
      <motion.div
        ref={scope}
        className={`${className ? className : ""}`}
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
