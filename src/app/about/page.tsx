import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
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
              <p>
                My journey into public service began with a deep-rooted desire to contribute to the welfare of my community. Raised with the values of hard work and compassion, I have always believed in the power of collective action to bring about positive change. Over the years, I have had the privilege of serving the people in various capacities, each role strengthening my resolve to work towards a more equitable and prosperous society.
              </p>
              <p>
                As the Executive Member for Education in the Bodoland Territorial Council, my primary focus is on transforming our educational landscape. I am passionate about creating an environment where every child has access to quality education, modern facilities, and the opportunities they need to realize their full potential. Education is the bedrock of progress, and I am committed to laying a strong foundation for the future generations of Bodoland.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Vision & Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong>My Vision:</strong> To build a self-reliant, educated, and thriving Bodoland where every citizen can live with dignity and contribute to the region's growth. I envision a future marked by peace, unity, and unprecedented development.
              </p>
              <p>
                <strong>My Mission:</strong> To implement people-centric policies that address the core needs of our society. This includes upgrading infrastructure, ensuring transparency in governance, promoting skill development, and fostering an inclusive environment that empowers all sections of the community, especially the youth and women. Through strategic planning and dedicated execution, I aim to turn this vision into a tangible reality for all.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
