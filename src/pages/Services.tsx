import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Smile,
  Sparkles,
  Shield,
  Scissors,
  Zap,
  Baby,
  Stethoscope,
  Circle,
  Crown,
  Syringe,
  ClipboardCheck,
  Heart,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Dental Checkups & Cleanings",
      description:
        "Regular examinations and professional cleanings to maintain optimal oral health and prevent dental issues.",
    },
    {
      icon: Circle,
      title: "Fillings & Restorations",
      description:
        "High-quality composite fillings that match your natural teeth, restoring function and appearance.",
    },
    {
      icon: Crown,
      title: "Crowns & Bridges",
      description:
        "Durable dental crowns and bridges to replace missing teeth and restore your smile's integrity.",
    },
    {
      icon: Sparkles,
      title: "Teeth Whitening",
      description:
        "Professional whitening treatments for a brighter, more confident smile. Safe and effective results.",
    },
    {
      icon: Smile,
      title: "Veneers",
      description:
        "Custom porcelain veneers to transform your smile, correcting chips, stains, and gaps.",
    },
    {
      icon: Scissors,
      title: "Gum Disease Treatment",
      description:
        "Comprehensive periodontal care to treat and prevent gum disease, protecting your oral health.",
    },
    {
      icon: Syringe,
      title: "Root Canal Therapy",
      description:
        "Pain-free root canal treatments to save infected teeth and relieve discomfort.",
    },
    {
      icon: Zap,
      title: "Dental Implants",
      description:
        "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    },
    {
      icon: Shield,
      title: "Orthodontics",
      description:
        "Traditional braces and clear aligners to straighten teeth and correct bite issues.",
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description:
        "Gentle, child-friendly dental care to establish healthy habits from an early age.",
    },
    {
      icon: Stethoscope,
      title: "Emergency Dental Care",
      description:
        "Immediate treatment for dental emergencies including severe pain, trauma, and infections.",
    },
    {
      icon: Heart,
      title: "Sedation Dentistry",
      description:
        "Comfortable dental care options for anxious patients, ensuring a relaxed experience.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Our Dental Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive dental care solutions tailored to your unique needs. From routine 
              checkups to advanced cosmetic procedures, we're here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Sparkles className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-3">State-of-the-Art Technology</h3>
                <p className="text-muted-foreground">
                  We use the latest dental technology including digital X-rays, intraoral cameras, 
                  and laser dentistry for precise, comfortable treatments.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-3">Patient-Centered Care</h3>
                <p className="text-muted-foreground">
                  Your comfort and satisfaction are our top priorities. We take time to listen and 
                  create personalized treatment plans.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-3">Insurance & Payment Plans</h3>
                <p className="text-muted-foreground">
                  We accept most insurance plans and offer flexible payment options to make 
                  quality dental care accessible.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-xl mb-3">Same-Day Appointments</h3>
                <p className="text-muted-foreground">
                  We understand dental emergencies can't wait. We offer same-day appointments 
                  for urgent dental needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule your appointment today and experience the difference of quality dental care.
          </p>
          <Button variant="cta" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
