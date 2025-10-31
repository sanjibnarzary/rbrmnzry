"use client";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BookOpen, Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
export default function ClientHomePage() {
  const { t, language } = useLanguage();
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
            {t('hero_name')}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            {t('hero_title')}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href={`/${language}/about`}>{t('hero_button_about')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-green-500 hover:bg-green-600 border-green-500 text-white">
              <Link href={`/${language}/portfolio`}>{t('hero_button_portfolio')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto p-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">{t('intro_title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground leading-relaxed">
              {t('intro_description')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Areas Section */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">{t('focus_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href={`/${language}/portfolio`} className="group">
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t('focus_portfolio_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {t('focus_portfolio_desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${language}/education`} className="group">
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                   <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t('focus_education_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {t('focus_education_desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${language}/events`} className="group">
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{t('focus_events_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {t('focus_events_desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
           <h2 className="text-3xl font-bold font-headline">{t('recent_events_title')}</h2>
           <Button asChild variant="link" className="text-primary">
              <Link href={`/${language}/events`}>{t('recent_events_view_all')} <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
                  {t('recent_events_desc')}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
