import Image from "next/image";
import { useState, useEffect } from "react";
import { databaseRef } from "./../firebase";
import { ref, onValue } from "firebase/database";
import Header from "../components/header_universal";
import Footer from "../components/footer_universal";

const Index: React.FunctionComponent<{}> = () => {
    const [imageRef, setImage] = useState<string[] | undefined>([])
    useEffect(() => {
        for (let image: number = 1; image <= 3; image++) {
            const imageCountRef = ref(databaseRef, 'events-image/' + image + '/ref');
            onValue(imageCountRef, (snapshot) => {
                const imageData = snapshot.val();
                console.log(imageData);
                setImage(imageList => [...imageList, imageData]);
            });
        }
    }, []);
    return (
        <main className="box-border h-screen antialiased font-gt-walsheim font-base text-base text-black bg-white" role="main">
            <Header publisher="Panomsarakham" />

            <Footer />
        </main>
    );
};

export default Index;

