import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import founderImg from "@assets/generated_images/professional_business_portrait_of_a_confident_founder.png";

export default function About() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">About Kapital Mind LLC</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Bridging the gap between potential and opportunity.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Kapital Mind LLC was founded in 2025 with one purpose — to help people rethink what’s possible. What began as a small idea at a desk became a movement rooted in empowerment, education, and financial clarity.
                </p>
                <p>
                  We saw countless ambitious people with the drive to succeed, but without access to the tools, knowledge, or capital needed to bring their ideas to life. Kapital Mind LLC was created to change that — to bridge the gap between potential and opportunity.
                </p>
              </div>
            </motion.div>
            <div className="relative h-[400px] bg-primary/5 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              {/* Abstract decorative element since we don't have a generic office image yet, or use a placeholder/pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-heading font-bold text-primary/10">KM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-xl transform rotate-3" />
              <img 
                src={founderImg} 
                alt="L. Frazier, Founder" 
                className="relative rounded-xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
            </div>
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-2">From the Founder</h2>
              <h3 className="text-xl text-secondary font-medium mb-8">L. Frazier</h3>
              
              <div className="space-y-6 text-lg text-primary-foreground/90 leading-relaxed">
                <p>
                  "Kapital Mind LLC was built from experience — from knowing what it feels like to have the vision, the passion, and the ideas, but not the access to funding or financial knowledge."
                </p>
                <p>
                  "I started this business because I wanted to rewrite that story for others ready to break free from financial limits."
                </p>
                <blockquote className="border-l-4 border-secondary pl-6 italic text-xl font-light my-8">
                  True wealth doesn’t begin in your bank account — it begins in your mindset. That belief is the foundation of Kapital Mind LLC.
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">Our Mission</h2>
          <p className="text-2xl font-light text-primary leading-relaxed mb-12">
            "Our mission is to educate, empower, and elevate."
          </p>
          <p className="text-lg text-muted-foreground">
            We help clients build strong credit, master financial strategy, and create long-term success through confidence, clarity, and smart decision-making.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Work With Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}