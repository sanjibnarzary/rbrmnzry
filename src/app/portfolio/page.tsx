import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: "portfolio-1",
    category: "Infrastructure",
    title: "Rural Road Development",
    description: "Spearheaded the construction of over 200km of all-weather roads, connecting remote villages to main economic hubs.",
  },
  {
    id: "portfolio-2",
    category: "Connectivity",
    title: "Bridge Construction Program",
    description: "Oversaw the successful completion of 15 new bridges, improving transportation and reducing travel time for thousands.",
  },
  {
    id: "portfolio-3",
    category: "Public Health",
    title: "Clean Drinking Water Initiative",
    description: "Launched a major initiative to provide access to safe and clean drinking water for over 50,000 households.",
  },
  {
    id: "portfolio-4",
    category: "Education",
    title: "School Modernization Project",
    description: "Upgraded facilities and provided modern learning tools for more than 100 government schools.",
  },
  {
    id: "portfolio-5",
    category: "Economy",
    title: "Local Market Revitalization",
    description: "Revitalized 10 local markets to boost rural economy and provide better platforms for local producers.",
  },
  {
    id: "portfolio-6",
    category: "Healthcare",
    title: "Primary Health Center Expansion",
    description: "Expanded and equipped 20 Primary Health Centers to improve healthcare access in rural areas.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Portfolio of Work
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A showcase of key projects and initiatives undertaken to foster development and improve the lives of our citizens.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => {
          const image = PlaceHolderImages.find(p => p.id === item.id);
          return (
            <Card key={item.id} className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              {image && (
                <div className="relative">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                    data-ai-hint={image.imageHint}
                  />
                  <Badge variant="default" className="absolute top-4 right-4 bg-accent text-accent-foreground">{item.category}</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
