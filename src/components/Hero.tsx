import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CrossIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] mt-16 lg:mt-20 flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-[5%] w-40 h-40 rounded-full bg-primary/5" />
        <div className="absolute top-8 left-[8%] grid grid-cols-8 gap-1.5 opacity-20">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/40" />
          ))}
        </div>

        <CrossIcon className="absolute top-16 right-[15%] w-6 h-6 text-primary/20" />
        <CrossIcon className="absolute top-32 right-[25%] w-4 h-4 text-primary/15" />
        <CrossIcon className="absolute top-8 right-[8%] w-8 h-8 text-primary/25" />
        <CrossIcon className="absolute bottom-32 right-[10%] w-5 h-5 text-primary/20" />
        <CrossIcon className="absolute top-[45%] right-[5%] w-7 h-7 text-primary/15" />
        <CrossIcon className="absolute bottom-20 left-[3%] w-5 h-5 text-primary/20" />
        <CrossIcon className="absolute top-[60%] left-[2%] w-4 h-4 text-primary/15" />
        <CrossIcon className="absolute top-[30%] right-[40%] w-3 h-3 text-primary/10" />

        <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-primary via-primary to-primary" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="pt-8 lg:pt-0">
            <h1 className="mb-2">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight leading-none">
                HEALTHY
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-black text-dental-dark tracking-tight leading-none mt-1">
                DENTAL
              </span>
            </h1>

            <div className="mt-6 mb-2">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                We Make Your Smile Healthy
              </h2>
              <div className="w-48 h-1 bg-gradient-to-r from-primary to-primary/60 mt-3 rounded-full" />
            </div>

            <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed text-sm md:text-base">
              We provide comprehensive dental care with the latest technology and a compassionate
              team dedicated to your oral health. Experience quality dentistry in a comfortable,
              modern environment designed around your needs.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 px-8 py-3.5 border-2 border-dental-dark text-dental-dark font-semibold text-sm uppercase tracking-wider hover:bg-[hsl(225,50%,20%)] hover:text-white transition-colors duration-300 rounded-sm"
            >
              BOOK NOW
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 w-full h-full"
                fill="none"
              >
                <defs>
                  <clipPath id="dClip">
                    <path d="M250 30 C400 30 470 130 470 250 C470 370 400 470 250 470 L250 30Z" />
                  </clipPath>
                  <linearGradient id="arcGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(190, 100%, 50%)" />
                    <stop offset="100%" stopColor="hsl(190, 100%, 38%)" />
                  </linearGradient>
                </defs>

                <path
                  d="M250 10 C410 10 490 120 490 250 C490 380 410 490 250 490"
                  stroke="url(#arcGradient)"
                  strokeWidth="28"
                  strokeLinecap="round"
                  fill="none"
                />

                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="none"
                  stroke="hsl(190, 100%, 42%)"
                  strokeWidth="2"
                  opacity="0.15"
                />
              </svg>

              <div
                className="absolute rounded-full overflow-hidden"
                style={{
                  top: '10%',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                }}
              >
                <img
                  src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dentist treating patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
