import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function AppLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 2500); // minimum visible time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Clubstar
            </h1>
            <p className="mt-2 text-muted-foreground text-sm">
              Brewing your clubs...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
