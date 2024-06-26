'use client'

import { Header } from '~/Components/Header/Header'
import { Footer } from '~/Components/Footer/Footer'
import Head from 'next/head'
import { Suspense, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

//TODO: transizione per pagina
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null)

    return (
        <>
            <div style={{ width: '100%', height: '100%' }} ref={ref}>
                <Head>
                    <title>GALATI CASMIRO GIORNO</title>
                    <meta 
                        name="description" 
                        content="An architecture practice based in Catania, Italy. Founded by Ruggiero Galati Casmiro and Claudia Giorno" 
                    />
                    <meta 
                        name="keywords" 
                        content="ruggiero, galati, casmiro, claudia, giorno, catania, architettura, sicilia, calabria" 
                    />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Suspense>
                    {children}
                    <Analytics />
                    <SpeedInsights />
                </Suspense>
                <Footer />
            </div>
        </>
    )
}
