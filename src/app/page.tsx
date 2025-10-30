import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BookOpen, Briefcase, Calendar } from 'lucide-react';

export default function Home() {
  const profilePic = PlaceHolderImages.find(p => p.id === 'profile-picture');
  const heroBg = PlaceHolderImages.find(p => p.id === 'hero-background');
  const recentEvents = PlaceHolderImages.filter(p => p.id.startsWith('event-')).slice(0, 2);

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-white">
        {heroBg && (
           <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroBg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-max mb-4">
            {profilePic && (
              <Image
                src={profilePic.imageUrl}
                alt={profilePic.description}
                width={144}
                height={144}
                className="rounded-full border-4 border-white/80 shadow-2xl"
                data-ai-hint={profilePic.imageHint}
              />
            )}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-white">
            Sjt. Rabiram Narzary
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Hon'ble Executive Member (Education), Bodoland Territorial Council (BTC)
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/portfolio">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto p-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">A Commitment to Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground leading-relaxed">
              With a steadfast dedication to the people of Bodoland, my focus is on fostering sustainable development, championing educational excellence, and creating a prosperous future for all. Together, we are building a stronger, more vibrant community.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Areas Section */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">My Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/portfolio" className="group">
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Discover key projects and initiatives that drive development and improve infrastructure across the region.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
          <Link href="/education" className="group">
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                   <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Explore our efforts to enhance the educational landscape, empowering the next generation of leaders.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
          <Link href="/events" className="group">
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Stay informed about upcoming public meetings, project inaugurations, and community engagements.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
           <h2 className="text-3xl font-bold font-headline">Recent Events</h2>
           <Button asChild variant="link" className="text-primary">
              <Link href="/events">View All Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentEvents.map(event => (
            <Card key={event.id} className="overflow-hidden">
              <Image
                src={event.imageUrl}
                alt={event.description}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                data-ai-hint={event.imageHint}
              />
              <CardHeader>
                <CardTitle className="capitalize">{event.imageHint.replace(/-/g, ' ')}</CardTitle>
                <CardDescription>October 28, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2">
                  A brief description of the event, highlighting its purpose and the positive impact it had on the community.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
