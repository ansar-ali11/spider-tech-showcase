import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9502486784", href: "tel:+919502486784" },
  { icon: Mail, label: "Email", value: "mohammadansarali544@gmail.com", href: "mailto:mohammadansarali544@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Mohammad Ansar Ali", href: "https://www.linkedin.com/in/mohammad-ansar-ali-0602602b9" },
  { icon: Github, label: "GitHub", value: "ansar-ali11", href: "https://github.com/ansar-ali11" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Get In <span className="text-gradient-spidey">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group p-6 rounded-lg border border-border bg-card text-center hover:${
                i % 2 === 0 ? "border-glow-red" : "border-glow-blue"
              } transition-all duration-500`}
            >
              <div
                className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                  i % 2 === 0
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-lg font-bold mb-1">
                {item.label}
              </h4>
              <p className="text-xs text-muted-foreground break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Ready to build something amazing together? Let's start a conversation!
          </p>
          <a
            href="mailto:mohammadansarali544@gmail.com"
            className="inline-flex px-8 py-3 text-sm font-semibold uppercase tracking-widest bg-gradient-spidey text-primary-foreground rounded-sm hover:opacity-90 transition-opacity glow-red"
          >
            Send Me a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
