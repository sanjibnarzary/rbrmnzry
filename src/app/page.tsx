// This file is the root of your application, but it will be handled by middleware
// to redirect to the appropriate language-specific page.
export default function Home() {
  if (typeof window !== "undefined") {
    window.location.replace("/en");
    return null;
  }
  return null;
}
