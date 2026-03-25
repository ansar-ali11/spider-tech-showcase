import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = ["Developer", "Designer", "Public Speaker"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          if (displayText.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div
          className="absolute w-full h-[2px] bg-primary/20"
          style={{ animation: "scan-line 4s linear infinite" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4"
          >
            Hi, My name is Ansar
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] mb-6"
          >
            I'm a{" "}
            <span className="text-gradient-spidey">
              {displayText}
              <span className="animate-pulse-glow text-primary">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-xl"
          >
            From Kakinada, Andhra Pradesh — Weaving code into powerful web
            experiences with the precision of a spider's web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#about"
              className="px-8 py-3 text-sm font-semibold uppercase tracking-widest bg-gradient-spidey text-primary-foreground rounded-sm hover:opacity-90 transition-opacity glow-red"
            >
              About Me
            </a>
            <a
              href="https://drive.google.com/file/d/1gQXQa-ICkaEPcDIP4KwMEyVe9pbf8XiN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-semibold uppercase tracking-widest border border-primary text-primary rounded-sm hover:bg-primary hover:text-primary-foreground transition-all border-glow-red"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 flex gap-12 md:gap-20"
        >
          <div>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-gradient-spidey">
              10+
            </h3>
            <p className="text-sm text-muted-foreground mt-1">Projects</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-gradient-spidey">
              50+
            </h3>
            <p className="text-sm text-muted-foreground mt-1">Appreciations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
