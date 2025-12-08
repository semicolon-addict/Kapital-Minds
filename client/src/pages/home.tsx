import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, ShieldCheck, Megaphone, Handshake, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import heroBg from "@assets/generated_images/modern_abstract_financial_background_with_navy_blue_and_gold_geometric_lines.png";

export default function Home() {
  const services = [
    {
      title: "Business Development",
      description: "Transform your idea into a structured, successful business.",
      icon: TrendingUp,
      link: "/services#business-development"
    },
    {
      title: "Financial Management",
      description: "Build strong credit and take control of your financial trajectory.",
      icon: ShieldCheck,
      link: "/services#financial-management"
    },
    {
      title: "Marketing",
      description: "Strengthen your brand presence and reach the audience you deserve.",
      icon: Megaphone,
      link: "/services#marketing"
    },
    {
      title: "Mergers & Acquisitions",
      description: "Navigate business transitions with clear, strategic support.",
      icon: Handshake,
      link: "/services#mergers-acquisitions"
    },
    {
      title: "Strategic Management",
      description: "Achieve long-term success through structured planning.",
      icon: Compass,
      link: "/services#strategic-management"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        
        <div className="container relative z-20 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
              Unlock Your <span className="text-secondary">Financial Power</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Build Confidence, Clarity, and Capital.
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              At Kapital Mind LLC, we help individuals and businesses transform their mindset, strengthen their credit, and create real opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary font-bold text-lg px-8 h-14 bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
              Real Guidance. Real Growth. Real Results.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Kapital Mind LLC was created to bridge the gap between ambition and achievement. We provide the guidance, tools, and strategies that help people think differently about money — and build a stronger financial future with confidence.
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Expertise</h2>
            <p className="text-muted-foreground">Comprehensive solutions for your financial journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-none shadow-md group">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/5 w-fit rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Link href={service.link}>
                      <a className="inline-flex items-center text-secondary font-semibold hover:gap-2 transition-all group-hover:underline">
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to build the future you’ve been working toward?
          </h2>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-10 h-16 mt-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}