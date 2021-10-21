import Header from "../components/header_universal";
import Footer from "../components/footer_universal";
import Gallery from "../components/environments/@landing_page/gallery_starter_landing_page";

const Index: React.FunctionComponent<{}> = () => {
    return (
        <main className="relative box-border h-screen antialiased font-gt-walsheim font-base text-base text-black bg-white" role="main">
            <Header publisher="Panomsarakham" />
            <Gallery />
            <Footer />
        </main>
    );
};

export default Index;

