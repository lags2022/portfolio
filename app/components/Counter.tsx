"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

interface CounterProps {
  value: number;
  children: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ value, children }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 1000,
  });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      console.log(latest);
      if (ref.current && latest.toFixed(0) <= value)
        ref.current.textContent = latest.toFixed(0);
    });
  }, [springValue, value]);

  return (
    <div className="flex flex-col">
      <h5>
        <span ref={ref} />+
      </h5>
      <p>{children}</p>
    </div>
  );
};

export default Counter;
