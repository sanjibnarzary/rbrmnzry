import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

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
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Empowering Through Education
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Investing in our youth is investing in our future. Explore the key initiatives transforming education in the Bodoland Territorial Council.
        </p>
      </header>

      <div className="space-y-16">
        {educationInitiatives.map((initiative, index) => {
          const image = PlaceHolderImages.find(p => p.id === initiative.id);
          return (
            <div key={initiative.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-row-dense' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl w-full object-cover aspect-video"
                    data-ai-hint={image.imageHint}
                  />
                )}
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-headline">{initiative.title}</h2>
                <p className="text-muted-foreground">{initiative.description}</p>
                <ul className="space-y-2">
                  {initiative.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
