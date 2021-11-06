import Head from "next/head"
import "tailwindcss/tailwind.css";
import "./../styles/_global.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Faculty of Technology, Phanomsarakham Technical College</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="เว็บไซต์หมวดหมู่เทคโนโลยี, วิทยาลัยเทคนิคพนมสารคาม" />
                <meta property="og:description" content="เว็บไซต์สาขาอาชีพที่เกี่ยวกับเทคโนโลยีในวิทยาลัยเทคนิคพนมสารคาม" />
                <meta property="og:image" content={"https://i.imgur.com/ZmQUyfO.jpg"} />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
