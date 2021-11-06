import Image from "next/image";
import Head from "next/head";
import { supabase } from "./../utils/supabaseClient";
import { useEffect, useState } from "react";

const Events: React.FunctionComponent<{}> = (props) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Events — Faculty of Technology, Phanomsarakham Technical College</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Faculty of Technology, Phanomsarakham Technology" />
                <meta property="og:description" content="เว็บไซต์สาขาอาชีพที่เกี่ยวกับเทคโนโลยีในวิทยาลัยเทคนิคพนมสารคาม" />
                <meta property="og:image" content={"https://i.imgur.com/ZmQUyfO.jpg"} />
            </Head>
            <div>
            </div>
        </>
    );
};

export default Events;
