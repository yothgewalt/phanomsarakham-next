import Head from "next/head";
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
                <meta property="og:title" content="Faculty of Technology, Phanomsarakham Technology" />
                <meta property="og:description" content="เว็บไซต์สาขาอาชีพที่เกี่ยวกับเทคโนโลยีในวิทยาลัยเทคนิคพนมสารคาม" />
                <meta property="og:image" content={"https://i.imgur.com/ZmQUyfO.jpg"} />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
