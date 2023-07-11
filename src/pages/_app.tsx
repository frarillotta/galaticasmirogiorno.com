import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '~/Components/Layout/Layout'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';
import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition';

export default function App({ Component, pageProps }: AppProps) {

  const { pathname } =  useRouter();
  //fix for https://github.com/vercel/next.js/issues/17464
  // useNextCssRemovalPrevention();
  return <Layout>
      <Component key={pathname} {...pageProps} />
  </Layout>
}
