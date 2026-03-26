import { motion } from "framer-motion";

const SectionDivider = ({ variant = "red" }: { variant?: "red" | "blue" }) => {
  const color = variant === "red" ? "--spidey-red" : "--spidey-blue";

  return (
    <div className="relative h-16 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] w-2/3 origin-center"
        style={{ background: `linear-gradient(90deg, transparent, hsl(var(${color})), transparent)` }}
      />
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="absolute w-3 h-3 border border-current rotate-45"
        style={{ borderColor: `hsl(var(${color}))`, boxShadow: `0 0 10px hsl(var(${color}) / 0.5)` }}
      />
    </div>
  );
};

export default SectionDivider;
