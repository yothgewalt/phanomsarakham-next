import Container from "../../container_universal";

const Googlemap: React.FunctionComponent<{}> = (props) => {
    return (
        <div className="mb-16 w-full h-auto">
            <Container>
                <div className="w-full h-[600px] drop-shadow-md rounded-lg overflow-hidden">
                    <div className="mb-12 flex flex-col justify-center items-center">
                        <h1 className="font-ibm-plex-sans-thai font-bold text-xl text-center text-gray-900">สถานที่ตั้งวิทยาลัยของเรา</h1>
                        <p className="w-[320px] xs:w-[390px] sm:w-[585px] font-ibm-plex-sans-thai font-medium text-center text-base xs:text-lg text-gray-600">
                            กูเกิ้ลแมพอาจจะยังไม่อัปเดตแผนที่ ณ ปัจจุบันอาจจะมีจุดคาดเคลื่อนเช่น สถานที่
                        </p>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.0897205924325!2d101.38100941514568!3d13.71301559037256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311ce183c2c39e0f%3A0x34f450139fef377e!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4Lie4LiZ4Lih4Liq4Liy4Lij4LiE4Liy4Lih!5e0!3m2!1sth!2sth!4v1636178972905!5m2!1sth!2sth" 
                        className="w-full h-full border-0" 
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>
                </div>
            </Container>
        </div>
    );
};

export default Googlemap;
