import { Twitter, Instagram, Youtube, Facebook } from "lucide-react";

const SocialSidebar = () => {
  const socials = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-10 h-10 bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
