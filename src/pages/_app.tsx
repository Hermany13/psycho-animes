import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'antd/dist/antd.css';
import '../styles/globals.css';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeError', () => {
      NProgress.done();
    });

    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });

    router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    return () => {
      router.events.off('routeChangeError', () => null);
      router.events.off('routeChangeComplete', () => null);
      router.events.off('routeChangeStart', () => null);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}
export default MyApp;
