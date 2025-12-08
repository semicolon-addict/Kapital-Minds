import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, ShieldCheck, Megaphone, Handshake, Compass, CheckCircle2 } from "lucide-react";
import officeImg from "@assets/generated_images/modern_bright_corporate_office_atmosphere.png";

export default function Services() {
  const services = [
    {
      id: "business-development",
      title: "Business Development",
      description: "Transform your idea into a structured, successful business.",
      details: "We guide you through formation, planning, scaling, and building a strong foundation for long-term growth.",
      icon: TrendingUp
    },
    {
      id: "financial-management",
      title: "Financial Management",
      description: "Take control of your financial trajectory with expert guidance.",
      details: "Build and maintain strong credit, improve financial habits, and create a roadmap for stability.",
      icon: ShieldCheck
    },
    {
      id: "marketing",
      title: "Marketing",
      description: "Strengthen your brand presence and reach the audience your business deserves.",
      details: "Effective marketing strategies tailored to your unique value proposition and market goals.",
      icon: Megaphone
    },
    {
      id: "mergers-acquisitions",
      title: "Mergers & Acquisitions",
      description: "Navigate business transitions with clear, strategic support.",
      details: "Support for buying, selling, or merging businesses to protect your vision and maximize opportunities.",
      icon: Handshake
    },
    {
      id: "strategic-management",
      title: "Strategic Management",
      description: "Achieve long-term success through structured planning.",
      details: "Focused decision-making and strategic business direction to keep you ahead of the curve.",
      icon: Compass
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${officeImg})` }}
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We provide strategic guidance designed to support your growth — personally, professionally, and financially.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="p-4 bg-primary/5 rounded-xl shrink-0">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-lg font-medium text-slate-700 mb-4">{service.description}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.details}</p>
                      <div className="flex items-center text-sm font-semibold text-secondary">
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        <span>Professional Guidance</span>
                      </div>
                    </div>
                    <div className="shrink-0 pt-2">
                      <Link href="/contact">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">
            Your next level begins with the right strategy.
          </h2>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 h-14">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}