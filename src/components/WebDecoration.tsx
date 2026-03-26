import { motion, useScroll, useTransform } from "framer-motion";

const WebDecoration = () => {
  const { scrollYProgress } = useScroll();
  const webRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const webScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[2]">
      {/* Side web strands that react to scroll */}
      <motion.div
        style={{ rotate: webRotate, scale: webScale }}
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.04]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <line
              key={angle}
              x1="100" y1="100"
              x2={100 + 100 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 100 * Math.sin((angle * Math.PI) / 180)}
              stroke="hsl(var(--spidey-red))"
              strokeWidth="0.5"
            />
          ))}
          {[30, 60, 90].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="hsl(var(--spidey-red))" strokeWidth="0.3" />
          ))}
        </svg>
      </motion.div>

      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -360]), scale: webScale }}
        className="absolute -right-40 top-1/3 w-80 h-80 opacity-[0.04]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <line
              key={angle}
              x1="100" y1="100"
              x2={100 + 100 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 100 * Math.sin((angle * Math.PI) / 180)}
              stroke="hsl(var(--spidey-blue))"
              strokeWidth="0.5"
            />
          ))}
          {[30, 60, 90].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="hsl(var(--spidey-blue))" strokeWidth="0.3" />
          ))}
        </svg>
      </motion.div>

      {/* Floating particles on scroll */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "hsl(var(--spidey-red))" : "hsl(var(--spidey-blue))",
            left: `${5 + (i * 4.7) % 90}%`,
            top: `${10 + (i * 7.3) % 80}%`,
            opacity: useTransform(
              scrollYProgress,
              [Math.max(0, (i % 10) / 10 - 0.1), (i % 10) / 10, Math.min(1, (i % 10) / 10 + 0.1)],
              [0, 0.6, 0]
            ),
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default WebDecoration;
