import { PropsWithChildren, useEffect, useState } from "react";
import { motion } from "framer-motion";

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default ({
  height,
  width,
  src,
  className,
}: PropsWithChildren<{
  height: string;
  width: string;
  src?: string;
  className?: string;
}>) => {
  const [x, setX] = useState(random(-5, 5));
  const [y, setY] = useState(random(-5, 5));

  useEffect(() => {
    return () => {
      setInterval(() => {
        setX(random(-5, 5));
        setY(random(-10, 5));
      }, 4000);
    };
  }, []);

  return (
    <motion.div
      style={{
        height,
        width,
        background: src ? `url(${src})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={className}
      animate={{
        x: [0, x],
        y: [0, y],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};
