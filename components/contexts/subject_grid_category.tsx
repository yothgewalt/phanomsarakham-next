import classNames from "../utils/classNames";

enum Subject {
    PROGRAMMING = "bg-[#4f58df]",
    MICROCONTROLLER = "bg-[#65376a]",
    EDITOR = "bg-[#ff671a]",
    NETWORKING = "bg-[#ffa928]"
}

type Props = {
    labelSubject: string,
    iconSource: any,
    subjectDescription: string
};

const SubjectGrid: React.FunctionComponent<Props> = (props) => {
    let objectStyles = "";
    switch (props.labelSubject) {
        case "Programming":
            objectStyles = Subject.PROGRAMMING;
            break;
        case "Microcontroller":
            objectStyles = Subject.MICROCONTROLLER;
            break;
        case "Editor":
            objectStyles = Subject.EDITOR;
            break;
        case "Networking":
            objectStyles = Subject.NETWORKING;
            break;
        default: {
            objectStyles = "";
            break;
        }
    }
    return (
        <div className={classNames(
            "w-full h-[260px] lg:h-[290px] xl:h-[300px] rounded-lg overflow-hidden",
            objectStyles
        )}>
            <div className="p-8 py-14 h-full flex flex-col justify-center sm:justify-between items-center sm:items-start text-white">
                <div className="inline-flex items-center">
                    <props.iconSource className="w-14" aria-hidden="true" />
                </div>
                <h2 className="pt-6 sm:pt-0 font-ibm-plex-sans-thai font-medium text-center sm:text-left text-lg md:text-xl">{props.subjectDescription}</h2>
            </div>
        </div>
    );
};

export default SubjectGrid;
