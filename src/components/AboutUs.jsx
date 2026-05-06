import { motion } from "framer-motion";
import { CheckCircle2, Shield } from "lucide-react";
import aboutData from "@/data/about_us_data.json";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  VIEWPORT,
} from "@/lib/animations";

const AboutUs = () => {
  const { company, description = [], highlights } = aboutData;
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            About Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={staggerContainer}
          >
            {description?.map((text, index) => (
              <motion.p
                key={index}
                className="text-muted-foreground leading-relaxed"
                variants={slideLeft}
              >
                {index === 0 && (
                  <span className="text-foreground font-semibold">
                    {company}{" "}
                  </span>
                )}
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideRight}
          >
            <div className="glass-card rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Why Lakguardian
                  </h3>
                </div>

                <div className="space-y-4">
                  {highlights?.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gold-gradient font-display">
                      2025
                    </span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Established
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gold-gradient font-display">
                      24/7
                    </span>
                    <p className="text-muted-foreground text-xs mt-1">
                      Protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
