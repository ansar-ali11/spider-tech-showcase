import { motion, useScroll, useTransform } from "framer-motion";

const SpiderScrollAnimation = () => {
  const { scrollYProgress } = useScroll();

  // Spider moves down the right side as you scroll
  const spiderY = useTransform(scrollYProgress, [0, 1], ["5vh", "85vh"]);
  // Slight horizontal sway
  const spiderX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 10, -10, 8, 0]);
  // Rotate slightly
  const spiderRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, -3]);
  // Web thread length grows
  const webHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-6 md:right-10 top-0 bottom-0 z-[3] pointer-events-none">
      {/* Web thread */}
      <motion.div
        className="absolute right-3 top-0 w-[1px]"
        style={{
          height: webHeight,
          background: "linear-gradient(to bottom, hsl(var(--spidey-red) / 0.4), hsl(var(--spidey-red) / 0.1))",
        }}
      />

      {/* Spider */}
      <motion.div
        style={{ y: spiderY, x: spiderX, rotate: spiderRotate }}
        className="relative"
      >
        {/* Spider body SVG */}
        <svg width="28" height="36" viewBox="0 0 28 36" className="drop-shadow-lg">
          {/* Web attachment line */}
          <line x1="14" y1="0" x2="14" y2="8" stroke="hsl(var(--spidey-red))" strokeWidth="0.5" opacity="0.5" />
          
          {/* Legs - left */}
          <motion.g
            animate={{ rotate: [0, 8, 0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "14px 18px" }}
          >
            <path d="M14 14 L4 8 L1 4" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M14 18 L3 16 L0 14" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M14 22 L4 26 L1 30" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M14 20 L5 22 L2 25" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" />
          </motion.g>

          {/* Legs - right */}
          <motion.g
            animate={{ rotate: [0, -8, 0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ transformOrigin: "14px 18px" }}
          >
            <path d="M14 14 L24 8 L27 4" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M14 18 L25 16 L28 14" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M14 22 L24 26 L27 30" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M14 20 L23 22 L26 25" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeLinecap="round" />
          </motion.g>

          {/* Body */}
          <ellipse cx="14" cy="12" rx="4" ry="4.5" fill="hsl(var(--spidey-red))" />
          <ellipse cx="14" cy="20" rx="5.5" ry="7" fill="hsl(var(--spidey-red))" />

          {/* Spider-Man pattern on body */}
          <line x1="14" y1="13" x2="14" y2="27" stroke="hsl(var(--spidey-blue))" strokeWidth="0.6" />
          <line x1="8.5" y1="20" x2="19.5" y2="20" stroke="hsl(var(--spidey-blue))" strokeWidth="0.6" />

          {/* Eyes */}
          <ellipse cx="12" cy="11" rx="1.5" ry="2" fill="hsl(var(--foreground))" />
          <ellipse cx="16" cy="11" rx="1.5" ry="2" fill="hsl(var(--foreground))" />
        </svg>

        {/* Glow effect */}
        <motion.div
          className="absolute -inset-2 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--spidey-red) / 0.15) 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default SpiderScrollAnimation;
