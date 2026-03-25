import { motion } from "framer-motion";
import { Brush, Server, Component, Database } from "lucide-react";

const services = [
  {
    icon: Brush,
    title: "Web Design",
    desc: "Creating customized and responsive websites tailored to your brand using cutting-edge technologies like HTML5, CSS3, and modern frameworks.",
    color: "red" as const,
  },
  {
    icon: Server,
    title: "Backend",
    desc: "Robust backend development services using Spring Boot and Hibernate, designing scalable server-side solutions with secure API connectivity.",
    color: "blue" as const,
  },
  {
    icon: Component,
    title: "Angular Framework",
    desc: "Dynamic and interactive frontend solutions using Angular, crafting responsive and scalable web applications with seamless user experiences.",
    color: "red" as const,
  },
  {
    icon: Database,
    title: "Database",
    desc: "Robust database solutions using MySQL, ensuring data integrity, security, and scalability with performance optimization.",
    color: "blue" as const,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-card/50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            My <span className="text-gradient-spidey">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-8 rounded-lg border border-border bg-background hover:${
                service.color === "red" ? "border-glow-red" : "border-glow-blue"
              } transition-all duration-500 cursor-pointer`}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${
                  service.color === "red"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
