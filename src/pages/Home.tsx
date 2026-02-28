import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smile, Shield, Clock, Award, Heart, Sparkles } from "lucide-react";

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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dental-dark">
              Welcome to Dental Clinic
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We combine advanced technology with compassionate care to deliver
              exceptional dental services. Our experienced team is dedicated to helping you achieve
              and maintain a healthy, beautiful smile for life.
            </p>
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-2xl text-dental-dark">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-2xl text-dental-dark">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-2xl text-dental-dark">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dental-dark">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-sm font-semibold">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dental-dark">
                Why Choose Our Clinic?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-dental-dark">Advanced Technology</h3>
                    <p className="text-muted-foreground text-sm">
                      State-of-the-art equipment for precise diagnoses and comfortable treatments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-dental-dark">Compassionate Care</h3>
                    <p className="text-muted-foreground text-sm">
                      Our gentle approach ensures you feel relaxed and comfortable during every visit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-dental-dark">Experienced Team</h3>
                    <p className="text-muted-foreground text-sm">
                      Highly qualified dentists with years of expertise in all areas of dentistry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy patients at the dental clinic"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dental-dark">What Our Patients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white px-8">
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[hsl(190,100%,42%)] to-[hsl(190,100%,35%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier, brighter smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 font-semibold">
              <Link to="/contact">Schedule Appointment</Link>
            </Button>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary px-8">
              <a href="tel:+2975821234">Call Us: +297 582 1234</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
