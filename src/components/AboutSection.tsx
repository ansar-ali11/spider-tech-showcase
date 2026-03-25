import { motion } from "framer-motion";
import profileImg from "@/assets/ansar-profile.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Rotating border rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border-2 border-dashed border-secondary/30"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border border-dashed border-primary/20"
              />

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-primary glow-red" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3"
              >
                <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-secondary glow-blue" />
              </motion.div>

              {/* Glowing backdrop */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-xl" />

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-4 rounded-full overflow-hidden border-2 border-border"
              >
                <img
                  src={profileImg}
                  alt="Mohammad Ansar Ali"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </motion.div>

              {/* Corner accents */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg" />
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-secondary rounded-tl-lg" />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Java Full Stack Developer &{" "}
              <span className="text-gradient-spidey">UI/UX Trainee</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Aspiring Java full stack developer, showcasing myself as a very
              interested individual in innovation, creativity and learning new
              technologies. Having a very good knowledge in Java and developing
              new web innovations with responsiveness. Committed to delivering
              high-quality software solutions and contributing to innovative
              projects.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <h4 className="text-3xl font-heading font-bold text-primary">
                  10+
                </h4>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-heading font-bold text-secondary">
                  50+
                </h4>
                <p className="text-sm text-muted-foreground">Appreciations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
