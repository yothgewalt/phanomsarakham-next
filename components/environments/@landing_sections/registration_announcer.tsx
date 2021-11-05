import Image from "next/image";
import Container from "../../container_universal";
import classNames from "../../utils/classNames";

const RegistrationAnnoucer: React.FunctionComponent<{}> = (props) => {
    return (
        <div className="mb-16 w-full h-auto">
            <Container>
                <div className="relative w-full h-[400px] md:h-[600px] flex flex-col justify-center items-center rounded-lg bg-gray-100 text-white overflow-hidden">
                    <h1 className="font-ibm-plex-sans-thai font-bold text-center text-lg xx:text-xl xs:text-2xl sm:text-3xl md:text-4xl drop-shadow-sm z-10">สนใจศึกษาต่อวิทยาลัยของเรา</h1>
                    <p className="font-ibm-plex-sans-thai font-medium text-center text-xs xx:text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 drop-shadow-sm z-10">คุณสามารถติดต่อสอบถามที่แฟนเพจของวิทยาลัยเทคนิคพนมสารคามได้เลย</p>
                    <a 
                        href="https://www.facebook.com/phanomsarakham" 
                        className={classNames(
                            "mt-5 w-auto h-[30px] px-3 rounded-xl bg-[#0099ff] z-10",
                            "transition duration-150 ease-in-out hover:bg-opacity-80",
                            "flex justify-center items-center"
                        )} 
                        role="button"
                    >
                        <span className="font-ibm-plex-sans-thai font-medium text-xs sm:text-base">ลิงก์เข้าไปที่แฟนเพจ</span>
                    </a>
                    <Image src="/images/senior_smiles.webp" layout="fill" objectFit="cover" objectPosition="50% 50%" className="z-0" />
                </div>
            </Container>
        </div>
    );
};

export default RegistrationAnnoucer;
