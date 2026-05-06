import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import mission_vision_data from "@/data/mission_vision.json";
import { slideLeft, slideRight, VIEWPORT } from "@/lib/animations";

const MissionVision = () => {
  const { vision, mission } = mission_vision_data;
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-secondary/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            className="glass-card rounded-2xl p-10 lg:p-12 relative group hover:border-primary/30 transition-all duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideLeft}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground">
                  {vision?.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {vision?.description}
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="warm-gradient rounded-2xl p-10 lg:p-12 relative group hover:shadow-warm transition-all duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideRight}
          >
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-3xl font-bold text-primary-foreground">
                  {mission?.title}
                </h3>
              </div>

              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                {mission?.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
