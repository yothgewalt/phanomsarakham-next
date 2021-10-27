import Image from "next/image";
import classNames from "../utils/classNames";

enum Refer {
    SENIOR_PLANTING = "row-span-3 h-[150px] xx:h-[190px] xs:h-[270px] sm:h-[340px] md:h-[400px] lg:h-[490px] xl:h-[630px]",
    PUT_YOUR_HANDS_UP = "col-span-2 h-[62px] xx:h-[70px] xs:h-[110px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]",
    ROBOT_DANCING = "row-span-2 h-[80px] xx:h-[110px] xs:h-[145px] sm:h-[180px] md:h-[190px] lg:h-[230px] xl:h-[300px]",
    JUNIOR_WITH_THUMBUP = "row-span-3 h-[160px] xx:h-[170px] xs:h-[300px] sm:h-[350px] md:h-[350px] lg:h-[470px] xl:h-[630px]",
    TWO_GIRLS_IN_FRONT_BUILDING = "row-span-2 col-span-2 h-[130px] xx:h-[160px] xs:h-[300px] sm:h-[300px] md:h-[300px] lg:h-[475px] xl:h-[630px]",
    THE_FLOWERS = "row-span-1 h-[50px] xx:h-[100px] xs:h-[120px] sm:h-[120px] md:h-[130px] lg:h-[230px] xl:h-[300px]"
};

type Props = {
    imageSource: string,
    objectPosition: string,
    referenceObject: string
};

const Grid: React.FunctionComponent<Props> = ({ imageSource, objectPosition, referenceObject }) => {
    let objectStyles = "";
    switch (referenceObject) {
        case "SENIOR_PLANTING":
            objectStyles = Refer.SENIOR_PLANTING;
            break;
        case "PUT_YOUR_HANDS_UP":
            objectStyles = Refer.PUT_YOUR_HANDS_UP;
            break;
        case "ROBOT_DANCING":
            objectStyles = Refer.ROBOT_DANCING;
            break;
        case "JUNIOR_WITH_THUMBUP":
            objectStyles = Refer.JUNIOR_WITH_THUMBUP;
            break;
        case "TWO_GIRLS_IN_FRONT_BUILDING":
            objectStyles = Refer.TWO_GIRLS_IN_FRONT_BUILDING;
            break;
        case "THE_FLOWERS":
            objectStyles = Refer.THE_FLOWERS;
            break;
        default: {
            objectStyles = "";
            break;
        }
    }
    return (
        <div className={classNames(
            "relative w-full rounded-md overflow-hidden hover:opacity-80 bg-gray-100",
            "transition duration-200 ease-in-out",
            objectStyles
        )}>
            <Image src={imageSource} layout="fill" objectFit="cover" objectPosition={objectPosition} />
        </div>
    );
};

export default Grid;
