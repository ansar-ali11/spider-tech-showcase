import { motion } from "framer-motion";

const skills = [
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", desc: "Frontend & Scalable SPAs" },
  { name: "Spring Boot", icon: "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/spring-boot/spring-boot.png", desc: "Backend APIs & Microservices" },
  { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png", desc: "Core Logic & Applications" },
  { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", desc: "Modern UI Development" },
  { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", desc: "Database Design & Optimization" },
  { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", desc: "Scripting & Automation" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            Tech Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            My <span className="text-gradient-spidey">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative p-6 rounded-lg border border-border bg-card hover:${
                i % 2 === 0 ? "border-glow-red" : "border-glow-blue"
              } transition-all duration-500 text-center`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-muted/50 p-3 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl font-bold mb-1">
                {skill.name}
              </h3>
              <p className="text-xs text-muted-foreground">{skill.desc}</p>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                  i % 2 === 0 ? "border-primary" : "border-secondary"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                  i % 2 === 0 ? "border-primary" : "border-secondary"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
