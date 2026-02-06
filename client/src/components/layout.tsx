import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-heading font-bold text-2xl text-primary tracking-tight"
          >
            KAPITAL <span className="text-secondary">MIND</span> LLC
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary",
                  location === item.path
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}

            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-secondary",
                      location === item.path
                        ? "text-primary font-bold"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-heading font-bold text-xl mb-4 text-white">
                KAPITAL <span className="text-secondary">MIND</span> LLC
              </h3>
              <p className="text-primary-foreground/80 max-w-sm">
                Bridging the gap between ambition and achievement.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Connect</h4>
              <div className="flex gap-4">
                <a className="bg-white/10 p-2 rounded-full hover:bg-secondary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a className="bg-white/10 p-2 rounded-full hover:bg-secondary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a className="bg-white/10 p-2 rounded-full hover:bg-secondary">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Kapital Mind LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
