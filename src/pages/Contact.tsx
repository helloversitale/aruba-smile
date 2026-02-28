import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappNumber = "2975821234";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'd like to schedule an appointment at Dental Clinic."
  );

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with us today. We're here to answer your questions and schedule your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="+297 582 1234"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[150px]"
                    placeholder="Tell us about your dental needs or questions..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  We're here to help! Reach out through any of these channels and we'll respond as soon as possible.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+2975821234"
                  className="flex items-start gap-4 p-6 bg-accent rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+297 582 1234</p>
                    <p className="text-sm text-primary mt-1">Click to call</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-accent rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">+297 582 1234</p>
                    <p className="text-sm text-primary mt-1">Message us on WhatsApp</p>
                  </div>
                </a>

                <a
                  href="mailto:info@arubadental.com"
                  className="flex items-start gap-4 p-6 bg-accent rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@arubadental.com</p>
                    <p className="text-sm text-primary mt-1">Send us an email</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-accent rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Main Street 123<br />
                      Oranjestad, Aruba
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-accent rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Find Us</h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.123456789!2d-70.0334!3d12.5211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8538e6e6e6e6e6%3A0x1234567890123456!2sOranjestad%2C%20Aruba!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Dental Emergency?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We understand dental emergencies can happen anytime. Call us immediately for urgent care.
          </p>
          <Button
            variant="cta"
            size="lg"
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <a href="tel:+2975821234">
              <Phone className="mr-2" />
              Emergency Line: +297 582 1234
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
