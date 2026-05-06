import { Button } from "./ui/button";
import HeroBG from "@/assets/hero_bg.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <img
        src={HeroBG}
        alt="hero-image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/60 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-gold-gradient">LAKGUARDIAN</span>
          </h1>

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 animate-slide-up animation-delay-100 leading-tight">
            Trusted Security. Strong Protection.
            <br />
            Lasting Peace of Mind.
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 animate-slide-up animation-delay-200 leading-relaxed">
            Lakguardian delivers professional, disciplined, and reliable
            security solutions to safeguard people, assets, and businesses
            across Sri Lanka.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-slide-up animation-delay-300">
            <Button
              size="lg"
              className="gold-gradient text-primary-foreground font-semibold px-8 py-6 text-base hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-8 py-6 text-base cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
