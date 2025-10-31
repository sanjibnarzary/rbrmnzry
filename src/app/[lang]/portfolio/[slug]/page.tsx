
import { notFound } from 'next/navigation';
import { portfolioItems } from '@/lib/portfolio-data';
import { PortfolioDetailClient } from './client-page';

type PortfolioDetailPageProps = {
  params: { slug: string; lang: string };
};

// Generate static paths for each portfolio item for each language
export async function generateStaticParams(): Promise<{ lang: string, slug: string }[]> {
    const languages = ['en', 'brx', 'as', 'bn'];
    const paths = languages.flatMap(lang => 
        portfolioItems.map(item => ({
            lang: lang,
            slug: item.id,
        }))
    );
    return paths;
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = params;
  const item = portfolioItems.find(p => p.id === slug);

  if (!item) {
    notFound();
  }

  return <PortfolioDetailClient item={item} />;
}
