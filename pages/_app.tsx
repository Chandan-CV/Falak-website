import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../FirebaseConfig';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  const router = useRouter();
  useEffect(()=>{
    const loggyloggy = (url:string) => {
      if(analytics){
        logEvent(analytics,url)
      }  
      }

    router.events.on('routeChangeComplete', loggyloggy);
    //For First Page
    loggyloggy(window.location.pathname);

    //Remvove Event Listener after un-mount
    return () => {
      router.events.off('routeChangeComplete', loggyloggy);
    };
  },[])
  return <SessionProvider session={session}>
  <Component {...pageProps} />
  <Analytics/>
</SessionProvider>
}
