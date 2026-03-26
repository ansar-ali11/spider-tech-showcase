import { motion } from "framer-motion";
import { Github, GitFork, Star, Users, Code2, ExternalLink } from "lucide-react";

const stats = [
  { label: "Repositories", value: "43+", icon: Code2 },
  { label: "Contributions", value: "105+", icon: GitFork },
  { label: "Followers", value: "2", icon: Users },
  { label: "Stars Earned", value: "5+", icon: Star },
];

const pinnedRepos = [
  { name: "Foodie-Capstone", desc: "Full-stack food ordering platform with Spring Boot & Angular", lang: "Java", color: "hsl(var(--spidey-red))" },
  { name: "netflix", desc: "Netflix clone built with HTML, CSS & JavaScript", lang: "HTML/CSS/JS", color: "hsl(var(--spidey-blue))" },
  { name: "JFS", desc: "Java Full Stack development projects & exercises", lang: "Java", color: "hsl(var(--spidey-red))" },
  { name: "javascript", desc: "JavaScript fundamentals, DOM manipulation & projects", lang: "JavaScript", color: "#f7df1e" },
  { name: "Activities", desc: "Coding activities and practice assignments", lang: "Java", color: "hsl(var(--spidey-red))" },
  { name: "webpage", desc: "Responsive web pages with modern design", lang: "HTML/CSS", color: "hsl(var(--spidey-blue))" },
];

// Generate a fake contribution grid (52 weeks x 7 days)
const generateContributions = () => {
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.6) level = 1;
      if (rand > 0.75) level = 2;
      if (rand > 0.88) level = 3;
      if (rand > 0.95) level = 4;
      days.push(level);
    }
    weeks.push(days);
  }
  return weeks;
};

const contributions = generateContributions();

const levelColors = [
  "hsl(var(--muted))",
  "hsl(var(--spidey-red) / 0.3)",
  "hsl(var(--spidey-red) / 0.5)",
  "hsl(var(--spidey-red) / 0.7)",
  "hsl(var(--spidey-red))",
];

const GitHubSection = () => {
  return (
    <section id="github" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            Open Source
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            GitHub <span className="text-gradient-spidey">Contributions</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center p-5 rounded-lg border border-border bg-card hover:${i % 2 === 0 ? "border-glow-red" : "border-glow-blue"} transition-all duration-500`}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-3xl font-heading font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-6 rounded-lg border border-border bg-card mb-12 overflow-x-auto"
        >
          <div className="flex items-center gap-2 mb-4">
            <Github className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">105 contributions in the last year</span>
          </div>
          <div className="flex gap-[3px] min-w-[700px]">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((level, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (wi * 7 + di) * 0.001 }}
                    className="w-[11px] h-[11px] rounded-[2px]"
                    style={{ background: levelColors[level] }}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <span>Less</span>
            {levelColors.map((color, i) => (
              <div key={i} className="w-[11px] h-[11px] rounded-[2px]" style={{ background: color }} />
            ))}
            <span>More</span>
          </div>
        </motion.div>

        {/* Pinned Repos */}
        <div className="grid md:grid-cols-2 gap-4">
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/ansar-ali11/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="group p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{repo.desc}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-3 h-3 rounded-full" style={{ background: repo.color }} />
                <span className="text-xs text-muted-foreground">{repo.lang}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/ansar-ali11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-spidey text-primary-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            <Github className="w-5 h-5" />
            View Full Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
