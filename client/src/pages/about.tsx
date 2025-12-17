import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import founderImg from "@assets/generated_images/professional_business_portrait_of_a_confident_founder.png";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const offerings = [
    "Personalized financial systems",
    "Clear credit-building strategies",
    "Real guidance based on real-world experience",
    "Proven frameworks for business success"
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">About Kapital Mind LLC</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Empowerment, financial education, and mindset transformation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Kapital Mind LLC was born from experience, not ambition alone. Our founder, Leroy Frazier, knew what it felt like to have the ideas, vision, and drive—but not the access to capital or financial knowledge needed to bring those ideas to life.
                </p>
                <p className="font-semibold text-primary">
                  This business was built to change that story.
                </p>
                <p>
                  Founded in 2025, Kapital Mind began as a simple idea at a small desk and evolved into a movement rooted in empowerment, financial education, and mindset transformation.
                </p>
              </div>
            </motion.div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/public/KPMock.png"  // <-- replace with your actual image path
                alt="Kapital Mind Graphic"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-xl transform rotate-3" />
              <img 
                src="/public/founder.png"  // <-- replace with your actual image path
                alt="Leroy Frazier, Founder" 
                className="relative rounded-xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
            </div>
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-2">Founder’s Message</h2>
              <h3 className="text-xl text-secondary font-medium mb-8">Leroy Frazier</h3>
              
              <blockquote className="border-l-4 border-secondary pl-6 italic text-xl md:text-2xl font-light mb-8 leading-relaxed">
                “True wealth doesn’t start in your wallet—it starts in your mindset. Kapital Mind LLC exists to help people break free from financial limits and rewrite their own story.”
              </blockquote>
              
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Every client represents someone stepping into a new chapter—someone who is ready to build, grow, and elevate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-heading font-bold text-primary mb-6">What We Do</h2>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 At Kapital Mind LLC, we specialize in helping individuals and businesses turn vision into value through smart financial strategy, business development, and long-term sustainability.
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {offerings.map((item, i) => (
                <Card key={i} className="border-l-4 border-l-secondary shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center p-6">
                    <CheckCircle2 className="w-6 h-6 text-secondary mr-4 shrink-0" />
                    <span className="text-lg font-medium text-primary">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">Mission Statement</h2>
          <div className="relative">
             <div className="absolute -top-10 -left-10 text-9xl text-primary/5 font-serif">“</div>
             <p className="text-2xl md:text-3xl font-light text-primary leading-relaxed mb-12 relative z-10">
               At Kapital Mind, LLC, our mission is to strengthen communities by providing smart financial services, practical business guidance, and the knowledge needed to build wealth—because building wealth starts in the mind.
             </p>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Work With Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}