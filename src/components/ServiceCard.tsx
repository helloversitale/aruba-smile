import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 bg-white">
      <CardHeader>
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <CardTitle className="text-lg text-[hsl(225,50%,20%)]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
