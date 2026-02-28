import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "New Patient", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M12 8C10 8 8 10 8 14C8 18 10 28 14 32C16 34 17 30 18 26C18.5 24 19.5 24 20 24C20.5 24 21.5 24 22 26C23 30 24 34 26 32C30 28 32 18 32 14C32 10 30 8 28 8C26 8 24 10 20 10C16 10 14 8 12 8Z"
                fill="hsl(190, 100%, 42%)"
                stroke="hsl(190, 100%, 35%)"
                strokeWidth="1"
              />
              <path
                d="M15 14C15 14 17 16 20 16C23 16 25 14 25 14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="leading-tight">
              <span className="text-lg font-bold text-dental-dark tracking-tight">
                Dental Clinic
              </span>
              <span className="block text-[10px] text-muted-foreground -mt-0.5 italic">
                Creating Beautiful Smiles
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  isActive(link.path)
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Log in</span>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 text-sm font-medium transition-colors hover:bg-accent rounded-md ${
                  isActive(link.path) ? "text-primary bg-accent" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <User className="w-5 h-5" />
                <span>Log in</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
