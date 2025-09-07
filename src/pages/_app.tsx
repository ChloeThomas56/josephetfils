import Head from "next/head";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { cormorant, dm_sans } from '@/lib/font';
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, interactive-widget=resizes-content" />
            </Head>
            <div className={`${dm_sans.className} ${cormorant.variable}`}>
                <Header />
                <main>
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}
