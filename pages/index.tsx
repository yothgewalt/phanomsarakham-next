import Header from "../components/header_universal";
import Footer from "../components/footer_universal";
import SubjectCategory from "../components/environments/@landing_sections/subject_categorys";
import OpenhouseAnnoucer from "../components/environments/@landing_sections/openhouse_annoucer";
import GalleryViaHero from "../components/environments/@landing_sections/gallery_via_hero";
import RegistrationAnnoucer from "../components/environments/@landing_sections/registration_announcer";
import Googlemap from "../components/environments/@landing_sections/location_on_google_map";

const Index: React.FunctionComponent<{}> = () => {
    return (
        <main className="relative box-border h-screen antialiased font-gt-walsheim font-base text-base text-gray-900 bg-white" role="main">
            <Header publisher="Panomsarakham" />
            <GalleryViaHero title="We'll support you either way." />
            <OpenhouseAnnoucer />
            <SubjectCategory />
            <RegistrationAnnoucer />
            <Googlemap />
            <Footer />
        </main>
    );
};

export default Index;

