import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar } from "lucide-react";

// Generate static paths for each language
export async function generateStaticParams(): Promise<{ lang: string }[]> {
  const languages = ['en', 'brx', 'as', 'bn'];
  return languages.map(lang => ({ lang }));
}
const upcomingEvents = [
  {
    id: "event-1",
    title: "Inauguration of New Community Hall",
    date: "November 15, 2024",
    location: "Kokrajhar Town",
    description: "Join us for the inauguration of the new multi-purpose community hall, a hub for cultural and social activities."
  },
  {
    id: "event-2",
    title: "Public Meeting on Education Policy",
    date: "November 22, 2024",
    location: "Gossaigaon",
    description: "An open forum to discuss the future of education in our region and gather valuable feedback from the community."
  }
];

const pastEvents = [
  {
    id: "event-3",
    title: "Foundation Stone Laying Ceremony",
    date: "October 10, 2024",
    location: "Chirang District",
    description: "Laid the foundation stone for a new model school, set to provide quality education to over 500 students."
  },
  {
    id: "event-4",
    title: "Annual Sports Meet Felicitation",
    date: "September 28, 2024",
    location: "Bongaigaon",
    description: "Felicitation ceremony for the winners of the annual district sports meet, encouraging youth participation in sports."
  }
];

export default function EventsPage() {
  const allEvents = [...upcomingEvents, ...pastEvents];

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Events & Engagements
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Stay updated with my public appearances, project launches, and community interactions.
        </p>
      </header>
      
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {upcomingEvents.map((event) => {
              const image = PlaceHolderImages.find(p => p.id === event.id);
              return (
                <Card key={event.id} className="overflow-hidden">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline">{event.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground pt-2">
                       <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                       </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{event.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {pastEvents.map((event) => {
              const image = PlaceHolderImages.find(p => p.id === event.id);
              return (
                <Card key={event.id} className="overflow-hidden opacity-80">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline">{event.title}</CardTitle>
                     <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground pt-2">
                       <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                       </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{event.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
