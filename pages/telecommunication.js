import Head from 'next/head';
import TeleComBanner from '@/components/TeleComBanner';
import TeleComServics from '@/components/TeleComServics';


export default function Home() {
    return (
        <>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Telecommunication - Crystallite Digital</title>
                <link rel="icon" href="/images/logo.svg" sizes="32x32" title="logo" alt="favicon" />
                <meta name="author" content="Alvaro Trigo Lopez" />
                <meta name="description" content="fullPage full-screen navigation and sections control menu." />
                <meta name="keywords" content="fullpage,jquery,demo,screen,fullscreen,navigation,control arrows, dots" />
                <meta name="Resource-type" content="Document" />
            </Head>
            <TeleComBanner />
            <TeleComServics />
        </>
    )
}
