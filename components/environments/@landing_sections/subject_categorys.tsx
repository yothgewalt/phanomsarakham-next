import * as Datasets from "./../../resources/datasets";
import Container from "../../container_universal";
import { BookmarkIcon } from "@heroicons/react/solid";
import SubjectGrid from "../../contexts/subject_grid_category";

const SubjectCategory: React.FunctionComponent<{}> = (props) => { 
    const SubjectGridElements = Datasets.SubjectDetails.map((item, index) => {
        return <SubjectGrid key={index} labelSubject={item.labelSubject} iconSource={item.iconSource} subjectDescription={item.subjectDescription} />
    });
    return (
        <div className="w-full h-auto mb-16 bg-transparent overflow-hidden">
            <div className="h-full w-full relative container mx-auto max-w-[120em]">
                <Container>
                    <div className="mb-16 w-full h-auto flex flex-col justify-start items-start">
                        <p className="mb-3 inline-flex items-center font-ibm-plex-sans-thai font-bold text-lg xs:text-xl sm:text-2xl text-yellow-500">
                            <BookmarkIcon className="w-4 xs:w-6" aria-hidden="true" />
                            &nbsp;หมวดหมู่วิชาที่สําคัญ
                        </p>
                        <h2 className="mb-6 font-ibm-plex-sans-thai font-bold text-lg xx:text-xl xs:text-2xl sm:text-3xl text-gray-900">วิชาที่โดดเด่นในวิชาของกลุ่มเทคโนโลยี</h2>
                        <span className="w-[280px] xx:w-[420px] xs:w-[500px] md:w-[560px] smd:w-[640px] font-ibm-plex-sans-thai font-medium text-base text-gray-700">
                            วิชาที่โดดเด่นของกลุ่มเทคโนโลยีของเราที่คุณต้องเจอบ่อยๆ ในการเรียนที่วิทยาลัยเทคนิคพนมสารคามในสองสาขาวิชาของเรา ที่คุณต้องได้เรียนแน่ๆ เมื่อได้เข้ามาเรียนกับสาขาวิชาของเรา!
                        </span>
                    </div>
                    <div className="grid grid-rows-1 sm:grid-cols-2 grid-flow-row gap-4 sm:gap-8">
                        {SubjectGridElements}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default SubjectCategory;
