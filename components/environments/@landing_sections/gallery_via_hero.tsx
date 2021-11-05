import FadeIn from "react-fade-in";
import Container from "../../container_universal";
import * as Datasets from "../../resources/datasets";
import classNames from "../../utils/classNames";
import GalleryGrid from "../../contexts/gallery_grid_hero_header";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

const GalleryViaHero: React.FunctionComponent<{ title: string }> = ({ title }) => {
    const GalleryGridElements = Datasets.GalleryDetails.map((item, index) => {
        return <GalleryGrid key={index} imageSource={item.imageSource} objectPosition={item.objectPosition} referenceObject={item.referenceObject} />
    });
    return (
        <div className="w-full h-a my-10 xl:my-16 bg-transparent">
            <Container>
                <div className="mt-32 grid grid-cols-1 grid-flow-row gap-3 justify-items-center">
                    <h1 className={classNames(
                        "h-[10px] xs:h-[35px] sm:h-[40px] md:h-[70px] font-bold text-lg xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
                        "text-center text-[#824cc6]",
                        "inline-flex items-center"
                    )}>{title}</h1>
                    <h2 className={classNames(
                        "font-bold text-base xs:text-2xl xl:text-3xl text-gray-600"
                    )}>Phanomsarakham, Faculty of Technology</h2>
                    <span className={classNames(
                        "mt-2 xs:mt-8 inline-flex items-center font-ibm-plex-sans-thai font-medium text-center text-xs xs:text-lg sm:text-xl",
                        "sm:w-[550px] md:w-[800px] lg:w-[900px] xl:w-[960px] text-gray-600"
                    )}>
                        วิทยาลัยเทคนิคพนมสารคามมีสาขาวิชาที่เกี่ยวด้านกับเทคโนโลยีที่พร้อมจะให้ความรู้เกี่ยวกับด้านเทคโนโลยี
                        เพื่อให้สามารถออกไปทํางานในสิ่งที่ชอบได้และมีรายได้และสอดคล้องกับการดําเนินชีวิตใน
                        อนาคตที่มีแต่เทคโนโลยีที่เราจําเป็นต้องมีสกิลเหล่านี้ที่จําเป็นต่ออาชีพ
                    </span> 
                    <a href="/" className={classNames(
                        "mt-1 sm:mt-4 inline-flex items-center transition duration-150 ease-in-out",
                        "font-ibm-plex-sans-thai font-medium text-[#0099ff] hover:opacity-60",
                    )}>
                        <span className="font-semibold text-xs xs:text-lg sm:text-xl">อ่านรายละเอียดเพิ่มเติม</span>&nbsp;
                        <ArrowSmRightIcon className="w-3 xs:w-5 sm:w-6" aria-hidden="true" />
                    </a>
                </div>
                <FadeIn>
                    <div className="mt-16 w-full p-4 grid grid-cols-3 grid-flow-row gap-2 xx:gap-3 xl:gap-6 justify-items-center z-0 select-none">
                        {GalleryGridElements}
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
};

export default GalleryViaHero;
