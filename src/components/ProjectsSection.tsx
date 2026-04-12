import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Globe } from "lucide-react";
import { useState } from "react";

interface ProjectLink {
  label: string;
  href: string;
  isGithub?: boolean;
}

interface Project {
  tag: string;
  title: string;
  desc: string;
  links: ProjectLink[];
  liveUrl?: string;
  featured?: boolean;
  tech?: string[];
}

const projects: Project[] = [
  {
    tag: "Capstone Project",
    title: "Foodie",
    desc: "Full-stack food ordering system with real-time order tracking, restaurant management, and seamless payment integration.",
    featured: true,
    tech: ["Angular", "Spring Boot", "MySQL", "Firebase"],
    liveUrl: "https://food-ordering-system-be2b2.web.app",
    links: [
      { label: "Live Demo", href: "https://food-ordering-system-be2b2.web.app" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/Foodie-Capstone", isGithub: true },
    ],
  },
  {
    tag: "E-Commerce",
    title: "Rupto E-commerce",
    desc: "Full-stack E-Commerce app built with Angular, Spring Boot, REST APIs, and MySQL. Features user authentication, shopping cart, and secure payment system.",
    tech: ["Angular", "Spring Boot", "REST", "MySQL"],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/posts/mohammad-ansar-ali-0602602b9_ecommerce-fullstackdevelopment-angular-activity-7294315832707305472-n3pZ" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/Rupto", isGithub: true },
    ],
  },
  {
    tag: "Team Project",
    title: "Travel Website",
    desc: "Discover the best of every city — a curated travel platform with insider tips, must-visit attractions, and hidden gems for every traveler.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveUrl: "https://travel-4aa2a.web.app/",
    links: [
      { label: "Live Demo", href: "https://travel-4aa2a.web.app/" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/teamproject1", isGithub: true },
    ],
  },
  {
    tag: "Hibernate Project",
    title: "Blood For U",
    desc: "Blood Donation Management System built with JSP, Servlets, Hibernate, and MySQL — connecting donors and recipients for life-saving emergencies.",
    tech: ["JSP", "Servlets", "Hibernate", "MySQL"],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/posts/mohammad-ansar-ali-0602602b9_realtimeproject-hibernate-jsp-activity-7294755046078992385-Y0yb" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/hibernate-blood-donation", isGithub: true },
    ],
  },
  {
    tag: "React Project",
    title: "Movie Finder",
    desc: "A movie search app built with React and OMDb API — search for movies, view posters and details, with paginated results.",
    tech: ["React", "OMDb API", "CSS"],
    liveUrl: "https://movie-af758.web.app/",
    links: [
      { label: "Live Demo", href: "https://movie-af758.web.app/" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/react-moviefinder", isGithub: true },
    ],
  },
  {
    tag: "Spring MVC",
    title: "Student Management",
    desc: "Student management system built with Spring Boot, Thymeleaf, and Hibernate for CRUD operations on student records.",
    tech: ["Spring Boot", "Thymeleaf", "Hibernate"],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/posts/mohammad-ansar-ali-0602602b9_springboot-thymeleaf-hibernate-activity-7292824661094989824-76Bq" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/Spring-MVC", isGithub: true },
    ],
  },
  {
    tag: "Frontend Project",
    title: "Rock Paper Scissors",
    desc: "Interactive game built with HTML, CSS, and JavaScript — compete against the computer with score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://rockpacsci.netlify.app/",
    links: [
      { label: "Live Demo", href: "https://rockpacsci.netlify.app/" },
      { label: "GitHub", href: "https://github.com/ansar-ali11/RPS", isGithub: true },
    ],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [showPreview, setShowPreview] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`group relative bg-background rounded-xl border border-border flex flex-col overflow-hidden hover:border-primary/50 transition-all duration-500 ${
        project.featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-primary/30">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      {/* Live preview area */}
      {project.liveUrl && (
        <div className="relative w-full overflow-hidden bg-muted" style={{ height: project.featured ? 280 : 200 }}>
          {showPreview ? (
            <iframe
              src={project.liveUrl}
              className="w-full h-full border-0 pointer-events-none"
              title={`${project.title} preview`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              style={{ transform: "scale(0.6)", transformOrigin: "top left", width: "166.67%", height: "166.67%" }}
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center cursor-pointer group/preview relative"
              onClick={() => setShowPreview(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-3"
              >
                <Globe className="w-7 h-7 text-primary" />
              </motion.div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider relative z-10">Click to preview</p>
              {/* Web decoration on preview placeholder */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 200">
                <line x1="0" y1="0" x2="200" y2="100" stroke="hsl(var(--spidey-red))" strokeWidth="0.5" />
                <line x1="400" y1="0" x2="200" y2="100" stroke="hsl(var(--spidey-red))" strokeWidth="0.5" />
                <line x1="0" y1="200" x2="200" y2="100" stroke="hsl(var(--spidey-blue))" strokeWidth="0.5" />
                <line x1="400" y1="200" x2="200" y2="100" stroke="hsl(var(--spidey-blue))" strokeWidth="0.5" />
                <circle cx="200" cy="100" r="40" fill="none" stroke="hsl(var(--spidey-red))" strokeWidth="0.5" />
                <circle cx="200" cy="100" r="70" fill="none" stroke="hsl(var(--spidey-blue))" strokeWidth="0.3" />
              </svg>
            </div>
          )}
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tag */}
        <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full w-fit mb-3 ${
          isEven ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
        }`}>
          {project.tag}
        </span>

        <h3 className="font-heading text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{project.desc}</p>

        {/* Tech stack */}
        {project.tech && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded border border-border text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 flex-wrap">
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
              {link.isGithub ? <Github className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hover glow line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity ${
        isEven ? "bg-gradient-spidey" : "bg-gradient-to-r from-secondary to-primary"
      }`} />

      {/* Corner web accent */}
      <svg className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-20 transition-opacity duration-500" viewBox="0 0 100 100">
        <path d="M100,0 Q60,10 50,50" stroke="hsl(var(--spidey-red))" fill="none" strokeWidth="0.8" />
        <path d="M100,0 Q90,40 50,50" stroke="hsl(var(--spidey-blue))" fill="none" strokeWidth="0.5" />
        <path d="M100,0 L50,50" stroke="hsl(var(--spidey-red))" fill="none" strokeWidth="0.3" />
      </svg>
    </motion.div>
  );
};

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
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
