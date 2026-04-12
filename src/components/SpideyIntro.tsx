import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const SpideyIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  // Pre-generate random values so they don't change on re-render
  const particles = useMemo(() =>
    Array.from({ length: 40 }).map(() => ({
      dx: (Math.random() - 0.5) * 800,
      dy: (Math.random() - 0.5) * 800,
      size: 2 + Math.random() * 5,
      dur: 2 + Math.random() * 2,
      delay: Math.random() * 1.2,
    })), []);

  const sparks = useMemo(() =>
    Array.from({ length: 16 }).map((_, i) => ({
      angle: (i / 16) * 360,
      dist: 120 + Math.random() * 180,
      size: 1.5 + Math.random() * 3,
      delay: Math.random() * 0.5,
    })), []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2400),
      setTimeout(() => setPhase(4), 3400),
      setTimeout(() => setPhase(5), 4200),
      setTimeout(() => onComplete(), 4800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 5 && (
        <motion.div
          exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Deep background vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--background))_80%)]" />

          {/* Floating particles */}
          {particles.map((p, i) => (
            <motion.div
              key={`p-${i}`}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={phase >= 1 ? {
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                x: [0, p.dx],
                y: [0, p.dy],
              } : {}}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, repeatType: "loop" }}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: i % 3 === 0 ? "hsl(var(--spidey-red))" : i % 3 === 1 ? "hsl(var(--spidey-blue))" : "hsl(var(--foreground))",
                left: "50%",
                top: "50%",
                filter: "blur(0.5px)",
              }}
            />
          ))}

          {/* Web radial lines */}
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={phase >= 1 ? { scaleY: 1, opacity: 0.12 } : {}}
              transition={{ delay: i * 0.025, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-[250vh] w-[1px] origin-center"
              style={{
                background: i % 3 === 0
                  ? `linear-gradient(to bottom, transparent 10%, hsl(var(--spidey-red) / 0.6) 50%, transparent 90%)`
                  : `linear-gradient(to bottom, transparent 10%, hsl(var(--spidey-blue) / 0.4) 50%, transparent 90%)`,
                transform: `rotate(${i * 15}deg)`,
              }}
            />
          ))}

          {/* Concentric web rings */}
          {[60, 120, 200, 300, 420, 560].map((size, i) => (
            <motion.div
              key={`ring-${size}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 1 ? { scale: [0, 1.15, 1], opacity: [0, 0.25, 0.12] } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                border: `1px solid ${i % 2 === 0 ? "hsl(var(--spidey-red) / 0.35)" : "hsl(var(--spidey-blue) / 0.25)"}`,
              }}
            />
          ))}

          {/* Web connector curves between rings */}
          <svg className="absolute w-[560px] h-[560px]" viewBox="0 0 560 560" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const points = [60, 120, 200, 300, 420].map(r => ({
                x: 280 + Math.cos(rad) * (r / 2),
                y: 280 + Math.sin(rad) * (r / 2),
              }));
              return (
                <motion.path
                  key={`curve-${i}`}
                  d={`M${points[0].x},${points[0].y} ${points.slice(1).map(p => `L${p.x},${p.y}`).join(" ")}`}
                  stroke={i % 2 === 0 ? "hsl(var(--spidey-red))" : "hsl(var(--spidey-blue))"}
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.15"
                  initial={{ pathLength: 0 }}
                  animate={phase >= 1 ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.6 }}
                />
              );
            })}
          </svg>

          {/* Explosion sparks on phase 2 */}
          {sparks.map((s, i) => {
            const rad = (s.angle * Math.PI) / 180;
            return (
              <motion.div
                key={`spark-${i}`}
                initial={{ opacity: 0, x: 0, y: 0, scale: 1 }}
                animate={phase >= 2 ? {
                  opacity: [0, 1, 0],
                  x: [0, Math.cos(rad) * s.dist],
                  y: [0, Math.sin(rad) * s.dist],
                  scale: [1, 0.3],
                } : {}}
                transition={{ duration: 0.8, delay: s.delay, ease: "easeOut" }}
                className="absolute rounded-full"
                style={{
                  width: s.size,
                  height: s.size,
                  background: i % 2 === 0 ? "hsl(var(--spidey-red))" : "hsl(var(--spidey-blue))",
                  left: "50%",
                  top: "50%",
                  boxShadow: `0 0 6px ${i % 2 === 0 ? "hsl(var(--spidey-glow-red))" : "hsl(var(--spidey-glow-blue))"}`,
                }}
              />
            );
          })}

          {/* Shockwave rings */}
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.div
              key={`shock-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 2 ? { scale: [0, 4], opacity: [0.4, 0] } : {}}
              transition={{ duration: 1.2, delay, ease: "easeOut" }}
              className="absolute rounded-full"
              style={{
                width: 100,
                height: 100,
                border: `2px solid ${i === 1 ? "hsl(var(--spidey-blue) / 0.5)" : "hsl(var(--spidey-red) / 0.5)"}`,
              }}
            />
          ))}

          {/* Main spider symbol */}
          <motion.div
            initial={{ scale: 0, rotate: -270 }}
            animate={phase >= 0 ? { scale: [0, 1.3, 1], rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <motion.div
              animate={phase >= 2 ? {
                filter: [
                  "drop-shadow(0 0 15px hsl(var(--spidey-glow-red))) drop-shadow(0 0 40px hsl(var(--spidey-glow-red) / 0.3))",
                  "drop-shadow(0 0 40px hsl(var(--spidey-glow-red))) drop-shadow(0 0 80px hsl(var(--spidey-glow-blue) / 0.4))",
                  "drop-shadow(0 0 20px hsl(var(--spidey-glow-red))) drop-shadow(0 0 50px hsl(var(--spidey-glow-red) / 0.2))",
                ],
              } : {
                filter: "drop-shadow(0 0 10px hsl(var(--spidey-glow-red) / 0.5))",
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <svg width="120" height="120" viewBox="0 0 100 100">
                {/* Spider body with gradient */}
                <defs>
                  <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="hsl(var(--spidey-glow-red))" />
                    <stop offset="100%" stopColor="hsl(var(--spidey-red))" />
                  </radialGradient>
                  <radialGradient id="abdomenGrad" cx="50%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="hsl(var(--spidey-glow-red))" />
                    <stop offset="100%" stopColor="hsl(var(--spidey-red))" />
                  </radialGradient>
                </defs>
                <motion.ellipse cx="50" cy="42" rx="9" ry="13" fill="url(#bodyGrad)"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} />
                <motion.ellipse cx="50" cy="62" rx="13" ry="17" fill="url(#abdomenGrad)"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} />
                {/* Marking on abdomen */}
                <motion.path d="M50,50 L45,65 L50,58 L55,65 Z" fill="hsl(var(--background))" opacity="0.3"
                  initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 0.5 }} />
                {/* Eyes - menacing */}
                <motion.ellipse cx="45" cy="38" rx="4" ry="5" fill="hsl(var(--background))"
                  initial={{ scale: 0 }} animate={phase >= 1 ? { scale: 1 } : {}} transition={{ delay: 0.5, duration: 0.3, ease: "backOut" }} />
                <motion.ellipse cx="55" cy="38" rx="4" ry="5" fill="hsl(var(--background))"
                  initial={{ scale: 0 }} animate={phase >= 1 ? { scale: 1 } : {}} transition={{ delay: 0.55, duration: 0.3, ease: "backOut" }} />
                {/* Eye shine */}
                <motion.ellipse cx="46.5" cy="37" rx="1.5" ry="2" fill="hsl(var(--spidey-glow-red) / 0.6)"
                  initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: [0, 1] } : {}} transition={{ delay: 0.7 }} />
                <motion.ellipse cx="56.5" cy="37" rx="1.5" ry="2" fill="hsl(var(--spidey-glow-red) / 0.6)"
                  initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: [0, 1] } : {}} transition={{ delay: 0.75 }} />
                {/* Legs with thicker strokes */}
                {[
                  "M38,38 Q22,22 8,12", "M62,38 Q78,22 92,12",
                  "M35,46 Q16,46 3,38", "M65,46 Q84,46 97,38",
                  "M36,56 Q18,64 6,76", "M64,56 Q82,64 94,76",
                  "M40,68 Q26,82 15,93", "M60,68 Q74,82 85,93",
                ].map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="hsl(var(--spidey-red))"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={phase >= 0 ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                  />
                ))}
              </svg>
            </motion.div>
          </motion.div>

          {/* Orbiting dots around spider */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`orbit-${i}`}
              initial={{ opacity: 0 }}
              animate={phase >= 2 ? { opacity: 1, rotate: 360 } : {}}
              transition={{ opacity: { duration: 0.3 }, rotate: { duration: 3 + i, repeat: Infinity, ease: "linear" } }}
              className="absolute"
              style={{ width: 140 + i * 50, height: 140 + i * 50 }}
            >
              <div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i === 1 ? "hsl(var(--spidey-blue))" : "hsl(var(--spidey-red))",
                  boxShadow: `0 0 8px ${i === 1 ? "hsl(var(--spidey-glow-blue))" : "hsl(var(--spidey-glow-red))"}`,
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </motion.div>
          ))}

          {/* Name reveal */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={phase >= 3 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[26%] text-center"
          >
            <motion.h1
              className="font-heading text-5xl md:text-8xl font-bold tracking-wider leading-none"
              animate={phase >= 4 ? {
                textShadow: [
                  "3px 0 hsl(var(--spidey-red)), -3px 0 hsl(var(--spidey-blue))",
                  "-2px 0 hsl(var(--spidey-red)), 2px 0 hsl(var(--spidey-blue))",
                  "0 0 transparent, 0 0 transparent",
                ],
              } : {}}
              transition={{ duration: 0.1, repeat: 4, repeatType: "mirror" }}
            >
              <span className="text-gradient-spidey">ANSAR ALI</span>
            </motion.h1>

            {/* Typing effect subtitle */}
            <motion.div
              initial={{ width: 0 }}
              animate={phase >= 3 ? { width: "auto" } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="overflow-hidden mx-auto mt-4"
            >
              <p className="text-muted-foreground text-sm md:text-base tracking-[0.5em] uppercase whitespace-nowrap">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Decorative web lines under text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={phase >= 4 ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 mt-5"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={phase >= 4 ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="h-[1px] w-16 origin-right"
                style={{ background: "linear-gradient(to left, hsl(var(--spidey-red)), transparent)" }}
              />
              <motion.div
                animate={phase >= 4 ? { rotate: 360 } : {}}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 rounded-full border border-primary"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={phase >= 4 ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="h-[1px] w-16 origin-left"
                style={{ background: "linear-gradient(to right, hsl(var(--spidey-red)), transparent)" }}
              />
            </motion.div>
          </motion.div>

          {/* Corner web decorations */}
          {["top-0 left-0", "top-0 right-0 scale-x-[-1]", "bottom-0 left-0 scale-y-[-1]", "bottom-0 right-0 scale-[-1]"].map((pos, i) => (
            <motion.div
              key={`corner-${i}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={phase >= 1 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
              className={`absolute ${pos} w-56 h-56`}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Multi-layer web */}
                {[5, 15, 30, 50].map((q, j) => (
                  <motion.path
                    key={`h-${j}`}
                    d={`M0,0 Q${q * 2},${q} 100,0`}
                    stroke="hsl(var(--spidey-red))"
                    fill="none"
                    strokeWidth="0.3"
                    opacity={0.25 - j * 0.04}
                    initial={{ pathLength: 0 }}
                    animate={phase >= 1 ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.3 + j * 0.1, duration: 0.5 }}
                  />
                ))}
                {[5, 15, 30, 50].map((q, j) => (
                  <motion.path
                    key={`v-${j}`}
                    d={`M0,0 Q${q},${q * 2} 0,100`}
                    stroke="hsl(var(--spidey-red))"
                    fill="none"
                    strokeWidth="0.3"
                    opacity={0.25 - j * 0.04}
                    initial={{ pathLength: 0 }}
                    animate={phase >= 1 ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.35 + j * 0.1, duration: 0.5 }}
                  />
                ))}
                <motion.path d="M0,0 L100,100" stroke="hsl(var(--spidey-red))" fill="none" strokeWidth="0.3" opacity="0.15"
                  initial={{ pathLength: 0 }} animate={phase >= 1 ? { pathLength: 1 } : {}} transition={{ delay: 0.5, duration: 0.4 }} />
                <motion.path d="M0,0 Q30,15 50,50" stroke="hsl(var(--spidey-blue))" fill="none" strokeWidth="0.3" opacity="0.2"
                  initial={{ pathLength: 0 }} animate={phase >= 1 ? { pathLength: 1 } : {}} transition={{ delay: 0.55, duration: 0.4 }} />
                <motion.path d="M0,0 Q15,30 50,50" stroke="hsl(var(--spidey-blue))" fill="none" strokeWidth="0.3" opacity="0.2"
                  initial={{ pathLength: 0 }} animate={phase >= 1 ? { pathLength: 1 } : {}} transition={{ delay: 0.6, duration: 0.4 }} />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpideyIntro;
