import { Mail, MapPin, Clock } from "lucide-react";
import aboutImage from "@/assets/about-studio.jpg";

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative h-72 md:h-96 overflow-hidden">
      <img src={aboutImage} alt="Our crochet studio" width={1200} height={680} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">About Us</h1>
      </div>
    </section>

    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Story */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Story</h2>
        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Soft Loop Studio was born from a simple love for yarn and the magic of turning it into something beautiful.
            What started as a hobby at a kitchen table has grown into a small studio dedicated to creating handmade
            crochet gifts and accessories.
          </p>
          <p>
            Every piece we make is crafted with care, patience, and a lot of love. We believe in the beauty of slow,
            intentional creation — each stitch is placed by hand, making every item truly one-of-a-kind.
          </p>
          <p>
            Our mission is to bring warmth and joy through handmade creations, and to inspire others to pick up a hook
            and discover the therapeutic art of crochet.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">What We Believe In</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Handmade Quality", desc: "Every item is crocheted by hand with premium yarns for lasting beauty and durability." },
            { title: "Sustainable Craft", desc: "We use eco-friendly materials and minimize waste in our studio practices." },
            { title: "Creative Community", desc: "We share our knowledge through blogs and tutorials to grow the crochet community." },
          ].map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Email</p>
                <p className="text-muted-foreground text-sm">hello@softloopstudio.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Studio</p>
                <p className="text-muted-foreground text-sm">Portland, Oregon</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Custom Orders</p>
                <p className="text-muted-foreground text-sm">2–3 weeks turnaround</p>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
);

export default About;
