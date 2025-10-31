// This file is the root of your application, but it will be handled by middleware
// to redirect to the appropriate language-specific page.
import { redirect, RedirectType } from 'next/navigation'
 

export default function Home() {
  redirect('/en', RedirectType.replace);
  //return null;
}
