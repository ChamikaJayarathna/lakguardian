import founder_image from "@/assets/founder.webp";
import founder from "@/data/founder_data.json";

const Founder = () => {
  const { title, name, role, description = [] } = founder;
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Leadership
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            The Founder
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              <div className="inline-block">
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
              </div>

              {description?.map((dec, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {dec}
                </p>
              ))}
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center">
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

                  {/* <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-foreground font-display font-bold text-lg">
                      {name}
                    </p>
                    <p className="text-primary text-sm font-medium">{role}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
