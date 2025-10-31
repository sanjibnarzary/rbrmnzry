import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, School } from "lucide-react";

const educationInitiatives = [
  {
    id: "education-1",
    title: "Smart Classroom Program",
    description: "Introducing digital learning tools and interactive whiteboards in 50 pilot schools to enhance the learning experience.",
    points: [
      "Teacher training on digital pedagogy.",
      "Access to online educational resources.",
      "Improved student engagement and outcomes."
    ]
  },
  {
    id: "education-2",
    title: "Scholarship for Meritorious Students",
    description: "A comprehensive scholarship program to support talented students from underprivileged backgrounds in pursuing higher education.",
    points: [
      "Financial aid for tuition and expenses.",
      "Mentorship from academic professionals.",
      "Supporting over 1,000 students annually."
    ]
  },
  {
    id: "education-3",
    title: "School Infrastructure Upgrade",
    description: "A massive drive to renovate and build new school facilities, ensuring a safe and conducive learning environment for all.",
    points: [
      "Construction of 30 new school buildings.",
      "Renovation of over 150 classrooms.",
      "Provision of clean sanitation and drinking water."
    ]
  }
];

export default function EducationPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Empowering Through Education
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Investing in our youth is investing in our future. Explore the key initiatives transforming education in the Bodoland Territorial Council.
        </p>
      </header>

      <div className="relative">
        {/* The vertical line */}
        <div className="absolute left-0 right-0 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-border" />

        <div className="space-y-16">
          {educationInitiatives.map((initiative, index) => {
            const image = PlaceHolderImages.find(p => p.id === initiative.id);
            const isRightSide = index % 2 !== 0;

            return (
              <div key={initiative.id} className="md:relative">
                 {/* The timeline dot */}
                 <div className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full items-center justify-center z-10">
                    <School className="w-4 h-4 text-primary"/>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-x-12">
                   <div className={isRightSide ? 'md:order-2' : 'md:order-1'}>
                      <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={400}
                            className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                        <CardHeader>
                          <CardTitle className="font-headline text-2xl">{initiative.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">{initiative.description}</p>
                          <ul className="space-y-2">
                            {initiative.points.map((point, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                     <div className={isRightSide ? 'md:order-1' : 'md:order-2'}>
                        {/* This is the empty space */}
                     </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
