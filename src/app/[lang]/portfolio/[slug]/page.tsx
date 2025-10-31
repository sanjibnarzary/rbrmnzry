import { notFound } from 'next/navigation';
import { portfolioItems } from '@/lib/portfolio-data';
import { PortfolioDetailClient } from './client-page';

// Generate static paths for each portfolio item for each language
export async function generateStaticParams(): Promise<{ lang: string, slug: string }[]> {
  const languages = ['en', 'brx', 'as', 'bn'];
  const paths = languages.flatMap((lang: string) =>
    portfolioItems.map((item: { id: string }) => ({
      lang: lang,
      slug: item.id,
    }))
  );
  return paths;
}

interface PageProps {
  params: Promise<{ slug: string; lang: string }>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = portfolioItems.find((p: { id: string }) => p.id === slug);

  if (!item) {
    notFound();
  }

  return <PortfolioDetailClient item={item} />;
}
