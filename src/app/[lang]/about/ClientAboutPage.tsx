"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function ClientAboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          About Sjt. Rabiram Narzary
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A leader committed to the principles of integrity, progress, and public service.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          {aboutImage && (
            <div className="sticky top-24">
              <Image 
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={1000}
                className="rounded-lg shadow-xl object-cover aspect-[4/5]"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          )}
        </div>
        <div className="lg:col-span-3 space-y-8 text-lg leading-relaxed">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              {/* ...rest of your about content... */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
