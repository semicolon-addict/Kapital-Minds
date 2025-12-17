import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, ShieldCheck, Megaphone, Handshake, Compass, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import heroBg from "@assets/generated_images/modern_abstract_financial_background_with_navy_blue_and_gold_geometric_lines.png";

export default function Home() {
  const services = [
    {
      title: "Business Development",
      description: "Helping entrepreneurs structure, build, and scale their business with confidence.",
      icon: TrendingUp,
      link: "/services#business-development"
    },
    {
      title: "Financial Management",
      description: "Credit building, financial literacy, budgeting systems, and long-term planning.",
      icon: ShieldCheck,
      link: "/services#financial-management"
    },
    {
      title: "Marketing",
      description: "Brand development, visibility strategies, and market positioning.",
      icon: Megaphone,
      link: "/services#marketing"
    },
    {
      title: "Mergers & Acquisitions",
      description: "Guidance for business owners ready to buy, sell, or merge companies.",
      icon: Handshake,
      link: "/services#mergers-acquisitions"
    },
    {
      title: "Strategic Management",
      description: "High-level planning, operational structure, and sustainable growth strategies.",
      icon: Compass,
      link: "/services#strategic-management"
    }
  ];

  const testimonials = [
    {
      quote: "Kapital Mind helped me understand business credit in a way no one ever has. Within 90 days, I had my first vendor accounts and was finally building my business the right way.",
      author: "T. Johnson",
      role: "Business Credit Consulting"
    },
    {
      quote: "Their accounting support has been a game changer. My books are clean, organized, and lender-ready for the first time.",
      author: "Maria G.",
      role: "Accounting & Bookkeeping"
    },
    {
      quote: "Professional, fast, and accurate. Kapital Mind explained everything clearly so I could truly understand my financial picture.",
      author: "David R.",
      role: "Tax Preparation Services"
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 z-10" />
        
        <div className="container relative z-20 px-4 md:px-6 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight text-white">
              Building Wealth Starts in the <span className="text-secondary">Mind</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Empowering individuals and businesses with the financial knowledge, strategy, and systems needed to build credit, grow income, and secure long-term wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold text-lg px-8 h-14">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 h-14 bg-transparent">
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary">
              We Turn Vision Into Value
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                At Kapital Mind LLC, we turn vision into value. Founded on real experience—not theory—we teach clients how money works, how business credit works, and how to use the right financial systems to unlock opportunity.
              </p>
              <p>
                What makes Kapital Mind different is our hands-on approach. We don’t just give advice—we guide you step-by-step through proven frameworks designed to build confidence, clarity, and capital.
              </p>
            </div>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-10" />
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Service Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic solutions designed for growth and stability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-none shadow-md group bg-white">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/5 w-fit rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
             <Link href="/services">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                  View All Services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
         <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Why Choose Us</h2>
                <div className="space-y-6 text-lg text-primary-foreground/90 leading-relaxed">
                  <p>
                    Kapital Mind LLC was founded in 2025 with one clear purpose—to help people think differently about money, growth, and opportunity.
                  </p>
                  <p className="text-2xl font-bold text-secondary">
                    We don’t just build credit—we build confidence, clarity, and capital.
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                 {/* Visual stats or icons could go here, for now using decorative cards */}
                 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="font-bold text-xl mb-2 text-secondary">Vision to Value</h3>
                    <p className="text-sm opacity-80">Turning your financial goals into tangible assets and results.</p>
                 </div>
                 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="font-bold text-xl mb-2 text-secondary">Proven Frameworks</h3>
                    <p className="text-sm opacity-80">Step-by-step guidance through systems that work.</p>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground">Real results from real clients.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted/20 p-8 rounded-2xl relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                <div className="relative z-10 pt-8">
                  <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.author}</h4>
                    <p className="text-sm text-secondary font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
  style={{ backgroundImage: "url('/images/CTAimg.jpg')" }}
  className="py-24 bg-slate-900 bg-cover bg-center bg-no-repeat text-white text-center relative overflow-hidden"
>
  <div className="container relative z-10 px-4">
    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-yellow-400">
      Ready to take control of your <span className="text-white">Financial</span> future?
    </h2>

    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
      Let’s build the mindset, structure, and systems that lead to wealth.
    </p>

    <Link href="/contact">
      <Button
        size="lg"
        className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-10 h-16 shadow-lg shadow-secondary/20"
      >
        Contact Us Today
      </Button>
    </Link>
  </div>

  <div className="absolute inset-0 bg-black/50"></div>
</section>

    </div>
  );
}