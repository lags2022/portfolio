"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ErrorFormProps {
  formError: string | null;
}

const ErrorForm = ({ formError }: ErrorFormProps) => {
  return (
    <AnimatePresence initial={true} onExitComplete={() => null} mode="wait">
      <motion.p
        className="absolute w-fit inline-block m-0 p-0 text-rose-500 text-xs font-medium border-2 border-rose-500 bg-white"
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {formError}
      </motion.p>
    </AnimatePresence>
  );
};

export default ErrorForm;
