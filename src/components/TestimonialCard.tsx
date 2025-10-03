import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, text, rating }: TestimonialCardProps) => {
  return (
    <Card className="card-shadow border-0 h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "fill-primary text-primary" : "text-muted"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{text}"</p>
        <p className="font-semibold text-foreground">- {name}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
