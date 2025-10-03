import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      text: "The best dental experience I've ever had! The staff is so friendly and professional. Dr. Johnson took the time to explain everything and made me feel completely at ease. Highly recommend!",
      rating: 5,
    },
    {
      name: "John Croes",
      text: "Dr. Smith is amazing! I had a root canal and was dreading it, but she made me feel comfortable throughout the entire procedure. Pain-free and excellent results. This clinic is top-notch!",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      text: "Clean, modern facility with state-of-the-art equipment. The team really cares about their patients and it shows. I've been coming here for 3 years and wouldn't go anywhere else.",
      rating: 5,
    },
    {
      name: "Carlos Martinez",
      text: "I was nervous about getting dental implants, but the team here made the whole process smooth and stress-free. The results are incredible - my new teeth look and feel completely natural!",
      rating: 5,
    },
    {
      name: "Jennifer Thompson",
      text: "Outstanding service from start to finish. The hygienist was gentle and thorough during my cleaning. Everyone here is so welcoming and professional. My whole family comes here now!",
      rating: 5,
    },
    {
      name: "Robert van der Berg",
      text: "After years of avoiding the dentist due to anxiety, I finally found a practice that understands. The sedation options they offer made my visit comfortable. Thank you for changing my perspective!",
      rating: 5,
    },
    {
      name: "Angela Rasmijn",
      text: "The cosmetic work they did on my smile exceeded all my expectations. I got veneers and teeth whitening, and now I can't stop smiling! Professional, artistic, and caring - perfect combination.",
      rating: 5,
    },
    {
      name: "Michael Scott",
      text: "Emergency dental care when I really needed it. I called with severe pain and they got me in the same day. Dr. Johnson fixed my cracked tooth and I left pain-free. Grateful for their quick response!",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      text: "Brought my kids here for their first dental visit and it was wonderful. The pediatric dentist was so patient and made it fun for them. They actually look forward to their checkups now!",
      rating: 5,
    },
    {
      name: "David Henriquez",
      text: "Professional, punctual, and painless. The digital technology they use makes everything faster and more accurate. I appreciate how they respect my time and always run on schedule.",
      rating: 5,
    },
    {
      name: "Patricia Lopez",
      text: "I've had several procedures done here including crowns and a bridge. Every single experience has been excellent. The quality of work is exceptional and the prices are fair. Highly recommended!",
      rating: 5,
    },
    {
      name: "James Tromp",
      text: "The orthodontic work they did for my teenager was fantastic. Clear communication, great results, and they made the whole braces journey enjoyable. Worth every penny!",
      rating: 5,
    },
  ];

  const averageRating = 5.0;
  const totalReviews = testimonials.length;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Patient Testimonials</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Read what our patients have to say about their experiences at Aruba Dental Clinic
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-3xl font-bold text-primary">{averageRating}</div>
              <div className="text-muted-foreground">
                Based on {totalReviews} reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Trusted by Thousands
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-background p-8 rounded-lg card-shadow">
                <div className="text-5xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Happy Patients</div>
              </div>
              <div className="bg-background p-8 rounded-lg card-shadow">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="bg-background p-8 rounded-lg card-shadow">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Difference Yourself</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our family of satisfied patients and discover why we're Aruba's most trusted dental clinic.
          </p>
          <Button variant="cta" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Book Your Appointment Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
