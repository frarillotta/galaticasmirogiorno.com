import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '~/Components/Layout/Layout'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {

  const { pathname } =  useRouter();
  
  return <Layout>
    <AnimatePresence mode="wait">
      <Component key={pathname} {...pageProps} />
    </AnimatePresence>
  </Layout>
}
