import Head from "next/head";
import "@/styles/globals.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { dm_sans, cormorant, cormorant_infant } from '@/lib/font';
import ReactLenis from "lenis/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [router.asPath]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, interactive-widget=resizes-content" />
                <meta name="description" content="Artisan menuisier. Création et fabrication de meubles, agencement intérieur et extérieur. Qualité, précision et conseils personnalisés." />
                <meta name="keywords" content="Artisan, menuisier, meubles, agencement, bois, sur-mesure" />
                <meta property="og:description" content="Artisan menuisier. Création et fabrication de meubles, agencement intérieur et extérieur. Qualité, précision et conseils personnalisés" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://josephetfils.com/images/website.jpg" />
            </Head>
            <div className={`${dm_sans.className} ${cormorant.variable} ${cormorant_infant.variable}`}>
                <ReactLenis root options={{ lerp: 1, duration: 1.1 }}>
                    <Header />
                    <main>
                        <div className="page__top-line" />
                        <div className="page">
                            <div className="page__inner">
                                <Component {...pageProps} />
                            </div>
                        </div>
                    </main>
                    <Footer />
                </ReactLenis>
            </div>
        </>
    );
}
