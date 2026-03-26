import { motion } from "framer-motion";
import { useState } from "react";
import { Award, X } from "lucide-react";
import certRedhat from "@/assets/cert-redhat.png";
import certPythonDs from "@/assets/cert-python-ds.png";
import certCisco from "@/assets/cert-cisco.png";
import certPostman from "@/assets/cert-postman.png";
import certNiit from "@/assets/cert-niit.jpg";
import certPythonNsdc from "@/assets/cert-python-nsdc.png";
import certJavascript from "@/assets/cert-javascript.png";
import badgePostman from "@/assets/badge-postman.png";

const certificates = [
  { title: "Linux Fundamentals (RH104)", issuer: "Red Hat", date: "Oct 2024", image: certRedhat },
  { title: "Python 101 for Data Science", issuer: "IBM / Cognitive Class", date: "Oct 2024", image: certPythonDs },
  { title: "Intro to Cybersecurity", issuer: "Cisco", date: "Oct 2024", image: certCisco },
  { title: "API Fundamentals Expert", issuer: "Postman", date: "Oct 2024", image: certPostman },
  { title: "Professional Edge (Outstanding)", issuer: "NIIT Foundation", date: "Jun 2024", image: certNiit },
  { title: "Python Programming", issuer: "NSDC / Skill India", date: "Feb 2025", image: certPythonNsdc },
  { title: "JavaScript Course", issuer: "Scaler Topics", date: "Dec 2024", image: certJavascript },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-24 md:py-32 relative overflow-hidden spidey-particles">
      {/* Floating web lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-40 opacity-10"
            style={{
              background: `linear-gradient(90deg, transparent, hsl(var(--spidey-${i % 2 === 0 ? 'red' : 'blue'})), transparent)`,
              top: `${15 + i * 18}%`,
              left: `${-10 + i * 20}%`,
            }}
            animate={{ x: [0, 100, 0], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            My <span className="text-gradient-spidey">Certificates</span>
          </h2>
        </motion.div>

        {/* Badge highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-spidey rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
            <img
              src={badgePostman}
              alt="Postman API Fundamentals Badge"
              className="w-28 h-28 rounded-full relative z-10 border-2 border-primary/50"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedCert(i)}
              className={`group cursor-pointer relative rounded-lg overflow-hidden border border-border bg-card hover:${i % 2 === 0 ? 'border-glow-red' : 'border-glow-blue'} transition-all duration-500`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-4 relative">
                <div className="flex items-start gap-3">
                  <Award className={`w-5 h-5 mt-0.5 shrink-0 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />
                  <div>
                    <h3 className="font-heading text-lg font-bold leading-tight">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity ${i % 2 === 0 ? 'border-primary' : 'border-secondary'}`} />
              <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity ${i % 2 === 0 ? 'border-primary' : 'border-secondary'}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedCert !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <X size={28} />
            </button>
            <img
              src={certificates[selectedCert].image}
              alt={certificates[selectedCert].title}
              className="w-full rounded-lg border border-border glow-red"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;
