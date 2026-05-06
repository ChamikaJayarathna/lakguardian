import { motion } from "framer-motion";
import founder_image from "@/assets/founder.webp";
import founder from "@/data/founder_data.json";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  VIEWPORT,
} from "@/lib/animations";

const Founder = () => {
  const { title, name, role, description = [] } = founder;
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            The Founder
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              className="lg:col-span-3 space-y-6 order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={staggerContainer}
            >
              <motion.div className="inline-block" variants={slideLeft}>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {title}
                </h3>
                <p className="text-warm-gradient text-xl md:text-3xl font-display font-semibold mt-1">
                  {name}
                </p>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mt-2">
                  {role}
                </p>
                <div className="h-1 w-20 warm-gradient rounded-full mt-3" />
              </motion.div>

              {description?.map((dec, i) => (
                <motion.p
                  key={i}
                  className="text-muted-foreground leading-relaxed"
                  variants={slideLeft}
                >
                  {dec}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="lg:col-span-2 order-1 lg:order-2 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={slideRight}
            >
              <div className="relative group">
                <div className="absolute -inset-3 warm-gradient rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
                <div className="absolute -inset-1 rounded-2xl border border-accent/30 group-hover:border-accent/50 transition-colors duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-warm">
                  <img
                    src={founder_image}
                    alt={name}
                    className="w-full max-w-sm object-cover aspect-3/4 group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
