import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

/* ----------------------------- Schema ----------------------------- */

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .refine(
      (val) => val.endsWith("@gmail.com"),
      "Only @gmail.com email addresses are allowed."
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message cannot exceed 500 characters."),
});

/* ---------------------------- Component ---------------------------- */

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  /* ---------------------------- Submit ----------------------------- */

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwMaLxTBySjPdo-Q2lNT5Q8xxhCNcc1Ej-9PrgQkebc8rGRUZ7FE6_8apbST979WIQEVg/exec", {
        method: "POST",
        mode: "no-cors", // ← add this
        body: new URLSearchParams({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      // if (!response.ok) {
      //   throw new Error("Submission failed");
      // }

      toast({
        title: "Message sent successfully",
        description: "We’ll get back to you shortly.",
      });

      form.reset();
    } catch (err) {
      console.error("Submission error:", err);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  /* ------------------------------ JSX ------------------------------ */

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            We’re here to help you build confidence, clarity, and capital.
            Reach out today.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Send us a Message
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            maxLength={100}
                            placeholder="Your Name"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="your-email@gmail.com"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            maxLength={500}
                            placeholder="How can we help you?"
                            className="min-h-[150px] resize-none"
                          />
                        </FormControl>
                        <div className="text-xs text-muted-foreground text-right">
                          {field.value?.length || 0}/500
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">
                  Leroy Frazier
                </h3>
                <p className="text-muted-foreground mb-6">
                  Founder, Kapital Mind LLC
                </p>

                <div className="space-y-6">
                  <InfoRow icon={<Phone className="h-5 w-5" />} title="Phone" value="(833) 350-5311" />
                  <InfoRow icon={<Mail className="h-5 w-5" />} title="Email" value="info@kapitalmind.org" />
                  <InfoRow icon={<Globe className="h-5 w-5" />} title="Website" value="https://kapitalmind.org" />
                  <InfoRow icon={<MapPin className="h-5 w-5" />} title="Address" value={`632 N. 2nd St, Unit #1213\nPhiladelphia, PA 19123`} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

/* Info Row */

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 p-3 rounded-lg text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-primary">{title}</h4>
        <p className="text-slate-700 whitespace-pre-line">{value}</p>
      </div>
    </div>
  );
}