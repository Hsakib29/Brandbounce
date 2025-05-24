"use client";

import { TaskbounceFooter } from "@/components/taskbounce/taskbounce-footer";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskbounceLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <TaskbounceFooter />
    </div>
  );
}
