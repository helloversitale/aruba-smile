import { Award, Users, Heart, Target } from "lucide-react";
import dentistPortrait from "@/assets/dentist-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">About Aruba Dental Clinic</h1>
            <p className="text-xl text-muted-foreground">
              Committed to excellence in dental care since 2008. Your smile is our passion.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2008, Aruba Dental Clinic has been serving the community with exceptional 
              dental care for over 15 years. What started as a small practice has grown into one 
              of Aruba's most trusted dental clinics, thanks to our commitment to patient care 
              and clinical excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe that everyone deserves access to high-quality dental care in a comfortable, 
              welcoming environment. Our state-of-the-art facility is equipped with the latest 
              technology, and our team of experienced professionals is dedicated to providing 
              personalized care that meets your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Compassion</h3>
              <p className="text-muted-foreground">
                We treat every patient with kindness, empathy, and respect.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Teamwork</h3>
              <p className="text-muted-foreground">
                We collaborate to provide comprehensive, coordinated care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and techniques for better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Meet Our Team</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Dr. Sarah Johnson</h3>
                <p className="text-primary font-semibold mb-4">Chief Dentist & Founder</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Dr. Johnson graduated from the University of Amsterdam Dental School with honors 
                  and has over 15 years of experience in general and cosmetic dentistry. She is 
                  passionate about creating beautiful, healthy smiles and making dental care 
                  accessible to everyone.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-semibold">Education:</span> DDS, University of Amsterdam</p>
                  <p className="text-sm"><span className="font-semibold">Specialization:</span> Cosmetic & Restorative Dentistry</p>
                  <p className="text-sm"><span className="font-semibold">Member:</span> American Dental Association</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={dentistPortrait}
                  alt="Dr. Sarah Johnson"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Dr. Michael Peters</h4>
                <p className="text-primary text-sm mb-2">Orthodontist</p>
                <p className="text-muted-foreground text-sm">
                  Specialist in braces and clear aligners with 10+ years experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Lisa Martinez</h4>
                <p className="text-primary text-sm mb-2">Dental Hygienist</p>
                <p className="text-muted-foreground text-sm">
                  Expert in preventive care and patient education.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Emma Thompson</h4>
                <p className="text-primary text-sm mb-2">Practice Manager</p>
                <p className="text-muted-foreground text-sm">
                  Ensures smooth operations and excellent patient experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Certifications & Memberships</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-background p-6 rounded-lg card-shadow">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">American Dental Association</h3>
                <p className="text-muted-foreground text-sm">Member since 2008</p>
              </div>
              <div className="bg-background p-6 rounded-lg card-shadow">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">International Congress of Oral Implantologists</h3>
                <p className="text-muted-foreground text-sm">Certified member</p>
              </div>
              <div className="bg-background p-6 rounded-lg card-shadow">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Academy of General Dentistry</h3>
                <p className="text-muted-foreground text-sm">Fellow member</p>
              </div>
              <div className="bg-background p-6 rounded-lg card-shadow">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Caribbean Dental Association</h3>
                <p className="text-muted-foreground text-sm">Board certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
