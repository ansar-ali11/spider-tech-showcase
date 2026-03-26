import { motion } from "framer-motion";
import { Code, Trophy, Target, Zap, ExternalLink } from "lucide-react";

const totalSolved = 70;
const easySolved = 58;
const mediumSolved = 12;
const hardSolved = 0;
const totalEasy = 933;
const totalMedium = 2030;
const totalHard = 916;

const CircularProgress = ({
  solved,
  total,
  color,
  label,
  size = 100,
  delay = 0,
}: {
  solved: number;
  total: number;
  color: string;
  label: string;
  size?: number;
  delay?: number;
}) => {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (solved / total) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - progress }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-heading font-bold text-foreground">{solved}</span>
          <span className="text-[10px] text-muted-foreground">/{total}</span>
        </div>
      </div>
      <span className="text-xs font-medium mt-2" style={{ color }}>
        {label}
      </span>
    </motion.div>
  );
};

// Generate LeetCode-style activity heatmap
const generateActivity = () => {
  const months = [];
  for (let m = 0; m < 12; m++) {
    const days = [];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
    for (let d = 0; d < daysInMonth; d++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.7) level = 1;
      if (rand > 0.85) level = 2;
      if (rand > 0.95) level = 3;
      days.push(level);
    }
    months.push(days);
  }
  return months;
};

const activity = generateActivity();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const activityColors = [
  "hsl(var(--muted))",
  "hsl(var(--spidey-blue) / 0.3)",
  "hsl(var(--spidey-blue) / 0.6)",
  "hsl(var(--spidey-blue))",
];

const LeetCodeSection = () => {
  return (
    <section id="leetcode" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-secondary mb-3">
            Problem Solving
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            LeetCode <span className="text-gradient-spidey">Journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Big donut + difficulty breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg border border-border bg-card"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-5 h-5 text-secondary" />
              <span className="font-heading text-lg font-bold">Problems Solved</span>
            </div>

            {/* Main circle */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-40 h-40">
                <svg width="160" height="160" className="-rotate-90">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                  <motion.circle
                    cx="80" cy="80" r="70"
                    fill="none"
                    stroke="url(#leetGradient)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 70}
                    initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 70 * (1 - totalSolved / 3879) }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="leetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--spidey-red))" />
                      <stop offset="100%" stopColor="hsl(var(--spidey-blue))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-heading font-bold text-foreground">{totalSolved}</span>
                  <span className="text-xs text-muted-foreground">Solved</span>
                </div>
              </div>
            </div>

            {/* Difficulty breakdown */}
            <div className="flex justify-center gap-8">
              <CircularProgress solved={easySolved} total={totalEasy} color="#22c55e" label="Easy" size={80} delay={0.2} />
              <CircularProgress solved={mediumSolved} total={totalMedium} color="#f59e0b" label="Medium" size={80} delay={0.4} />
              <CircularProgress solved={hardSolved} total={totalHard} color="#ef4444" label="Hard" size={80} delay={0.6} />
            </div>
          </motion.div>

          {/* Right: Stats + Activity */}
          <div className="space-y-6">
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Trophy, label: "Ranking", value: "#1,928,754", accent: "text-primary" },
                { icon: Target, label: "Acceptance", value: "82.8%", accent: "text-secondary" },
                { icon: Zap, label: "Streak", value: "Active", accent: "text-primary" },
                { icon: Code, label: "Languages", value: "Java, Python", accent: "text-secondary" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-lg border border-border bg-card text-center"
                >
                  <stat.icon className={`w-5 h-5 mx-auto mb-1 ${stat.accent}`} />
                  <p className="text-lg font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Activity heatmap */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-5 rounded-lg border border-border bg-card"
            >
              <p className="text-sm font-medium text-muted-foreground mb-3">Submission Activity</p>
              <div className="space-y-1 overflow-x-auto">
                {activity.map((month, mi) => (
                  <div key={mi} className="flex items-center gap-1">
                    <span className="text-[9px] text-muted-foreground w-7 shrink-0">{monthNames[mi]}</span>
                    <div className="flex gap-[2px]">
                      {month.map((level, di) => (
                        <div
                          key={di}
                          className="w-[8px] h-[8px] rounded-[1px]"
                          style={{ background: activityColors[level] }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://leetcode.com/u/ansar_ali11/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-secondary text-secondary font-semibold rounded-sm hover:bg-secondary hover:text-secondary-foreground transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            View LeetCode Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
