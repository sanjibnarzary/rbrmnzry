import { notFound } from 'next/navigation';
import Image from 'next/image';
import { portfolioItems } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

type PortfolioDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = params;
  const item = portfolioItems.find(p => p.id === slug);

  if (!item) {
    notFound();
  }

  const parallaxImage = PlaceHolderImages.find(p => p.id === item.images[0]);
  const galleryImages = item.images.slice(1).map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <div>
      {/* Parallax Hero Section */}
      <section className="relative h-[50vh] w-full">
        {parallaxImage && (
          <Image
            src={parallaxImage.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={parallaxImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Badge variant="default" className="bg-accent text-accent-foreground w-fit mb-4 text-sm">{item.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-headline">
              {item.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            {item.longDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map(image => image && (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// Generate static paths for each portfolio item
export async function generateStaticParams() {
  return portfolioItems.map(item => ({
    slug: item.id,
  }));
}
