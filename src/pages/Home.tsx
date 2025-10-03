import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smile, Shield, Clock, Award, Heart, Sparkles } from "lucide-react";
import happyPatientsImage from "@/assets/happy-patients.jpg";

const Home = () => {
  const featuredServices = [
    {
      icon: Smile,
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family, from checkups to cleanings.",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with whitening, veneers, and aesthetic treatments.",
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Protect your teeth with regular cleanings and preventive treatments.",
    },
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      text: "The best dental experience I've ever had! The staff is so friendly and professional. Highly recommend!",
      rating: 5,
    },
    {
      name: "John Croes",
      text: "Dr. Smith is amazing! Made me feel comfortable throughout the entire procedure. Pain-free and excellent results.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      text: "Clean, modern facility with state-of-the-art equipment. The team really cares about their patients.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Welcome to Aruba Dental Clinic
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Aruba Dental, we combine advanced technology with compassionate care to deliver 
              exceptional dental services. Our experienced team is dedicated to helping you achieve 
              and maintain a healthy, beautiful smile for life.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-2xl text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-2xl text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-2xl text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Choose Aruba Dental?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Advanced Technology</h3>
                    <p className="text-muted-foreground">
                      State-of-the-art equipment for precise diagnoses and comfortable treatments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Compassionate Care</h3>
                    <p className="text-muted-foreground">
                      Our gentle approach ensures you feel relaxed and comfortable during every visit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Experienced Team</h3>
                    <p className="text-muted-foreground">
                      Highly qualified dentists with years of expertise in all areas of dentistry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={happyPatientsImage}
                alt="Happy patients at Aruba Dental"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Patients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier, brighter smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contact">Schedule Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+2975821234">Call Us: +297 582 1234</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
