import { CollectionIcon, FingerPrintIcon, FlagIcon, CodeIcon, ChipIcon, FilmIcon, ServerIcon } from "@heroicons/react/outline";

export const Navlinks: { label: string, href: string, hasDropdown: boolean }[] = [
    { label: "Why We", href: "/", hasDropdown: false },
    { label: "Events", href: "/", hasDropdown: true },
    { label: "Rewards", href: "/", hasDropdown: false },
    { label: "Resources", href: "/", hasDropdown: false },
    { label: "Developers", href: "/", hasDropdown: false }
];

export const WhyWeLinks: { label: string, href: string }[] = [
    { label: "ทําไมสาขาอาชีพเราถึงสําคัญ", href: "/" },
    { label: "ทําไมการเรียนสิ่งนี้สําคัญ", href: "/" },
    { label: "ทําไมพวกเราถึงต้องเรียน", href: "/" },
    { label: "ทําไมสิ่งนี้ถึงนิยม", href: "/" }
];

export const EventsLinks: { label: string, href: string }[] = [
    { label: "กิจกรรมของวิทยาลัย", href: "/" },
    { label: "กิจกรรมของสาขาวิชา", href: "/" },
    { label: "การแข่งขันของสาขาวิชา", href: "/" }
]

let LabelForPopover: string[] = [];
EventsLinks.map((item) => (LabelForPopover.push(item.label)));

export const PopoverLinks: { label: string, icon: any, href: string, description: string }[] = [
    {
        label: LabelForPopover[0],
        icon: CollectionIcon,
        href: "/",
        description: "รวมรูปภาพกิจกรรมของวิทยาลัยที่สาขาวิชาเรามีส่วนร่วมในการดําเนินงาน"
    },
    {
        label: LabelForPopover[1],
        icon: FingerPrintIcon,
        href: "/",
        description: "รวมรูปภาพกิจกรรมของสาขาวิชาเราทุกประเภทที่เกี่ยวข้องกับเรา"
    },
    {
        label: LabelForPopover[2],
        icon: FlagIcon,
        href: "/",
        description: "รวมรูปภาพการแข่งขันของนักเรียนนักศึกษาของเราที่ได้เข้าร่วมการแข่งขัน"
    }
];

export const ResourcesLinks: { label: string, href: string }[] = [
    { label: "วงจรอิเล็กทรอนิกส์เบื้องต้น", href: "/" },
    { label: "การเขียนโปรแกรมเบื้องต้น", href: "/" },
    { label: "ระบบเครือข่ายเบื้องต้น", href: "/" },
    { label: "การออกแบบเบื้องต้น", href: "/" },
];

export const GalleryDetails: { imageSource: string, objectPosition: string, referenceObject: string }[] = [
    {
        imageSource: "/images/senior_planting.webp",
        objectPosition: "40% 50%",
        referenceObject: "SENIOR_PLANTING"
    },
    {
        imageSource: "/images/put_your_hands_up.webp",
        objectPosition: "50% 45%",
        referenceObject: "PUT_YOUR_HANDS_UP"        
    },
    {
        imageSource: "/images/robot_dancing.webp",
        objectPosition: "50% 40%",
        referenceObject: "ROBOT_DANCING"        
    },
    {
        imageSource: "/images/junior_with_thumbup.webp",
        objectPosition: "52% 50%",
        referenceObject: "JUNIOR_WITH_THUMBUP"        
    },
    {
        imageSource: "/images/two_girls_in_front_building.webp",
        objectPosition: "50% 50%",
        referenceObject: "TWO_GIRLS_IN_FRONT_BUILDING"        
    },
    {
        imageSource: "/images/the_flowers.webp",
        objectPosition: "50% 50%",
        referenceObject: "THE_FLOWERS"        
    }
];

export const SubjectDetails: { labelSubject: string, iconSource: any, subjectDescription: string }[] = [
    {
        labelSubject: "Programming",
        iconSource: CodeIcon,
        subjectDescription: "วิชาการเขียนโปรแกรมที่ทุกคนต้องลองเพราะเป็นสิ่งที่จําเป็นมากในโลกอนาคต",
    },
    {
        labelSubject: "Microcontroller",
        iconSource: ChipIcon,
        subjectDescription: "วิชาการเขียนโปรแกรมบนไมโครคอนโทรลเลอร์ที่ทําให้เราสามารถสร้างสรรค์ได้ทุกสิ่ง",
    },
    {
        labelSubject: "Editor",
        iconSource: FilmIcon,
        subjectDescription: "วิชาการตัดต่อภาพและวีดีโอเพื่อความสามารถในการสร้างสรรค์ภาพที่มีจินตนาการของเรา",
    },
    {
        labelSubject: "Networking",
        iconSource: ServerIcon,
        subjectDescription: "วิชาระบบเครือข่ายทางดิจิตัลเพื่อเตรียมความพร้อมในการแก้ปัญหาระบบเครือข่ายที่เกิดปัญหา",
    }
];