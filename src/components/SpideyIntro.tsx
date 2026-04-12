import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SpideyIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => setPhase(4), 3800),
      setTimeout(() => onComplete(), 4400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated background particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`p-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={phase >= 1 ? {
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0.5],
                x: [0, (Math.random() - 0.5) * 600],
                y: [0, (Math.random() - 0.5) * 600],
              } : {}}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="absolute rounded-full"
              style={{
                width: 2 + Math.random() * 4,
                height: 2 + Math.random() * 4,
                background: i % 2 === 0
                  ? "hsl(var(--spidey-red))"
                  : "hsl(var(--spidey-blue))",
                left: "50%",
                top: "50%",
              }}
            />
          ))}

          {/* Web lines radiating from center - more lines, animated */}
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={phase >= 1 ? { scaleY: 1, opacity: [0, 0.2, 0.1] } : {}}
              transition={{ delay: i * 0.03, duration: 0.6, ease: "easeOut" }}
              className="absolute h-[200vh] w-[1px] origin-center"
              style={{
                background: i % 2 === 0
                  ? `linear-gradient(to bottom, transparent, hsl(var(--spidey-red)), transparent)`
                  : `linear-gradient(to bottom, transparent, hsl(var(--spidey-blue)), transparent)`,
                transform: `rotate(${i * 15}deg)`,
              }}
            />
          ))}

          {/* Concentric web rings with pulse */}
          {[80, 150, 240, 350, 480].map((size, i) => (
            <motion.div
              key={size}
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 1 ? {
                scale: [0, 1.1, 1],
                opacity: [0, 0.3, 0.15],
              } : {}}
              transition={{
                delay: 0.2 + i * 0.12,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                border: `1px solid ${i % 2 === 0 ? "hsl(var(--spidey-red) / 0.4)" : "hsl(var(--spidey-blue) / 0.3)"}`,
              }}
            />
          ))}

          {/* Expanding shockwave ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 2 ? {
              scale: [0, 3],
              opacity: [0.5, 0],
            } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-40 h-40 rounded-full border-2 border-primary"
          />

          {/* Spider symbol - larger and more dramatic */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={phase >= 0 ? { scale: [0, 1.2, 1], rotate: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <motion.div
              animate={phase >= 2 ? {
                filter: [
                  "drop-shadow(0 0 20px hsl(var(--spidey-glow-red)))",
                  "drop-shadow(0 0 60px hsl(var(--spidey-glow-red)))",
                  "drop-shadow(0 0 30px hsl(var(--spidey-glow-red)))",
                ],
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100">
                {/* Spider body */}
                <motion.ellipse
                  cx="50" cy="45" rx="8" ry="12"
                  fill="hsl(var(--spidey-red))"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.ellipse
                  cx="50" cy="62" rx="12" ry="16"
                  fill="hsl(var(--spidey-red))"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
                {/* Eyes */}
                <motion.ellipse
                  cx="46" cy="40" rx="3" ry="4"
                  fill="hsl(var(--background))"
                  initial={{ scale: 0 }}
                  animate={phase >= 1 ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.3 }}
                />
                <motion.ellipse
                  cx="54" cy="40" rx="3" ry="4"
                  fill="hsl(var(--background))"
                  initial={{ scale: 0 }}
                  animate={phase >= 1 ? { scale: 1 } : {}}
                  transition={{ delay: 0.55, duration: 0.3 }}
                />
                {/* Legs */}
                {[
                  "M38,40 Q20,25 10,15", "M62,40 Q80,25 90,15",
                  "M36,48 Q18,48 5,42", "M64,48 Q82,48 95,42",
                  "M38,58 Q20,65 8,75", "M62,58 Q80,65 92,75",
                  "M40,68 Q28,80 18,90", "M60,68 Q72,80 82,90",
                ].map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="hsl(var(--spidey-red))"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={phase >= 0 ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  />
                ))}
              </svg>
            </motion.div>
          </motion.div>

          {/* Glitch text effect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-[30%] text-center"
          >
            <motion.h1
              className="font-heading text-5xl md:text-7xl font-bold tracking-wider"
              animate={phase >= 3 ? {
                textShadow: [
                  "2px 0 hsl(var(--spidey-red)), -2px 0 hsl(var(--spidey-blue))",
                  "-2px 0 hsl(var(--spidey-red)), 2px 0 hsl(var(--spidey-blue))",
                  "0 0 hsl(var(--spidey-red)), 0 0 hsl(var(--spidey-blue))",
                ],
              } : {}}
              transition={{ duration: 0.15, repeat: 3, repeatType: "mirror" }}
            >
              <span className="text-gradient-spidey">ANSAR ALI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={phase >= 3 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="text-muted-foreground text-sm tracking-[0.5em] uppercase mt-4"
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpideyIntro;
