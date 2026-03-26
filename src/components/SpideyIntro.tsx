import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SpideyIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => onComplete(), 3600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Web lines radiating from center */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={phase >= 1 ? { scaleY: 1, opacity: 0.15 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="absolute h-[200vh] w-[1px] origin-center"
              style={{
                background: `linear-gradient(to bottom, transparent, hsl(var(--spidey-red)), transparent)`,
                transform: `rotate(${i * 30}deg)`,
              }}
            />
          ))}

          {/* Concentric web rings */}
          {[120, 220, 340].map((size, i) => (
            <motion.div
              key={size}
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 1 ? { scale: 1, opacity: 0.2 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: "easeOut" }}
              className="absolute rounded-full border border-primary/40"
              style={{ width: size, height: size }}
            />
          ))}

          {/* Spider symbol */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={phase >= 0 ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-[0_0_30px_hsl(var(--spidey-glow-red))]">
              {/* Spider body */}
              <ellipse cx="50" cy="45" rx="8" ry="12" fill="hsl(var(--spidey-red))" />
              <ellipse cx="50" cy="62" rx="12" ry="16" fill="hsl(var(--spidey-red))" />
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

          {/* Name reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="absolute bottom-[35%] text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-wider">
              <span className="text-gradient-spidey">Ansar Ali</span>
            </h1>
            <p className="text-muted-foreground text-sm tracking-[0.4em] uppercase mt-2">
              Portfolio
            </p>
          </motion.div>

          {/* Corner web decorations */}
          {["top-0 left-0", "top-0 right-0 scale-x-[-1]", "bottom-0 left-0 scale-y-[-1]", "bottom-0 right-0 scale-[-1]"].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`absolute ${pos} w-32 h-32`}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                <path d="M0,0 Q50,10 100,0" stroke="hsl(var(--spidey-red))" fill="none" strokeWidth="0.5" />
                <path d="M0,0 Q10,50 0,100" stroke="hsl(var(--spidey-red))" fill="none" strokeWidth="0.5" />
                <path d="M0,0 L100,100" stroke="hsl(var(--spidey-red))" fill="none" strokeWidth="0.3" />
                <path d="M0,0 Q40,20 60,60" stroke="hsl(var(--spidey-blue))" fill="none" strokeWidth="0.3" />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpideyIntro;
