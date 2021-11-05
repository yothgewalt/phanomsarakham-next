import Image from "next/image";
import FadeIn from "react-fade-in";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

const OpenhouseAnnoucer: React.FunctionComponent<{}> = (props) => {
    return (
        <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] xl:h-[720px] mb-16 bg-[#f1f4f7]">
            <div className="h-full container mx-auto px-6">
                <div className="w-full h-full grid grid-cols-1 xl:grid-col-2 grid-flow-col justify-items-cente place-items-center gap-0 xl:gap-10">
                    <div className="flex flex-col justify-center items-center xl:items-start text-gray-900">
                        <h2 className="font-medium text-sm xx:text-base xs:text-lg sm:text-xl md:text-2xl text-indigo-500">Openhouse — @Present</h2>
                        <h1 className="mt-5 font-ibm-plex-sans-thai font-bold text-base xx:text-lg xs:text-xl sm:text-2xl md:text-3xl xl:text-4xl xxl:text-5xl">กิจกรรมเปิดบ้าน ณ วิทยาลัยเทคนิคพนมสารคาม</h1>
                        <span className="w-[320px] xx:w-[380px] xs:w-[500px] font-ibm-plex-sans-thai font-medium text-gray-500">
                            <p className="text-center xl:text-left my-8 text-xs xx:text-sm xs:text-base sm:text-lg md:text-2xl">
                                กิจกรรมเปิดบ้านของวิทยาลัยเทคนิคพนมสารคามมีเป็นประจําทุกปีเพื่อให้นักเรียนและนักศึกษาที่สนใจในการศึกษาต่อในด้านสายอาชีวะมาเยี่ยมชมดูเป็นแนะแนวในการตัดสินใจในการเรียนต่อ
                            </p>
                        </span>
                        <a 
                            className="inline-flex items-center font-ibm-plex-sans-thai font-medium text-xs xx:text-sm xs:text-base sm:text-lg md:text-xl text-[#0099ff] hover:opacity-60 transition duration-150 ease-in-out" 
                            href="https://www.facebook.com/PhanomsarakhamIT/"
                        >
                            <ArrowCircleRightIcon className="w-4 sm:w-5 md:w-6" aria-hidden="true" />
                            <p>&nbsp;ติดตามกิจกรรมผ่านแฟนเพจ</p>
                        </a>
                    </div>
                    <FadeIn>
                        <div className="w-[512px] h-[512px] xxl:w-[620px] xxl:h-[620px] relative rounded-md hidden xl:flex justify-center items-center bg-gray-200 overflow-hidden">
                            <h1 className="font-ibm-plex-sans-thai font-bold animate-pulse z-0 text-gray-600">กําลังดาวน์โหลด</h1>
                            <Image src="/images/openhouse_promote.webp" className="z-10" layout="fill" objectFit="cover" objectPosition="50% 50%" />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default OpenhouseAnnoucer;
