'use client'

import { Header } from '~/Components/Header/Header'
import { Footer } from '~/Components/Footer/Footer'
import Head from 'next/head'
import { Suspense, useRef } from 'react'


//TODO: transizione per pagina
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null)

    return (
        <>
            <div style={{ width: '100%', height: '100%' }} ref={ref}>
                <Head>
                    <title>galaticasmirogiorno</title>
                    <meta name="description" content="Ruggiero Galati Casmiro & Claudia Giorno" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Suspense fallback={'potato'}>
                    {children}
                </Suspense>
                <Footer />
            </div>
        </>
    )
}
