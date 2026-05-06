import { motion } from "framer-motion";
import { Shield, Car, Calendar, UserCheck } from "lucide-react";
import servicesData from "@/data/services_data.json";
import { fadeUp, staggerContainer, VIEWPORT } from "@/lib/animations";

const iconMap = { Shield, Car, Calendar, UserCheck };

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From static guarding to VIP protection, Lakguardian delivers trusted
            security solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {servicesData?.map((service, index) => {
            const Icon = iconMap[service?.icon];

            return (
              <motion.div
                key={index}
                className="group glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold cursor-pointer relative overflow-hidden"
                variants={fadeUp}
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${service?.accent} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-xl ${service?.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {Icon && (
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    )}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service?.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service?.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
