import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { analytics } from '../FirebaseConfig';
import { logEvent } from 'firebase/analytics';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  const routers = useRouter();

  useEffect(() => {
      routers.events.on('routeChangeComplete', logEvent);
      //For First Page
      logEvent(analytics, window.location.pathname);

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
  }, []);
  
  return <SessionProvider session={session}>
  <Component {...pageProps} />
  <Analytics/>
</SessionProvider>
}
