
"use client"

import Image from "next/image";
import Link from 'next/link';
import { portfolioItems } from "@/lib/portfolio-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export default function PortfolioPage() {
  const { language } = useLanguage();
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Portfolio of Work
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A showcase of key projects and initiatives undertaken to foster development and improve the lives of our citizens.
        </p>
      </header>

      <div className="relative pl-8 md:pl-16">
        {/* The vertical timeline bar */}
        <div className="absolute left-4 md:left-8 top-0 h-full w-0.5 bg-border" />

        <div className="space-y-12">
          {portfolioItems.map((item) => {
            const image = PlaceHolderImages.find(p => p.id === item.id);
            return (
              <div key={item.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[2.1rem] md:-left-[4.1rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background border-4 border-primary">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>

                <Card className="flex flex-col md:flex-row overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  {image && (
                     <div className="md:w-1/3 lg:w-2/5 flex-shrink-0">
                      <Image
                        src={image.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-grow">
                     <CardHeader>
                       <Badge variant="default" className="bg-accent text-accent-foreground w-fit mb-2">{item.category}</Badge>
                       <CardTitle className="font-headline">{item.title}</CardTitle>
                     </CardHeader>
                     <CardContent className="flex-grow">
                       <CardDescription>
                         {item.shortDescription}
                       </CardDescription>
                     </CardContent>
                     <div className="p-6 pt-0 mt-auto">
                        <Button asChild variant="link" className="text-primary px-0">
                          <Link href={`/${language}/portfolio/${item.id}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                     </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
