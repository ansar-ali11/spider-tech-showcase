import { motion } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-4 border-2 border-primary/30 rounded-lg rotate-3" />
              <div className="absolute inset-4 border-2 border-secondary/30 rounded-lg -rotate-3" />
              <div className="relative bg-card rounded-lg p-8 border border-border flex flex-col items-center justify-center gap-6 h-full">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center glow-red">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-16 h-16 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center glow-blue">
                    <Layers className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center glow-red">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-3xl font-bold text-gradient-spidey">
                    Full Stack
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Java · Angular · Spring Boot · React
                  </p>
                </div>
                {/* Web pattern decoration */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/20 rounded-br-lg" />
              </div>
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
