import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, ShieldCheck, Megaphone, Handshake, Compass } from "lucide-react";
import officeImg from "@assets/generated_images/modern_bright_corporate_office_atmosphere.png";

export default function Services() {
  const services = [
    {
      id: "business-development",
      title: "1. Business Development",
      description: "We help you structure your business, build credibility, and position it for funding and long-term stability.",
      icon: TrendingUp
    },
    {
      id: "financial-management",
      title: "2. Financial Management",
      description: "From personal credit to business credit, we guide you through the systems that strengthen your financial foundation.",
      icon: ShieldCheck
    },
    {
      id: "marketing",
      title: "3. Marketing",
      description: "Professional branding, marketing strategies, and growth systems designed to increase visibility and customer trust.",
      icon: Megaphone
    },
    {
      id: "mergers-acquisitions",
      title: "4. Mergers & Acquisitions",
      description: "Support for entrepreneurs and business owners navigating buying, selling, or merging companies.",
      icon: Handshake
    },
    {
      id: "strategic-management",
      title: "5. Strategic Management",
      description: "Long-term planning, operational excellence, and sustainable growth through proven business frameworks.",
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
              We provide strategic, practical, and results-driven solutions to help individuals and businesses grow with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                    <div className="p-5 bg-primary/5 rounded-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-primary mb-4">{service.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    </div>
                    <div className="shrink-0 md:self-center">
                      <Link href="/contact">
                        <Button className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white font-semibold">
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
            Let’s build your roadmap to wealth.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for personalized guidance.
          </p>
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