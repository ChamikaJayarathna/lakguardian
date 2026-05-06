import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { contactInfo, contactMap } from "@/data/contact.data";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { fadeUp, slideLeft, slideRight, VIEWPORT } from "@/lib/animations";

const ContactUs = () => {
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent. We'll be in touch soon.",
        });
        event.target.reset();
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Send Request
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="glass-card rounded-2xl p-8 lg:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideLeft}
          >
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm text-muted-foreground mb-2 block"
                >
                  Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm text-muted-foreground mb-2 block"
                >
                  Email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm text-muted-foreground mb-2 block"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your Message..."
                  className="bg-secondary/50 border-border/50 focus:border-primary min-h-[150px] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSending}
                className="w-full gold-gradient text-primary-foreground font-semibold shadow-gold hover:opacity-90 transition-opacity h-14 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSending ? "Sending…" : "Send Message"}
              </Button>

              {status?.type && (
                <div
                  className={`contact-form__status contact-form__status--${status?.type}`}
                >
                  {status?.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <span>{status?.message}</span>
                </div>
              )}
            </form>
          </motion.div>

          {/* Map & Contact Info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideRight}
          >
            <div className="glass-card rounded-2xl overflow-hidden h-64 relative">
              <iframe
                title={contactMap?.title}
                src={contactMap?.embedUrl}
                width="100%"
                height="100%"
                className="contact-map__iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
              />
              <a
                href={contactMap?.directionsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Lak Guardian directions in Google Maps"
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
              <div className="absolute inset-0 bg-gradient-contact-transparent pointer-events-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {contactInfo?.map((info, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-5 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {info?.label}
                    </span>
                  </div>
                  <p className="font-semibold text-foreground">{info?.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
