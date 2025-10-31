
import ClientHomePage from "./ClientHomePage";

// Generate static paths for each language
export async function generateStaticParams(): Promise<{ lang: string }[]> {
  const languages = ['en', 'brx', 'as', 'bn'];
  return languages.map(lang => ({ lang }));
}

export default async function HomePage() {
  return <ClientHomePage />;
}
