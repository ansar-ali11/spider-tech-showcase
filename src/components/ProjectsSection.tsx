import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    tag: "Capstone Project",
    title: "Rupto E-commerce",
    desc: "Full-stack E-Commerce app built with Angular, Spring Boot, REST APIs, and MySQL. Features user authentication, shopping cart, and secure payment system.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/posts/mohammad-ansar-ali-0602602b9_ecommerce-fullstackdevelopment-angular-activity-7294315832707305472-n3pZ" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/Rupto", isGithub: true },
    ],
  },
  {
    tag: "Team Project",
    title: "Travel Website",
    desc: "Discover the best of every city — a curated travel platform with insider tips, must-visit attractions, and hidden gems for every traveler.",
    links: [
      { label: "Live Demo", href: "https://travel-4aa2a.web.app/" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/teamproject1", isGithub: true },
    ],
  },
  {
    tag: "Hibernate Project",
    title: "Blood For U",
    desc: "Blood Donation Management System built with JSP, Servlets, Hibernate, and MySQL — connecting donors and recipients for life-saving emergencies.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/posts/mohammad-ansar-ali-0602602b9_realtimeproject-hibernate-jsp-activity-7294755046078992385-Y0yb" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/hibernate-blood-donation", isGithub: true },
    ],
  },
  {
    tag: "React Project",
    title: "Movie Finder",
    desc: "A movie search app built with React and OMDb API — search for movies, view posters and details, with paginated results.",
    links: [
      { label: "Live Demo", href: "https://movie-af758.web.app/" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/react-moviefinder", isGithub: true },
    ],
  },
   {
    tag: "Angular Firebase Project",
    title: "Foodie",
    desc: "Real time food ordering system like swiggy and zomato track your order live.",
    links: [
      { label: "Live Demo", href: "https://food-ordering-system-be2b2.web.app/" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/Foodie-Capstone", isGithub: true },
    ],
  },
  {
    tag: "Spring MVC",
    title: "Student Management",
    desc: "Student management system built with Spring Boot, Thymeleaf, and Hibernate for CRUD operations on student records.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/posts/mohammad-ansar-ali-0602602b9_springboot-thymeleaf-hibernate-activity-7292824661094989824-76Bq" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/Spring-MVC", isGithub: true },
    ],
  },
  {
    tag: "Frontend Project",
    title: "Rock Paper Scissors",
    desc: "Interactive game built with HTML, CSS, and JavaScript — compete against the computer with score tracking.",
    links: [
      { label: "Live Demo", href: "https://rockpacsci.netlify.app/" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/RPS", isGithub: true },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-card/50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            Web Creations
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Latest <span className="text-gradient-spidey">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-background rounded-lg border border-border p-6 flex flex-col hover:border-primary/50 transition-all duration-500"
            >
              {/* Tag */}
              <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full w-fit mb-4 ${
                i % 2 === 0 
                  ? "bg-primary/10 text-primary" 
                  : "bg-secondary/10 text-secondary"
              }`}>
                {project.tag}
              </span>

              <h3 className="font-heading text-2xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {project.desc}
              </p>

              {/* Links */}
              <div className="flex gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-sm transition-all ${
                      link.isGithub
                        ? "border border-border text-foreground hover:border-secondary hover:text-secondary"
                        : "bg-gradient-spidey text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    {link.isGithub ? (
                      <Github className="w-3.5 h-3.5" />
                    ) : (
                      <ExternalLink className="w-3.5 h-3.5" />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Hover glow line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                i % 2 === 0 ? "bg-gradient-spidey" : "bg-gradient-to-r from-secondary to-primary"
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
