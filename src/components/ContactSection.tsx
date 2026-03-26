import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9502486784", href: "tel:+919502486784" },
  { icon: Mail, label: "Email", value: "mohammadansarali544@gmail.com", href: "mailto:mohammadansarali544@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Mohammad Ansar Ali", href: "https://www.linkedin.com/in/mohammad-ansar-ali-0602602b9" },
  { icon: Github, label: "GitHub", value: "ansar-ali11", href: "https://github.com/ansar-ali11" },
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    emailjs
      .sendForm("service_pl5cqwk", "template_rarazk3", formRef.current, {
        publicKey: "8LuNireRT4ZLxO9Mf",
      })
      .then(() => {
        toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon!" });
        formRef.current?.reset();
      })
      .catch(() => {
        toast({ title: "Failed to send", description: "Something went wrong. Please try again.", variant: "destructive" });
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated web lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg border border-border bg-card relative group"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-lg transition-all group-hover:border-primary group-hover:w-16 group-hover:h-16 duration-500" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-secondary/50 rounded-br-lg transition-all group-hover:border-secondary group-hover:w-16 group-hover:h-16 duration-500" />

            <h3 className="font-heading text-2xl font-bold mb-6 text-gradient-spidey">
              Send Me a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-widest bg-gradient-spidey text-primary-foreground rounded-sm hover:opacity-90 transition-opacity glow-red disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {sending ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="text-muted-foreground mb-2">
              Get in touch with me to discuss your project, ask a question, or
              simply say hello! I'd love to hear from you and explore how I can
              help bring your ideas to life.
            </p>

            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    i % 2 === 0
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold">{item.label}</h4>
                  <p className="text-xs text-muted-foreground break-all">{item.value}</p>
                </div>
                {/* Hover glow line */}
                <div className={`ml-auto w-1 h-0 group-hover:h-8 rounded-full transition-all duration-300 ${
                  i % 2 === 0 ? "bg-primary" : "bg-secondary"
                }`} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
