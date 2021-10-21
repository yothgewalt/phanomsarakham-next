import Image from "next/image";
import { useState } from "react";
import FadeIn from "react-fade-in";
import Container from "../../container_universal";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Gallery: React.FunctionComponent<{}> = () => {
    return (
        <div className="w-full h-a my-16 bg-transparent">
            <Container>
                <div className="mt-32 grid grid-cols-1 grid-flow-row gap-3 justify-items-center">
                    <h1 className={classNames(
                        "xs:h-[35px] sm:h-[64.5px] md:h-[70px] font-bold text-lg xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
                        "text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00c6fb] to-[#b721ff]"
                    )}>
                        We'll support you either way.
                    </h1>
                    <span className={classNames(
                        "w-auto inline-flex items-center font-ibm-plex-sans-thai font-medium text-center text-xs xs:text-lg sm:text-xl"
                    )}>
                        วิทยาลัยเทคนิคพนมสารคามมีสาขาวิชาที่เกี่ยวด้านกับเทคโนโลยีที่พร้อมจะให้ความรู้เกี่ยวกับด้านเทคโนโลยี
                        เพื่อให้สามารถออกไปทํางานในสิ่งที่ชอบได้และมีรายได้และสอดคล้องกับการดําเนินชีวิตใน
                        อนาคตที่มีแต่เทคโนโลยีที่เราจําเป็นต้องมีสกิลเหล่านี้ที่จําเป็นในอนาคต
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
                    <div className="mt-16 w-full p-4 grid grid-cols-3 grid-flow-row gap-2 xx:gap-3 xl:gap-6 justify-items-center z-0">
                        <div className={classNames(
                            "relative w-full row-span-3 rounded-md overflow-hidden hover:opacity-80 bg-gray-100",
                            "h-[150px] xx:h-[190px] xs:h-[270px] sm:h-[340px] md:h-[400px] lg:h-[490px] xl:h-[630px]",
                            "transition duration-200 ease-in-out"
                        )}>
                            <Image src="/images/senior_planting.jpg" layout="fill" objectFit="cover" objectPosition="40% 50%" />
                        </div>
                        <div className={classNames(
                            "relative w-full col-span-2 rounded-md overflow-hidden hover:opacity-80 bg-gray-100",
                            "h-[62px] xx:h-[70px] xs:h-[110px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]",
                            "transition duration-200 ease-in-out"
                        )}>
                            <Image src="/images/put_your_hands_up.jpg" layout="fill" objectFit="cover" objectPosition="50% 45%" />
                        </div>
                        <div className={classNames(
                            "relative w-full row-span-2 rounded-md overflow-hidden hover:opacity-80 bg-gray-100",
                            "h-[80px] xx:h-[110px] xs:h-[145px] sm:h-[180px] md:h-[190px] lg:h-[230px] xl:h-[300px]",
                            "transition duration-200 ease-in-out"
                        )}>
                            <Image src="/images/robot_dancing.jpg" layout="fill" objectFit="cover" objectPosition="50% 40%" />
                        </div>
                        <div className={classNames(
                            "relative w-full row-span-3 rounded-md overflow-hidden hover:opacity-80 bg-gray-100",
                            "h-[160px] xx:h-[170px] xs:h-[300px] sm:h-[350px] md:h-[350px] lg:h-[470px] xl:h-[630px]",
                            "transition duration-200 ease-in-out"
                        )}>
                            <Image src="/images/junior_with_thumbup.jpg" layout="fill" objectFit="cover" objectPosition="52% 50%" />
                        </div>
                        <div className={classNames(
                            "relative w-full row-span-2 col-span-2 rounded-md overflow-hidden hover:opacity-80 bg-gray-100",
                            "h-[130px] xx:h-[160px] xs:h-[300px] sm:h-[300px] md:h-[300px] lg:h-[475px] xl:h-[630px]",
                            "transition duration-200 ease-in-out"
                        )}>
                            <Image src="/images/two_girls_in_front_building.jpg" layout="fill" objectFit="cover" objectPosition="50% 50%"/>
                        </div>
                        <div className={classNames(
                            "relative w-full row-span-1 rounded-md overflow-hidden hover:opacity-80 bg-gray-100",
                            "h-[50px] xx:h-[100px] xs:h-[120px] sm:h-[120px] md:h-[130px] lg:h-[230px] xl:h-[300px]",
                            "transition duration-200 ease-in-out"
                        )}>
                            <Image src="/images/the_flowers.jpg" layout="fill" objectFit="cover" objectPosition="50% 50%" />
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
};

export default Gallery;
